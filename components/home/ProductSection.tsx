import Slider from "../general/Slider";
import ProductCard from "../product/ProductCard";
import SectionHead from "../general/SectionHead";
import { Product, Vendor } from "@/types/products";

function ProductSection({
  products,
  title,
  to,
  isVendor
}: {
  products: Product[] | Vendor[];
  title: string;
  to?: string;
  isVendor?:boolean;
}) {
  return (
    <>
      <SectionHead title={title} to={to} />
      <Slider
        itemsClass="basis-1/2 md:ps-1 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
        showButtons={false}
        slides={products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product as Product}
            index={index}
            isVendor={isVendor}
          />
        ))}
      />
    </>
  );
}

export default ProductSection;
