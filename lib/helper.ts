import { Product } from "@/types/products";

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




export const categories = [
  // { id: 1, label: "offers", href: "/categories/offers" },
  { id: 2, label: "categories.electronics", href: "/categories/electronics" },
  { id: 3, label: "categories.fashion", href: "/categories/mens-and-womens-fashion" },
  { id: 4, label: "categories.babyProducts", href: "/categories/baby-products" },
  { id: 5, label: "categories.cosmetics", href: "/categories/cosmetics" },
  {
    id: 6,
    label: "categories.electricalAppliances",
    href: "/categories/electrical-appliances",
  },
  { id: 7, label: "categories.animalSupplies", href: "/categories/animal-supplies" },
];
export const menu = [
    { id: 8, label: "NAV.home", href: "/" },
    { id: 9, label: "NAV.FAQ", href: "/faq" },
    { id: 10, label: "NAV.about", href: "/about-us" },

]