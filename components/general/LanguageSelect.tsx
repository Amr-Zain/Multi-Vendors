"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import USFlage from "@/public/assets/svg/en.svg";
import ArFlage from "@/public/assets/svg/ar.svg";
import Image from "next/image";

export function SelectLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale);
    const newPathname =
      pathname.startsWith("/ar") || pathname.startsWith("/en")
        ? pathname.slice(3)
        : pathname;
    router.push(`/${newLocale}${newPathname}`);
  };

  return (
    <Select value={locale} onValueChange={setLanguage}>
      <SelectTrigger className="w-[150px] border-0 p-0 focus-visible:ring-0 !bg-transparent shadow-none cursor-pointer">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <span role="img" aria-label="United States flag">
              <Image src={USFlage} alt="United States Flag" width={20} height={20} />
            </span>
            <span className="ml-2">English</span>
          </SelectItem>
          <SelectItem value="ar">
            <span role="img" aria-label="Iraq flag">
              <Image src={ArFlage} alt="Iraq Flag" width={20} height={20} />
            </span>
            <span className="ml-2">Arabic</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}