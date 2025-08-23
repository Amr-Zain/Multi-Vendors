import * as React from "react";
import Image from "next/image";

import Slider from "../general/Slider";
import { getTranslations } from "next-intl/server";
import { fakeProducts } from "@/lib/helper";
import ProductCard from "../product/ProductCard";
import { FadeIn } from "../animations";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "../general/Icons";
import SliderSection from "./SliderSection";

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

interface HomeSliderProps {
  slides: HomeSlide[];
}

async function HomeSlider({ slides }: HomeSliderProps) {
  const t = await getTranslations();
  return (
    <div className="py-20 space-y-10 container">
      <Slider
        carouselClass="bg-primary h-[300px] md:h-[350px]"
        slides={slides.map((slide) => (
          <div key={slide.id} className="px-4 md:px-8 py-0 h-full">
            <div className="relative flex h-full items-center">
              <div className="flex-1 space-y-4 text-primary-foreground">
                <div
                  className={`flex gap-2 font-bold rounded-full bg-primary-foreground/20 px-4 py-2 text-sm md:text-lg w-fit`}
                >
                  <div>{t("TEXT.off")}</div>
                  <div>{slide.discount}%</div>
                </div>
                <h2 className="text-xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg md:text-3xl">{slide.description}</p>
              </div>
              <div className="flex-1 h-full flex justify-center items-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  objectFit="cover"
                  width={250}
                  height={300}
                />
              </div>
              <div className="absolute -z-1 top-[50%] md:top-1/2 md:-translate-y-1/3 text-[6rem] md:text-[12rem] font-bold text-primary-foreground/10">
                {slide.discount}%
              </div>
            </div>
          </div>
        ))}
      />
      <div>
        <SliderSection title="offers" to="/categories/offers">
          <Slider
            itemsClass="basis-4/5 ps-1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            showButtons={false}
            slides={fakeProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          />
        </SliderSection>
      </div>
    </div>
  );
}
export default HomeSlider;
