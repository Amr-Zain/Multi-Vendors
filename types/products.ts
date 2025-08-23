export interface Product {
    barcode: string;
    default_detail: number;
    default_detail_stock: number;
    description: string;
    discount: number;
    discount_type: "percentage" | "fixed";
    end_at: string;
    id: number;
    is_favorite: boolean;
    is_out_of_stock: boolean;
    main: string[];
    name: string;
    price: number;
    price_after_discount: number;
    rate: number;
    rate_count: number;
    sku: string;
    slug: string;
    start_at: string;
    stock: number;
    video: string;
}

export interface HomeSlide {
  description: string;
  discount: number;
  end_at: string;
  id: number;
  image: string;
  order: number;
  start_at: string;
  title: string;
}