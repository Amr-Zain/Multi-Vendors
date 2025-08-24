import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import FavoritButton from "./FavoritButton";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { FadeIn, ScaleIn } from "../animations";
import { PlusIcon, Star } from "../general/Icons";
import { Product, Vendor } from "@/types/products";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Slider from "../general/Slider";

interface ProductCardProps {
  product: Product | Vendor;
  isOffer?: boolean;
  index?: number;
  isVendor?: boolean;
}

async function ProductCard({
  product,
  isVendor = false,
  index = 0,
}: ProductCardProps) {
  const t = await getTranslations();

  const cardBaseDelay = index * 0.05;

  // Extract common properties
  const { id, rate, is_favorite } = product;

  // Extract type-specific properties
  const name = isVendor
    ? (product as Vendor).company_name
    : (product as Product).name;
  const mainImages = isVendor
    ? (product as Vendor).logo
    : (product as Product).main;

  const slug = isVendor
    ? (product as Vendor).username
    : (product as Product).slug;

  const price = isVendor ? undefined : (product as Product).price;
  const price_after_discount = isVendor
    ? undefined
    : (product as Product).price_after_discount;
  const discount_type = isVendor
    ? undefined
    : (product as Product).discount_type;
  const discount = isVendor ? undefined : (product as Product).discount;

  return (
    <FadeIn direction="up" delay={cardBaseDelay}>
      <Card className="relative mx-auto w-full gap-2 overflow-hidden p-2 bg-transparent border-none shadow-none">
        <ScaleIn delay={cardBaseDelay + 0.1}>
          <div className="relative h-82 max-h-110 overflow-hidden bg-card px-10 rounded-lg">
            {isVendor ? (
              <Image
                src={mainImages as string}
                alt={name}
                height={350}
                width={350}
                className="size-full object-contain"
              />
            ) : (
              <Slider
                showButtons={false}
                stopEventPropagation
                slides={(mainImages as string[])?.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt={name}
                    height={350}
                    width={350}
                    className="size-full object-contain"
                  />
                ))}
              />
            )}
            <ScaleIn
              delay={cardBaseDelay + 0.55}
              className="absolute top-2 end-2"
            >
              <FavoritButton isFavorit={is_favorite} favId={id} id={id} />
            </ScaleIn>
            {!isVendor && (
              <ScaleIn
                delay={cardBaseDelay + 0.55}
                className="absolute bottom-2 start-2"
              >
                <Button>
                  <Plus />
                </Button>
              </ScaleIn>
            )}
          </div>
        </ScaleIn>

        <CardTitle>
          <div className="flex gap-2">
            <FadeIn direction="left" delay={cardBaseDelay + 0.3}>
              <Link
                href={isVendor ? `/vendors/${slug}` : `/products/${slug}`}
                className="text-foreground text-lg font-normal"
              >
                {name}
              </Link>
            </FadeIn>
          </div>
        </CardTitle>
        <FadeIn direction="down" delay={cardBaseDelay + 0.25}>
          <div className="flex items-center justify-start gap-1">
            <Star className="transition-transform duration-300 hover:rotate-12" />
            <span>{rate.toFixed(1)}</span>
          </div>
        </FadeIn>

        {!isVendor && price && (
          <FadeIn direction="up" delay={cardBaseDelay + 0.45}>
            <div className="flex items-center justify-between pt-2">
              {discount_type === "percentage" ? (
                <>
                  <FadeIn
                    direction="left"
                    delay={cardBaseDelay + 0.5}
                    className="text-foreground space-x-2"
                  >
                    <span className="font-bold">
                      {price_after_discount}
                      {/* {priceDetails.currency} */}
                    </span>{" "}
                    <span className="text-muted-foreground line-through transition-opacity duration-300">
                      {price}
                      {/* {priceDetails.currency} */}
                    </span>{" "}
                    <span className="text-[12px] font-semibold text-green-600">
                      {t("TEXT.off")} {discount}%
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
        )}
      </Card>
    </FadeIn>
  );
}

export default ProductCard;
