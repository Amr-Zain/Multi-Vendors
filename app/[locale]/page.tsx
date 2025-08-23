import { Phone, Mail } from "@/components/general/Icons";
import { SelectLanguage } from "@/components/general/LanguageSelect";
import { ModeToggle } from "@/components/general/ModeTaggle";
import HomeSlider from "@/components/home/Slider";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { HomeSlide } from "@/types/products";
import { customServerFetch } from "@/util/CustumServerFetch";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const home  = await customServerFetch<{sliders:HomeSlide[]}>('home');
  return (
    <div className="">
      <HomeSlider slides={home.sliders } />
    </div>
  );
}
