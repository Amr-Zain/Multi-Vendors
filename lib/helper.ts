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
  {  id: 22,label: "categories.clothes", href: "/categories/clothes" },
  { id: 5, label: "categories.cosmetics", href: "/categories/cosmetics" },
  {
    id: 6,
    label: "categories.electricalAppliances",
    href: "/categories/electrical-appliances",
  },
  { id: 7, label: "categories.animalSupplies", href: "/categories/animal-supplies" },
  { id: 8, label: "categories.foodDrinks", href: "/categories/food-and-drinks" },
  // {  id: 111,label: "Das", href: "/categories/das" },

];
export const menu = [
  { id: 9, label: "NAV.home", href: "/" },
  { id: 10, label: "NAV.FAQ", href: "/faq" },
  { id: 11, label: "NAV.about", href: "/about-us" },
  {  id: 12, label: "NAV.support", href: "/support" },
  {  id: 13, label: "NAV.complaints", href: "/complaints" },
  {  id: 14, label: "NAV.policy", href: "/privacy" },
]

export const fakeProducts = [

  {

    "id": 76,

    "main": [

      "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/products\/r9ZQKhwPoYOgV777oV1xCxKnKkQ4vfiH0xprkx0Z.jpg"

    ],

    "video": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

    "rate": 0,

    "rate_count": 0,

    "is_favorite": false,

    "name": "\u0628\u0646\u0637\u0644\u0648\u0646 \u062c\u064a\u0646\u0632 \u0627\u064a\u0631 \u0641\u0644\u064a\u0643\u0633 \u0628\u0644\u0633",

    "description": "<p><br><\/p><p>\u0628\u0646\u0637\u0644\u0648\u0646 \u062c\u064a\u0646\u0632 \u0625\u064a\u0631 \u0641\u0644\u064a\u0643\u0633 \u0628\u0644\u0633 \u0645\u0646 American Eagle \u0647\u0648 \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0628\u0646\u0627\u0637\u064a\u0644 \u0627\u0644\u062c\u064a\u0646\u0632 \u0627\u0644\u062a\u064a \u062a\u062a\u0645\u064a\u0632 \u0628\u0645\u0631\u0648\u0646\u0629 \u0639\u0627\u0644\u064a\u0629 \u0648\u0642\u0627\u0628\u0644\u064a\u0629 \u0644\u0644\u062a\u0645\u062f\u062f\u060c \u0645\u0645\u0627 \u064a\u0648\u0641\u0631 \u062d\u0631\u064a\u0629 \u0627\u0644\u062d\u0631\u0643\u0629 \u0648\u0627\u0644\u0631\u0627\u062d\u0629 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u0627\u0631\u062a\u062f\u0627\u0621. \u064a\u0623\u062a\u064a \u0647\u0630\u0627 \u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646 \u0628\u0642\u0635\u0629 \u0639\u0627\u062f\u064a\u0629 \u0623\u0648 \u0636\u064a\u0642\u0629 \u062d\u0633\u0628 \u0627\u0644\u062a\u0641\u0636\u064a\u0644\u060c \u0648\u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u0635\u0645\u064a\u0645 \u0639\u0635\u0631\u064a \u0648\u0645\u062a\u0646\u0648\u0639 \u064a\u0646\u0627\u0633\u0628 \u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0623\u0630\u0648\u0627\u0642 \u0648\u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062a.<\/p><p><br><\/p><p>\u064a\u062a\u0645\u064a\u0632 \u0628\u0646\u0637\u0644\u0648\u0646 American Eagle \u0628\u062c\u0648\u062f\u0629 \u062a\u0635\u0646\u064a\u0639 \u0639\u0627\u0644\u064a\u0629\u060c \u0648\u064a\u062a\u0648\u0641\u0631 \u0628\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u062a\u0646\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0623\u0646\u0645\u0627\u0637 \u0644\u062a\u0646\u0627\u0633\u0628 \u0627\u0644\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0634\u062e\u0635\u064a \u0644\u0643\u0644 \u0634\u062e\u0635. \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0630\u0644\u0643\u060c \u064a\u062a\u0645\u062a\u0639 \u0647\u0630\u0627 \u0627\u0644\u0628\u0646\u0637\u0644\u0648\u0646 \u0628\u0642\u062f\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062a\u062d\u0645\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629\u060c \u0645\u0645\u0627 \u064a\u062c\u0639\u0644\u0647 \u062e\u064a\u0627\u0631\u064b\u0627 \u0645\u062b\u0627\u0644\u064a\u064b\u0627 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u064a\u0648\u0645\u064a.<\/p><p><br><\/p><p>\u064a\u0639\u062a\u0628\u0631 \u0628\u0646\u0637\u0644\u0648\u0646 \u062c\u064a\u0646\u0632 \u0625\u064a\u0631 \u0641\u0644\u064a\u0643\u0633 \u0628\u0644\u0633 \u0645\u0646 American Eagle \u062e\u064a\u0627\u0631\u064b\u0627 \u0631\u0627\u0626\u0639\u064b\u0627 \u0644\u0645\u0646 \u064a\u0628\u062d\u062b\u0648\u0646 \u0639\u0646 \u0627\u0644\u0631\u0627\u062d\u0629 \u0648\u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a\u060c \u0633\u0648\u0627\u0621 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645\u0647 \u0644\u0644\u0639\u0645\u0644 \u0623\u0648 \u0644\u0642\u0636\u0627\u0621 \u0648\u0642\u062a \u0627\u0644\u0641\u0631\u0627\u063a.<\/p>",

    "slug": "test-ar",

    "sku": "SKU-141673",

    "barcode": "PRD-CAT-7824",

    "vendor": {

      "id": 32,

      "user_type": "vendor",

      "username": "alamyia",

      "logo": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/users\/6IOvA62g9wzmCJ6RRjPFgGhkgVkx2jHLchfa5soN.webp",

      "banner": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

      "company_name": "Alamyia",

      "created_at": "2025-05-08",

      "rate": 0,

      "rate_count": 0,

      "is_favorite": false

    },

    "brand": {

      "id": 7,

      "name": "H&M",

      "slug": "h-m",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/brands\/LsI71qgFh0i2yQZ9PQjRdcrHjKsBcyYmCZT1lPQP.png"

    },

    "category": {

      "id": 16,

      "title": "\u0623\u0632\u064a\u0627\u0621 \u0627\u0644\u0631\u062c\u0627\u0644 \u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "slug": "\u0623\u0632\u064a\u0627\u0621-\u0627\u0644\u0631\u062c\u0627\u0644-\u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/bR1v2tpGigp5UNTqNOoSymO3SwpVvP5DOxthE7x6.png"

    },

    "sub_category": {

      "id": 21,

      "title": "\u0631\u062c\u0627\u0644\u064a",

      "slug": "\u0631\u062c\u0627\u0644\u064a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/9xYi2XBaJ7X9cvzHK4GJ8SFfxf79ODAnyrVZSwru.jpg"

    },

    "sub_sub_category": {

      "id": 26,

      "title": "\u0628\u0646\u0627\u0637\u064a\u0644",

      "slug": "\u0628\u0646\u0627\u0637\u064a\u0644",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/gcut2841qNmRHt1m3T0ONQGz4z0m2gDCPwu6MdHh.jpg"

    },

    "default_detail_stock": 175,

    "is_out_of_stock": false,

    "stock": 365,

    "default_detail": 145,

    "price": 190,

    "price_after_discount": 152,

    "discount": 20,

    "discount_type": "percentage",

    "start_at": "09-05-2025",

    "end_at": "31-08-2025"

  },

  {

    "id": 104,

    "main": [

      "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/products\/OBaFHsJ34mJXHH5Mehmtt1BWZNCjoFnOiR7Ank6G.jpg"

    ],

    "video": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

    "rate": 0,

    "rate_count": 0,

    "is_favorite": false,

    "name": "\u062a\u064a\u0634\u0631\u062a\u0627\u062a \u0643\u0628\u064a\u0631\u0629 \u0627\u0644\u062d\u062c\u0645 \u0644\u0644\u0631\u062c\u0627\u0644 \u0645\u0646 \u0628\u0627\u0645",

    "description": "<p><br><\/p><p>\u0627\u0644\u062a\u064a\u0634\u064a\u0631\u062a\u0627\u062a \u0630\u0627\u062a \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0643\u0628\u064a\u0631 \u0647\u064a \u062a\u064a\u0634\u064a\u0631\u062a\u0627\u062a \u0641\u0636\u0641\u0627\u0636\u0629 \u0630\u0627\u062a \u0635\u0648\u0631\u0629 \u0638\u0644\u064a\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u062a\u064a \u0634\u064a\u0631\u062a\u0627\u062a \u0627\u0644\u0639\u0627\u062f\u064a\u0629.\u0645\u0634\u0647\u0648\u0631\u0629 \u0628\u062a\u0635\u0645\u064a\u0645\u0647\u0627 \u0627\u0644\u0645\u0631\u064a\u062d \u0648\u0627\u0644\u0639\u0645\u0644\u064a\u060c \u0648\u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0631\u062a\u062f\u064a\u0647\u0627 \u0627\u0644\u0623\u0634\u062e\u0627\u0635 \u0645\u0646 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0646\u0627\u0633 \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0631.<\/p>",

    "slug": "\u062a\u064a\u0634\u0631\u062a\u0627\u062a-\u0643\u0628\u064a\u0631\u0629-\u0627\u0644\u062d\u062c\u0645-\u0644\u0644\u0631\u062c\u0627\u0644-\u0645\u0646-\u0628\u0627\u0645",

    "sku": "SKU-704368",

    "barcode": "PRD-CAT-5010",

    "vendor": {

      "id": 32,

      "user_type": "vendor",

      "username": "alamyia",

      "logo": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/users\/6IOvA62g9wzmCJ6RRjPFgGhkgVkx2jHLchfa5soN.webp",

      "banner": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

      "company_name": "Alamyia",

      "created_at": "2025-05-08",

      "rate": 0,

      "rate_count": 0,

      "is_favorite": false

    },

    "brand": {

      "id": 7,

      "name": "H&M",

      "slug": "h-m",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/brands\/LsI71qgFh0i2yQZ9PQjRdcrHjKsBcyYmCZT1lPQP.png"

    },

    "category": {

      "id": 16,

      "title": "\u0623\u0632\u064a\u0627\u0621 \u0627\u0644\u0631\u062c\u0627\u0644 \u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "slug": "\u0623\u0632\u064a\u0627\u0621-\u0627\u0644\u0631\u062c\u0627\u0644-\u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/bR1v2tpGigp5UNTqNOoSymO3SwpVvP5DOxthE7x6.png"

    },

    "sub_category": {

      "id": 21,

      "title": "\u0631\u062c\u0627\u0644\u064a",

      "slug": "\u0631\u062c\u0627\u0644\u064a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/9xYi2XBaJ7X9cvzHK4GJ8SFfxf79ODAnyrVZSwru.jpg"

    },

    "sub_sub_category": {

      "id": 27,

      "title": "\u062a\u064a\u0634\u0631\u062a",

      "slug": "\u062a\u064a\u0634\u0631\u062a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/4ZvKvGq8lUTHC4FCDiaqZzS8N1q8TK8ckdDUUePU.jpg"

    },

    "default_detail_stock": 138,

    "is_out_of_stock": false,

    "stock": 437,

    "default_detail": 147,

    "price": 150,

    "price_after_discount": 120,

    "discount": 20,

    "discount_type": "percentage",

    "start_at": "25-06-2025",

    "end_at": "31-10-2025"

  },

  {

    "id": 105,

    "main": [

      "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/products\/YeQerkn2bBVMuf9BUWXWOouHj1Zls1bV5kPDJgqG.jpg"

    ],

    "video": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

    "rate": 4,

    "rate_count": 1,

    "is_favorite": false,

    "name": "\u062a\u064a\u0634\u0631\u062a \u0645\u0637\u0628\u0648\u0639 \u0644\u0644\u0631\u062c\u0627\u0644 \u0645\u0646 \u0643\u0644\u064a\u0648\u0643\u0648\u062a\u0648\u0646",

    "description": "<p>\u062a\u064a\u0634\u0631\u062a \u0644\u0644\u0631\u062c\u0627\u0644 \u0628\u0631\u0642\u0628\u0629 \u062f\u0627\u0626\u0631\u064a\u0629 \u0636\u064a\u0642\u0629 \u0645\u0646 \u0627\u0644\u0642\u0637\u0646 \u0627\u0644\u0641\u0627\u062e\u0631 \u0628\u0637\u0628\u0627\u0639\u0629 \u0628\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 | \u062a\u064a\u0634\u0631\u062a \u0628\u0623\u0643\u0645\u0627\u0645 \u0642\u0635\u064a\u0631\u0629 \u0644\u0644\u0631\u062c\u0627\u0644. \u0646\u0633\u064a\u062c \u062d\u0644\u0642\u064a 60% \u0642\u0637\u0646\/40% \u0628\u0648\u0644\u064a\u0633\u062a\u0631\u060c \u0641\u0627\u0626\u0642 \u0627\u0644\u0646\u0639\u0648\u0645\u0629\u060c \u062c\u064a\u062f \u0627\u0644\u062a\u0647\u0648\u064a\u0629 (\u0635\u0646\u0639 \u0641\u064a \u0645\u0635\u0631).<\/p>",

    "slug": "\u062a\u064a\u0634\u0631\u062a-\u0645\u0637\u0628\u0648\u0639-\u0644\u0644\u0631\u062c\u0627\u0644-\u0645\u0646-\u0643\u0644\u064a\u0648\u0643\u0648\u062a\u0648\u0646",

    "sku": "SKU-316911",

    "barcode": "PRD-CAT-3769",

    "vendor": {

      "id": 32,

      "user_type": "vendor",

      "username": "alamyia",

      "logo": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/users\/6IOvA62g9wzmCJ6RRjPFgGhkgVkx2jHLchfa5soN.webp",

      "banner": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

      "company_name": "Alamyia",

      "created_at": "2025-05-08",

      "rate": 0,

      "rate_count": 0,

      "is_favorite": false

    },

    "brand": {

      "id": 7,

      "name": "H&M",

      "slug": "h-m",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/brands\/LsI71qgFh0i2yQZ9PQjRdcrHjKsBcyYmCZT1lPQP.png"

    },

    "category": {

      "id": 16,

      "title": "\u0623\u0632\u064a\u0627\u0621 \u0627\u0644\u0631\u062c\u0627\u0644 \u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "slug": "\u0623\u0632\u064a\u0627\u0621-\u0627\u0644\u0631\u062c\u0627\u0644-\u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/bR1v2tpGigp5UNTqNOoSymO3SwpVvP5DOxthE7x6.png"

    },

    "sub_category": {

      "id": 21,

      "title": "\u0631\u062c\u0627\u0644\u064a",

      "slug": "\u0631\u062c\u0627\u0644\u064a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/9xYi2XBaJ7X9cvzHK4GJ8SFfxf79ODAnyrVZSwru.jpg"

    },

    "sub_sub_category": {

      "id": 27,

      "title": "\u062a\u064a\u0634\u0631\u062a",

      "slug": "\u062a\u064a\u0634\u0631\u062a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/4ZvKvGq8lUTHC4FCDiaqZzS8N1q8TK8ckdDUUePU.jpg"

    },

    "default_detail_stock": 147,

    "is_out_of_stock": false,

    "stock": 446,

    "default_detail": 150,

    "price": 150,

    "price_after_discount": 105,

    "discount": 30,

    "discount_type": "percentage",

    "start_at": "25-06-2025",

    "end_at": "31-01-2026"

  },

  {

    "id": 106,

    "main": [

      "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/products\/rDTXHy29B0KuUccdLUfxvmn80EAIOUeCBtaRdXeN.jpg"

    ],

    "video": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

    "rate": 0,

    "rate_count": 0,

    "is_favorite": false,

    "name": "\u062f\u064a\u0627\u062f\u0648\u0631\u0627 \u062a\u064a\u0634\u0631\u062a \u0642\u0637\u0646 \u0645\u0637\u0628\u0648\u0639 \u0644\u0644\u0631\u062c\u0627\u0644",

    "description": "<p>\u064a\u0627\u062f\u0648\u0631\u0627 \u062a\u064a\u0634\u0631\u062a \u0642\u0637\u0646 \u0645\u0637\u0628\u0648\u0639 \u0644\u0644\u0631\u062c\u0627\u0644 - \u0645\u0642\u0627\u0633 L\u060c \u0644\u0648\u0646 \u0643\u0627\u0641\u064a\u0647\u060c \u062a\u0645 \u062a\u0635\u0645\u064a\u0645 \u0647\u0630\u0627 \u0627\u0644\u062a\u064a\u0634\u064a\u0631\u062a \u0630\u0648 \u0627\u0644\u0631\u0642\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062f\u064a\u0631\u0629 \u0645\u0646 \u0642\u0645\u0627\u0634 \u062c\u0648\u0631\u0633\u064a\u0647\u060c \u0645\u0645\u0627 \u064a\u0639\u0632\u0632 \u0627\u0644\u0646\u0645\u0648\u0630\u062c\u060c \u0648\u0647\u0648 \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0645\u0644\u064a\u0626\u0629 \u0628\u0627\u0644\u0631\u064a\u0627\u0636\u0629<\/p>",

    "slug": "\u062f\u064a\u0627\u062f\u0648\u0631\u0627-\u062a\u064a\u0634\u0631\u062a-\u0642\u0637\u0646-\u0645\u0637\u0628\u0648\u0639-\u0644\u0644\u0631\u062c\u0627\u0644",

    "sku": "SKU-580242",

    "barcode": "PRD-CAT-3570",

    "vendor": {

      "id": 32,

      "user_type": "vendor",

      "username": "alamyia",

      "logo": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/users\/6IOvA62g9wzmCJ6RRjPFgGhkgVkx2jHLchfa5soN.webp",

      "banner": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

      "company_name": "Alamyia",

      "created_at": "2025-05-08",

      "rate": 0,

      "rate_count": 0,

      "is_favorite": false

    },

    "brand": {

      "id": 7,

      "name": "H&M",

      "slug": "h-m",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/brands\/LsI71qgFh0i2yQZ9PQjRdcrHjKsBcyYmCZT1lPQP.png"

    },

    "category": {

      "id": 16,

      "title": "\u0623\u0632\u064a\u0627\u0621 \u0627\u0644\u0631\u062c\u0627\u0644 \u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "slug": "\u0623\u0632\u064a\u0627\u0621-\u0627\u0644\u0631\u062c\u0627\u0644-\u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/bR1v2tpGigp5UNTqNOoSymO3SwpVvP5DOxthE7x6.png"

    },

    "sub_category": {

      "id": 21,

      "title": "\u0631\u062c\u0627\u0644\u064a",

      "slug": "\u0631\u062c\u0627\u0644\u064a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/9xYi2XBaJ7X9cvzHK4GJ8SFfxf79ODAnyrVZSwru.jpg"

    },

    "sub_sub_category": {

      "id": 27,

      "title": "\u062a\u064a\u0634\u0631\u062a",

      "slug": "\u062a\u064a\u0634\u0631\u062a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/4ZvKvGq8lUTHC4FCDiaqZzS8N1q8TK8ckdDUUePU.jpg"

    },

    "default_detail_stock": 194,

    "is_out_of_stock": false,

    "stock": 194,

    "default_detail": 156,

    "price": 197,

    "price_after_discount": 147,

    "discount": 50,

    "discount_type": "fixed",

    "start_at": "25-06-2025",

    "end_at": "22-10-2025"

  },

  {

    "id": 107,

    "main": [

      "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/products\/AOAcQw1t7Qm6cjddcfAYxuBZEf5St0CcOmgcu4kh.jpg"

    ],

    "video": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

    "rate": 0,

    "rate_count": 0,

    "is_favorite": false,

    "name": "\u062f\u064a\u0627\u062f\u0648\u0631\u0627 \u062a\u064a\u0634\u0631\u062a \u0642\u0637\u0646 \u0645\u0637\u0628\u0648\u0639 \u0644\u0644\u0631\u062c\u0627\u0644",

    "description": "<p>\u064a\u0627\u062f\u0648\u0631\u0627 \u062a\u064a\u0634\u0631\u062a \u0642\u0637\u0646 \u0645\u0637\u0628\u0648\u0639 \u0644\u0644\u0631\u062c\u0627\u0644 - \u0645\u0642\u0627\u0633 L\u060c \u0644\u0648\u0646 \u0643\u0627\u0641\u064a\u0647\u060c \u062a\u0645 \u062a\u0635\u0645\u064a\u0645 \u0647\u0630\u0627 \u0627\u0644\u062a\u064a\u0634\u064a\u0631\u062a \u0630\u0648 \u0627\u0644\u0631\u0642\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062f\u064a\u0631\u0629 \u0645\u0646 \u0642\u0645\u0627\u0634 \u062c\u0648\u0631\u0633\u064a\u0647\u060c \u0645\u0645\u0627 \u064a\u0639\u0632\u0632 \u0627\u0644\u0646\u0645\u0648\u0630\u062c\u060c \u0648\u0647\u0648 \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0645\u0644\u064a\u0626\u0629 \u0628\u0627\u0644\u0631\u064a\u0627\u0636\u0629<\/p>",

    "slug": "\u062f\u064a\u0627\u062f\u0648\u0631\u0627-\u062a\u064a\u0634\u0631\u062a-\u0642\u0637\u0646-\u0645\u0637\u0628\u0648\u0639-\u0644\u0644\u0631\u062c\u0627\u0644-1",

    "sku": "SKU-920856",

    "barcode": "PRD-CAT-7925",

    "vendor": {

      "id": 32,

      "user_type": "vendor",

      "username": "alamyia",

      "logo": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/users\/6IOvA62g9wzmCJ6RRjPFgGhkgVkx2jHLchfa5soN.webp",

      "banner": "https:\/\/multi-vendors-989.saied.aait-d.com\/assets\/images\/default\/default.png",

      "company_name": "Alamyia",

      "created_at": "2025-05-08",

      "rate": 0,

      "rate_count": 0,

      "is_favorite": false

    },

    "brand": {

      "id": 7,

      "name": "H&M",

      "slug": "h-m",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/brands\/LsI71qgFh0i2yQZ9PQjRdcrHjKsBcyYmCZT1lPQP.png"

    },

    "category": {

      "id": 16,

      "title": "\u0623\u0632\u064a\u0627\u0621 \u0627\u0644\u0631\u062c\u0627\u0644 \u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "slug": "\u0623\u0632\u064a\u0627\u0621-\u0627\u0644\u0631\u062c\u0627\u0644-\u0648\u0627\u0644\u0646\u0633\u0627\u0621",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/bR1v2tpGigp5UNTqNOoSymO3SwpVvP5DOxthE7x6.png"

    },

    "sub_category": {

      "id": 21,

      "title": "\u0631\u062c\u0627\u0644\u064a",

      "slug": "\u0631\u062c\u0627\u0644\u064a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/9xYi2XBaJ7X9cvzHK4GJ8SFfxf79ODAnyrVZSwru.jpg"

    },

    "sub_sub_category": {

      "id": 27,

      "title": "\u062a\u064a\u0634\u0631\u062a",

      "slug": "\u062a\u064a\u0634\u0631\u062a",

      "image": "https:\/\/multi-vendors-989.saied.aait-d.com\/storage\/images\/categories\/4ZvKvGq8lUTHC4FCDiaqZzS8N1q8TK8ckdDUUePU.jpg"

    },

    "default_detail_stock": 155,

    "is_out_of_stock": false,

    "stock": 455,

    "default_detail": 155,

    "price": 150,

    "price_after_discount": 75,

    "discount": 50,

    "discount_type": "percentage",

    "start_at": "25-06-2025",

    "end_at": "30-09-2025"

  }

]
