"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

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

function HomeSlider({ slides }: HomeSliderProps) {
  if (!slides || slides.length === 0) {
    return null;
  }

  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const t = useTranslations();
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full h-[300px] md:h-[350px] container">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction,
        }}
        setApi={setApi}
        className="relative overflow-hidden rounded-xl bg-primary h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="px-4 md:px-8 py-0 h-full">
                <div className="relative flex h-full items-center">
                  <div className="flex-1 space-y-4 text-primary-foreground">
                    <div
                      className={`flex gap-2 ${
                        direction === "ltr" ? "flex-row-reverse" : "flex-row"
                      }font-bold rounded-full bg-primary-foreground/20 px-4 py-2 text-sm md:text-lg w-fit`}
                    >
                      <div>{t("TEXT.off")}</div>
                      <div>{slide.discount}%</div>
                    </div>
                    <h2 className="text-xl md:text-4xl font-bold">
                      {slide.title}
                    </h2>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index + 1 === current
                  ? "bg-primary-foreground w-12"
                  : "bg-primary-foreground/10 h w-2"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
export default HomeSlider;
