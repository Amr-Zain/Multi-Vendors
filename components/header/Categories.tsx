import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { Badge } from "../ui/badge";
import { CategoriesIcon, FavoriteIcon, PersentageIcon } from "../general/Icons";
import { Separator } from "../ui/separator";
import { GeneralSheet } from "../general/Sheet";
import { categories } from "@/lib/helper";

async function Categories() {
  const t = await getTranslations();
  const headersList = await headers();
  let pathname = headersList.get("categories.x-current-path") || "/";
  if (["/en", "/ar"].some((code) => pathname.startsWith(code)))
    pathname = pathname.slice(3);

  return (
    <ul className="hidden lg:flex gap-6 container items-center pb-6 border-b-1">
      <GeneralSheet
        taggle={
          <Badge
            variant="secondary"
            className="h-12 bg-primary/10 font-semibold text-primary text-lg px-4"
          >
            <CategoriesIcon className="size-8 me-2" /> {t("categories.categories")}
          </Badge>
        }
        sheetTitle={
          <div className="flex gap-2 items-center text-lg">
            <CategoriesIcon className="size-8 me-2" /> {t("categories.categories")}
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
          {categories.map(({ id, href, label }) => (
            <li
              key={id}
              className={`text-xl hover:text-primary [&:not(:last-child)]:border-b-1  py-3          ${
                pathname === href ? "text-primary" : "text-foreground"
              }
`}
            >
              <Link key={id} href={href}>
                {t(label)}
              </Link>
            </li>
          ))}
        </ul>
      </GeneralSheet>
      <li>
        <Link
          href="/categories/offers"
          className="flex gap-2 font-semibold text-green-400 hover:text-foreground"
        >
          <PersentageIcon className="size-4" />
          {t("categories.offers")}
        </Link>
      </li>
      <Separator orientation="vertical" className="!h-4 bg-muted-foreground" />
      {categories.map(({ id, href, label }) => (
        <li
          key={id}
          className={`text-lg font-semibold hover:text-primary            ${
            pathname === href ? "text-primary" : "text-foreground"
          }
`}
        >
          <Link key={id} href={href}>
            {t(label)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
