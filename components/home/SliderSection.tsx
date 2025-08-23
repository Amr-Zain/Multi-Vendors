import { Link } from "@/i18n/routing";
import { FadeIn } from "../animations";
import { ArrowRight } from "../general/Icons";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
interface SliderSectionProps {
  title: string;
  to?: string;
  children: ReactNode;
  //   slides: ReactNode[];
  //   itemsClass?: string;
  //   carouselClass?: string;
  //   showButtons?: boolean;
}
async function SliderSection({ title, to, children }: SliderSectionProps) {
  const t = await getTranslations();
  return (
    <div>
      <FadeIn
        direction="up"
        delay={0.1}
        duration={0.6}
        className="mb-4 flex items-center justify-between"
      >
        <FadeIn
          direction="left"
          delay={0.2}
          duration={0.6}
          className="text-foreground text-2xl font-bold md:text-4xl md:font-bold"
        >
          {title}
        </FadeIn>
        {to && (
          <FadeIn direction="right" delay={0.2} duration={0.6}>
            <Link
              href={"to"}
              className="text-primary flex cursor-pointer items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-lg"
            >
              {t("TEXT.viewAll") + " "}
              <span className={"rtl:rotate-180"}>
                <ArrowRight />
              </span>
            </Link>
          </FadeIn>
        )}
      </FadeIn>
      {children}
      {/* <Slider
        itemsClass={itemsClass}
        carouselClass={carouselClass}
        showButtons={showButtons}
        slides={slides}
      /> */}
    </div>
  );
}

export default SliderSection;
