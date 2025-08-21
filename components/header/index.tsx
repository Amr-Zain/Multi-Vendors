import Image from "next/image";
import Nav from "./nav";
import { getTranslations } from "next-intl/server";
import { Bell, Cart, FavoriteIcon, Location } from "../general/Icons";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import Search from "./search";
import Categories from "./Catigories";

async function Header() {
  const t = await getTranslations();
  return (
    <header>
      <Nav />
      <div className="flex flex-col lg:flex-row gap-8 container py-5 lg:py-10 lg:items-center justify-between">
        <div className="flex justify-between items-center w-full lg:w-auto gap-4">
          <Image src="/logo.png" width="150" height="40" alt="Logo" />
          <div className="lg:hidden flex gap-4 items-center">
            <Badge variant="secondary" className="size-12 font-bold">
              <Link href={"/cart"}>
                <Cart className="size-5 text-foreground" />
              </Link>
            </Badge>
            <Link href={"auth/login"}>
              <Button className="h-12 cursor-pointer">{t("NAV.login")}</Button>
            </Link>
          </div>
        </div>

        <div className="flex lg:block">
          <div className="flex gap-2 text-muted font-medium me-2">
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
            <Button className="h-12 cursor-pointer">{t("NAV.login")}</Button>
          </Link>
        </div>
      </div>
      <Categories />
    </header>
  );
}

export default Header;