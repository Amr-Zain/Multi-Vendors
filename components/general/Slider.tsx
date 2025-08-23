"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

interface HomeSliderProps {
  slides: React.ReactNode[];
  showButtons?: boolean;
  carouselClass?: string;
  itemsClass?: string;
}

function Slider({
  slides,
  showButtons = true,
  carouselClass="",
  itemsClass="",
}: HomeSliderProps) {
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
    <div className="w-full container">{/*   */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction,
        }}
        setApi={setApi}
        className={"relative overflow-hidden rounded-xl h-full "+carouselClass}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              className={itemsClass}
              key={`slide ${index}`}
            >
              {slide}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showButtons && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  index + 1 === current
                    ? "bg-primary-foreground w-12"
                    : "bg-primary-foreground/10 h w-2"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  );
}
export default Slider;
