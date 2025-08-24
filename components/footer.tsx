import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Facebook, Youtube, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import { categories, menu } from "@/lib/helper";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Image from "next/image";

// Arrays to map over for content
const sections = [
  {
    title: "categories.categories",
    links: categories.slice(0, 5),
  },
  {
    title: "",
    links: categories.slice(5),
  },
  {
    title: "TEXT.more",
    links: menu,
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "facebook" },
  { icon: Youtube, href: "#", label: "youtube" },
  { icon: Youtube, href: "#", label: "youtube" },
  { icon: X, href: "#", label: "x" },
];

const payment = ["visa", "master", "paypal", "mada"];

const Footer = async () => {
  const t = await getTranslations();
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <footer className="bg-background text-foreground py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.title && (
                <h3 className="text-lg font-semibold">{t(section.title)}</h3>
              )}
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download The App section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.downloadTheApp")}</h3>
            <div className="space-y-2">
              <div>
                <a href="#">
                  <Image
                    src={`/assets/images/${theme}AppStore.png`}
                    alt={t("footer.appStoreAlt")}
                    width={100}
                    height={20}
                  />
                </a>
              </div>

              <div>
                <a href="#">
                  <Image
                    src={`/assets/images/${
                      theme === "system" ? "dark" : theme
                    }GooglePlay.png`}
                    alt={t("footer.googlePlayAlt")}
                    width={100}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Follow us on section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.followUsOn")}</h3>
            <div className="flex gap-4 justify-around">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a href={social.href} aria-label={t(`footer.socialMedia.${social.label}`)}>
                    <social.icon className="h-4 w-4 text-muted-foreground" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex-1 text-center md:text-start">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          <div className="flex flex-1 justify-center md:justify-end space-x-2">
            {payment.map((item, i) => (
              <div className="flex items-center">
                <Image
                  key={i}
                  src={`/assets/images/payment/${item}.png`}
                  alt={item}
                  width={100}
                  height={50}
                  className={"w-auto h-auto"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
