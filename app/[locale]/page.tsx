import { CategoriesSection } from "@/components/home/Categories";
import ProductSection from "@/components/home/ProductSection";
import HomeSlider from "@/components/home/Slider";
import { fakeProducts } from "@/lib/helper";
import { Category, HomeSlide, Product, Vendor } from "@/types/products";
import { customServerFetch } from "@/util/CustumServerFetch";

export default async function Home() {
  const home = await customServerFetch<{
    sliders: HomeSlide[];
    discovery: Category[];
    most_rated: Product[];
    recommended: Product[];
    traders: Vendor[];
  }>("home");
  console.log(home);
  return (
    <div className="py-20 space-y-10 container">
      <HomeSlider slides={home.sliders} />
      <div className="section-bg-muted py-6">
        <ProductSection
          title={"offers"}
          to="/categories/offers"
          products={fakeProducts as Product[]}
        />
      </div>
      <CategoriesSection categories={home.discovery} />
      <div className="section-bg-muted py-6">
        <ProductSection title={"منتجات موصي بها"} products={home.most_rated} />
      </div>
      <div>
        <ProductSection title={"الأكثر مبيعاً"} products={home.recommended} />
      </div>
      <div className="section-bg-muted py-6">
        <ProductSection
          title={"التجار"}
          to="/traders"
          products={home.traders}
          isVendor
        />
      </div>
    </div>
  );
}
