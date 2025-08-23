import Image from "next/image";
import Nav from "./nav";
import { getTranslations } from "next-intl/server";
import {
  Bell,
  Cart,
  FavoriteIcon,
  Location,
  MenuIcon,
  PersentageIcon,
  ProfileIcon,
} from "../general/Icons";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import Search from "./search";
import Categories from "./Categories";
import { categories, menu } from "@/lib/helper";
import { GeneralSheet } from "../general/Sheet";

async function Header() {
  const t = await getTranslations();
  return (
    <header>
      <Nav />
      <div className="flex flex-col lg:flex-row gap-6 container py-5 lg:py-10 lg:items-center justify-between">
        <div className="flex shrink-0 justify-between items-center w-full lg:w-auto gap-4">
          <div className="flex gap-2 items-center">
            <GeneralSheet
              taggle={
                <div>
                  <MenuIcon className="block lg:hidden size-6 text-foreground cursor-pointer" />{" "}
                </div>
              }
              sheetTitle={
                <div className="flex gap-2 items-center text-lg">
                  {t("NAV.menu")}
                </div>
              }
              side={"left"}
            >
              <ul className="list-none px-6">
                <li>
                  <Link
                    href="/categories/offers"
                    className="flex gap-2 border-b-1 py-3 text-green-400 hover:text-foreground text-xl"
                  >
                    <PersentageIcon className="size-4" />
                    {t("categories.offers")}
                  </Link>
                </li>
                {[...menu,...categories].map(({ id, href, label }) => (
                  <li
                    key={id}
                    className={`text-xl hover:text-primary [&:not(:last-child)]:border-b-1 py-3`}
                  >
                    <Link key={id} href={href}>
                      {t(label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </GeneralSheet>
            <Link href="/">
              <Image
                src="/logo.png"
                width="150"
                height="40"
                alt="Logo"
                className="h-[25px] lg:h-[40px] w-[100px] lg:w-[150px]"
              />
            </Link>
          </div>
          <div className="lg:hidden flex gap-4 items-center">
            <Badge variant="secondary" className="size-12 font-bold">
              <Link href={"/cart"}>
                <Cart className="size-5 text-foreground" />
              </Link>
            </Badge>
            <Link href={"/auth/login"}>
              <Button className="h-12 w-12 cursor-pointer group"><ProfileIcon /></Button>
            </Link>
          </div>
        </div>

        <div className="flex lg:block  min-w-50">
          <div className="flex gap-2 text-muted font-medium me-2 text-nowrap">
            <Location className="text-muted-foreground" /> {t("NAV.location")}
          </div>
          <div className="text-muted-foreground text-ellipsis line-clamp-1">
            بغداد, شارع الجمهورية ,كفر الموجي
          </div>
        </div>

        <div className="w-full">
          <Search />
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <Badge variant="secondary" className="size-12 font-bold">
            <Link href={"/favorites"}>
              <FavoriteIcon className="size-5 text-foreground" />
            </Link>
          </Badge>
          <Badge variant="secondary" className="size-12 font-bold">
            <Bell className="size-12 text-foreground" />
          </Badge>
          <Badge variant="secondary" className="size-12 font-bold">
            <Link href={"/cart"}>
              <Cart className="size-5 text-foreground" />
            </Link>
          </Badge>
          <Link href={"auth/login"}>
              <Button className="h-12 cursor-pointer group"><ProfileIcon /> <div>{t("NAV.login")}</div></Button>
          </Link>
        </div>
      </div>
      <Categories />
    </header>
  );
}

export default Header;
