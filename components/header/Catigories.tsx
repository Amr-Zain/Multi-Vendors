import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { Badge } from "../ui/badge";
import { CategoriesIcon, FavoriteIcon, PersentageIcon } from "../general/Icons";
import { Separator } from "../ui/separator";

const categories = [
  //   { id: 1, label: "offers", href: "/categories/offers" },
  { id: 2, label: "electronics", href: "/categories/electronics" },
  { id: 3, label: "fashion", href: "/categories/mens-and-womens-fashion" },
  { id: 4, label: "babyProducts", href: "/categories/baby-products" },
  { id: 5, label: "cosmetics", href: "/categories/cosmetics" },
  {
    id: 6,
    label: "electricalAppliances",
    href: "/categories/electrical-appliances",
  },
  { id: 7, label: "animalSupplies", href: "/categories/animal-supplies" },
];
async function Categories() {
  const t = await getTranslations("categories");
  const headersList = await headers();
  let pathname = headersList.get("x-current-path") || "/";
  if (["/en", "/ar"].some((code) => pathname.startsWith(code)))
    pathname = pathname.slice(3);

  return (
    <ul className="hidden lg:flex gap-6 container items-center">
      <Badge
        variant="secondary"
        className="h-12 bg-primary/10 font-semibold text-primary text-lg px-4"
      >
        <CategoriesIcon className="size-8 me-2" /> {t("categories")}
      </Badge>
      <li>
        <Link
          href="/categories/offers"
          className="flex gap-2 font-semibold text-green-400 hover:text-foreground"
        >
          <PersentageIcon className="size-4" />
          {t("offers")}
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
