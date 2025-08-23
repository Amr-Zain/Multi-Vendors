import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import FavoritButton from "./FavoritButton";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { FadeIn, ScaleIn } from "../animations";
import { PlusIcon, Star } from "../general/Icons";
import { Product } from "@/types/products";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  isOffer?: boolean;
  index?: number;
}

async function ProductCard({
  product: {
    id,
    name,
    rate,
    is_favorite,
    slug,
    price,
    price_after_discount,
    discount_type,
    discount,
    main,
  },
  index = 0,
}: ProductCardProps) {
  const t = await getTranslations();

  const cardBaseDelay = index * 0.05;
  return (
    <FadeIn direction="up" delay={cardBaseDelay}>
      <Card className="relative mx-auto w-full gap-2 overflow-hidden p-2 bg-transparent border-none shadow-none">
        <ScaleIn delay={cardBaseDelay + 0.1}>
          <div className="relative h-58 max-h-62 overflow-hidden rounded-xl">
            <Image
              src={main[0]}
              alt={name}
              fill
              className="h-full object-cover transition-transform duration-500 hover:scale-110"
            />

            <ScaleIn
              delay={cardBaseDelay + 0.55}
              className="absolute top-2 end-2"
            >
              <FavoritButton isFavorit={is_favorite} favId={id} id={id} />
            </ScaleIn>
            <ScaleIn
              delay={cardBaseDelay + 0.55}
              className="absolute bottom-2 start-2"
            >
              <Button><Plus /></Button>
            </ScaleIn>
          </div>
        </ScaleIn>

        <CardTitle>
          <div className="flex gap-2">
            <FadeIn direction="left" delay={cardBaseDelay + 0.3}>
              <Link href={`/menu/${slug}`} className="text-foreground text-sm font-normal">
                {name}
              </Link>
            </FadeIn>
          </div>
        </CardTitle>
         <FadeIn direction="down" delay={cardBaseDelay + 0.25}>
          <div className="flex items-center justify-start gap-1 rounded-full">
            <Star className="transition-transform duration-300 hover:rotate-12" />
            <span className="font-bold">{rate.toFixed(1)}</span>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={cardBaseDelay + 0.45}>
          <div className="flex items-center justify-between pt-2">
            {discount_type === "percentage" ? (
              <>
                <FadeIn
                  direction="left"
                  delay={cardBaseDelay + 0.5}
                  className="text-foreground"
                >
                      <span className="font-bold">
                    {price_after_discount}
                    {/* {priceDetails.currency} */}
                  </span>{" "}
                  <span className="text-muted-foreground line-through transition-opacity duration-300">
                    {price}
                    {/* {priceDetails.currency} */}
                  </span>{" "}
                
                  <span className="text-[12px] font-semibold">
                    <span>{t("TEXT.off")}</span>
                    <span>{discount}</span>
                  </span>
                </FadeIn>
              </>
            ) : (
              <div className="flex w-full items-center justify-between">
                <FadeIn direction="left" delay={cardBaseDelay + 0.5}>
                  <span className="text-text font-bold">
                    {price} {/* {priceDetails.currency} */}
                  </span>
                </FadeIn>
              </div>
            )}
          </div>
        </FadeIn>
       
      </Card>
    </FadeIn>
  );
}

export default ProductCard;
