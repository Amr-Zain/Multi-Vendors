import Cookies from 'js-cookie';

interface CustomFetchOptions extends RequestInit {
    params?: Record<string, string>;
    next?: {
        cache?: 'force-cache' | 'no-store';
        revalidate?: number;
        tags?: string[];
    };
}

export async function customClientFetch<T>(endpoint: string, options: CustomFetchOptions = {}): Promise<T> {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
    const url = new URL(endpoint, baseURL);
    //const serverCookies = await cookies();

    const { params, next, ...fetchOptions } = options;

    const defaultHeaders = {
        'Content-Type': 'application/json',
        'os': 'web',
    };

    const headers = new Headers({
        ...defaultHeaders,
        ...(fetchOptions.headers as Record<string, string>),
    });

    try {
        const locale = Cookies.get('NEXT_LOCALE') || 'en';
        headers.set('Accept-Language', locale);

        const token = Cookies.get('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        } else {
            const guestToken = Cookies.get('guest_token');
            if (guestToken) {
                url.searchParams.append('guest_token', guestToken);
            }
        }
/* 
        // Handle store cookie
        const storeCookie = serverCookies.get('store')?.value;
        if (storeCookie) {
            try {
                const store = JSON.parse(storeCookie);
                if (store && store.id) {
                    url.searchParams.append('store_id', store.id);
                }
            } catch (parseError) {
                console.warn("Failed to parse 'store' cookie:", parseError);
            }
        } */

        // Append provided params
        if (params) {
            for (const key in params) {
                if (Object.prototype.hasOwnProperty.call(params, key)) {
                    url.searchParams.append(key, params[key]);
                }
            }
        }
    } catch (error) {
        console.error("Error preparing fetch request:", error);
        throw error;
    }

    const res = await fetch(url.toString(), {
        ...fetchOptions,
        headers: headers,
        cache: next?.cache,
        next: {
            revalidate: next?.revalidate,
            tags: next?.tags,
        },
    });

    if (!res.ok) {
        // Throw an error for non-2xx status codes
        const errorText = await res.text();
        throw new Error(`HTTP error! status: ${res.status}, body: ${errorText}`);
    }

    return await res.json();
}