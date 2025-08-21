import { Phone, Mail } from "@/components/general/Icons";
import { SelectLanguage } from "@/components/general/LanguageSelect";
import { ModeToggle } from "@/components/general/ModeTaggle";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

async function Nav() {
  const t = await getTranslations();

  return (
    <div className="w-full h-16 bg-muted text-muted-foreground text-sm">
      <div className="container h-full flex justify-between items-center">
        <div className="flex gap-2">
          <Link href={`tel:+964105685696`} className="flex gap-2 items-center ">
            <Phone />
            <span className="hidden sm:block">+964105685696</span>
          </Link>
          <Link href={`mailto:sales@mota3aded.com`} target="_blank" className="flex gap-2 items-center">
            <Mail />
            <span className="hidden sm:block">sales@mota3aded.com</span>
          </Link>
        </div>
        <div className="flex space-x-4 h-full items-center">
          <ModeToggle />
          <Separator
            orientation="vertical"
            className="!h-4 bg-muted-foreground"
          />
          <SelectLanguage />
          <Separator
            orientation="vertical"
            className="!h-4 bg-muted-foreground hidden lg:block"
          />
          <Link
            className="hover:text-foreground hidden lg:block"
            href={"/return-policy"}
          >
            {t("NAV.policy")}
          </Link>
          <Separator
            orientation="vertical"
            className="!h-4 bg-muted-foreground hidden lg:block"
          />
          <Link className="hover:text-foreground hidden lg:block" href={"/faq"}>
            {t("NAV.FAQ")}
          </Link>
          <Separator
            orientation="vertical"
            className="!h-4 bg-muted-foreground hidden lg:block"
          />
          <Link
            className="hover:text-foreground hidden lg:block"
            href={"/technical-support"}
          >
            {t("NAV.support")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
