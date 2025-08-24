import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Link } from "@/i18n/routing";
import Slider from "../general/Slider";
import { Category } from "@/types/products";
import { FadeIn } from "../animations";
import SectionHead from "../general/SectionHead";

export function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <div className="py-6">
      <SectionHead title={"اكتشف متعدد!"} />

      <Slider
        itemsClass="basis-1/2 md:ps-1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5"
        showButtons
        slides={categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      />
    </div>
  );
}
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="w-full max-w-md border-border/40  bg-gradient-to-t from-[#D7AEEA2B] to-card shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="px-6 grid grid-cols-2  items-center space-x-4 ">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-card-foreground">
              {category.title}
            </h3>
          </div>
          <div className="">
            <Image
              src={category.image}
              alt={category.title}
              width={100}
              height={100}
              className="w-[190px] md:h-[100px] h-[70px] object-contain "
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
