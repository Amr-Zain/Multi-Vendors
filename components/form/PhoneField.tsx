"use client";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CountryCodeData {
  id: number;
  name: string;
  phone_code: string;
  phone_limit: number;
  flag: string;
}

export interface PhoneNumberProps<T extends FieldValues> {
  control: Control<T>;
  phoneCodeName: FieldPath<T>;
  phoneNumberName: FieldPath<T>;
  countries: CountryCodeData[];
  currentPhoneLimit?: number | null;
  isLoading?: boolean;
  disabled?: boolean;
  codeClass?: string;
  phoneClass?: string;
}

function PhoneField<T extends FieldValues>({
  control,
  phoneCodeName,
  phoneNumberName,
  countries = [],
  currentPhoneLimit,
  isLoading = false,
  codeClass = "",
  phoneClass = "",
  disabled = false,
}: PhoneNumberProps<T>) {
  const t = useTranslations();

  return (
    <div className="flex gap-2">
      <FormField<T>
        control={control}
        name={phoneCodeName}
        render={({ field }) => (
          <FormItem className="min-w-6">
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
              disabled={isLoading || disabled}
            >
              <FormControl>
                <SelectTrigger
                  className={`text-text p-1 sm:p-4 ${codeClass}`}
                  dir={t("lang")}
                >
                  <SelectValue placeholder={t("labels.phoneCode")} />
                </SelectTrigger>
              </FormControl>
              <SelectContent dir={t("lang")}>
                {countries.map((country) => (
                  <SelectItem key={country.id} value={`${country.phone_code}`}>
                    <div className="flex items-center gap-2">
                      {country.flag && (
                        <span role="img" aria-label="flag">
                          <Image
                            src={country.flag}
                            alt={`${country.name} flag`}
                            width={20}
                            height={20}
                          />
                        </span>
                      )}
                      <span className="ms-2">{`+${country.phone_code}`}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField<T>
        control={control}
        name={phoneNumberName}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormControl>
              <Input
                dir={t("lang")}
                {...field}
                className={phoneClass}
                onChange={(e) => {
                  field.onChange(e);
                }}
                value={field.value || ""}
                disabled={isLoading || disabled}
                placeholder={
                  currentPhoneLimit
                    ? t("labels.phoneNumberWithLimit", {
                        limit: currentPhoneLimit,
                      })
                    : t("labels.phoneNumber")
                }
                type="tel"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default PhoneField;