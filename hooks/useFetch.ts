import { useRouter } from "@/i18n/routing";
import { customClientFetch } from "@/util/CustumClientFetch";
import {
    useQuery,
    useSuspenseQuery,
    UseQueryOptions,
    QueryKey,
    UseSuspenseQueryOptions,
} from "@tanstack/react-query";
// import { logOut } from "@/utils/helpers";
import { useLocale, useTranslations } from "next-intl";

interface UseFetchProps<TData = unknown, TError = unknown>
    extends Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn"> {
    queryKey: QueryKey;
    endpoint: string | null;
    enabled?: boolean;
    select?: (data: TData) => any;
    onError?: (err: TError) => void;
    onSuccess?: (data: TData) => void;
    general?: boolean;
    params?: Record<string, any>;
    suspense?: boolean;
}

function useFetch<TData = unknown, TError = unknown>({
    queryKey,
    endpoint,
    enabled = true,
    select,
    onError: originalOnError,
    onSuccess,
    general = false,
    params,
    suspense = false, // Default to false for backward compatibility
    ...props
}: UseFetchProps<TData, TError>) {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const paginationParams = {
        page: params?.page || 1,
        limit: params?.limit || 10,
    };

    const queryFn = async () => {
        try {
            if (!endpoint) {
                throw new Error("Endpoint is required");
            }
            const res = await customClientFetch<{ data: TData }>(endpoint, { params: { ...params, ...paginationParams } })
            console.log("res",res)
            if ((res.data as any)?.error) {
                throw new Error((res.data as any).message || t("no_data"));
            }

            if (onSuccess) {
                onSuccess(res.data as TData);
            }

            return res.data;
        } catch (err: any) {
            // throw err;
            if (originalOnError) {
                originalOnError(err);
            }

            // Don't show toast in suspense mode as error boundaries will handle it
            if (!suspense) {
                //toast.error(err?.response?.data?.message || err.message);
            }

            if (err.response?.status === 401) {
                //logOut();
                router.replace("/auth/login");
            }

            throw err;
        }
    };

    const commonOptions = {
        staleTime: 60_000,
        ...props,
        queryKey: [...queryKey, locale, paginationParams.page],
        queryFn,
        enabled: !!endpoint && enabled,
        select,
    };

    if (suspense) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useSuspenseQuery(
            commonOptions as UseSuspenseQueryOptions<TData, TError>
        );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(commonOptions);
}

export default useFetch;