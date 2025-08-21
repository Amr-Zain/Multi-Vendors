
export const debounce = <T extends any[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};


export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}


export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "تيشيرت كبيرة الحجم للرجال من بام",
    price: "120 د.ج",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "تيشيرت مطبوع للرجال من كيليوكوتون",
    price: "105 د.ج",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "ديادورا تيشيرت قطني مطبوع للرجال",
    price: "147 د.ج",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "شورت رياضي للرجال",
    price: "99 د.ج",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "هودي بسحاب",
    price: "150 د.ج",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "جينز كاجوال للرجال",
    price: "200 د.ج",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop&crop=center",
  },
];
