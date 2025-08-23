export interface Product {
 id: number;
  main: string[];
  video: string;
  rate: number;
  rate_count: number;
  is_favorite: boolean;
  name: string;
  description: string;
  slug: string;
  sku: string;
  barcode: string;
  vendor: Vendor;
  brand: Brand;
  category: Category;
  sub_category: Category;
  sub_sub_category: Category;
  default_detail_stock: number;
  is_out_of_stock: boolean;
  stock: number;
  default_detail: number;
  price: number;
  price_after_discount: number;
  discount: number;
  discount_type: 'percentage' | 'fixed';
  start_at: string;
  end_at: string;
}

export interface Vendor {
  id: number;
  user_type: string;
  username: string;
  logo: string;
  banner: string;
  company_name: string;
  created_at: string;
  rate: number;
  rate_count: number;
  is_favorite: boolean;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  image: string;
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