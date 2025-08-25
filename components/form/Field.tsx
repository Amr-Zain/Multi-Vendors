"use client";

import React from "react";
import { FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldProp } from "@/types/form";
import OTPField from "./OTPField";
import PhoneField from "./PhoneField";
import PasswordField from "./PasswordField";
import DateFields from "./DatePicker";

function Field<T extends FieldValues>(props: FieldProp<T>) {
  const { type } = props;

  // Handle custom fields
  if (type === "custom") {
    return props.customItem as React.ReactElement;
  }

  const { label, placeholder, control, name, span, inputProps = {} } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const mergedProps = {
          ...field,
          ...inputProps,
        };

        const renderField = () => {
          switch (type) {
            case "text":
              return (
                <Input 
                  type="text" 
                  placeholder={placeholder} 
                  {...mergedProps} 
                />
              );

            case "number":
              return (
                <Input 
                  type="number" 
                  placeholder={placeholder} 
                  {...mergedProps} 
                />
              );

            case "password":
              return (
                <PasswordField
                  placeholder={placeholder || ""}
                  {...mergedProps}
                  {...inputProps}
                />
              );

            case "textarea":
              return (
                <Textarea 
                  placeholder={placeholder} 
                  {...mergedProps} 
                />
              );

            case "checkbox":
              return (
                <div className="flex flex-row items-center space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                      {...inputProps}
                    />
                  </FormControl>
                  {label && (
                    <FormLabel className="font-normal">{label}</FormLabel>
                  )}
                </div>
              );

            case "select":
              const { options = [] } = props;
              return (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  {...inputProps}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem
                        key={String(option.value)}
                        value={String(option.value)}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );

            case "radio":
              const { options: radioOptions = [] } = props;
              return (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  className="flex flex-col space-y-1"
                  {...inputProps}
                >
                  {radioOptions.map((option) => (
                    <FormItem
                      key={String(option.value)}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={String(option.value)} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              );

            case "otp":
              return (
                <OTPField
                  value={field.value || ""}
                  onChange={(value) => {
                    if (inputProps?.handleOTPChange) {
                      inputProps.handleOTPChange(value);
                    }
                    field.onChange(value);
                  }}
                  {...inputProps}
                />
              );

            case "phone":
              return (
                <PhoneField
                  control={control}
                  phoneCodeName={inputProps?.phoneCodeName || `${String(name)}_code`}
                  phoneNumberName={inputProps?.phoneNumberName || `${String(name)}_number`}
                  countries={inputProps?.countries || []}
                  currentPhoneLimit={inputProps?.currentPhoneLimit}
                  isLoading={inputProps?.disabled}
                  disabled={inputProps?.disabled}
                  codeClass={inputProps?.codeClass}
                  phoneClass={inputProps?.phoneClass}
                />
              );

            case "date":
              return (
                <DateFields
                  control={control}
                  name={name}
                  label={label as string}
                  placeholder={placeholder}
                  mode={inputProps?.mode}
                  disabledDates={inputProps?.disabledDates}
                  className={inputProps?.className}
                />
              );

            default:
              console.warn(`Unknown field type: ${type}`);
              return null;
          }
        };

        return (
          <FormItem 
            className={`${type === "checkbox" ? "" : "space-y-2"} ${span ? `col-span-${span}` : ""}`}
          >
            {type !== "checkbox" && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <FormControl>{renderField()}</FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default Field;