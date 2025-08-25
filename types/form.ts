import { Control, FieldPath, FieldValues } from "react-hook-form";
import React from "react";

// Base interfaces for common props
interface BaseFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  label?: string | React.ReactNode;
  span?: number;
  placeholder?: string;
  control: Control<T>;
}

// Option type for select and radio fields
interface FieldOption {
  value: string | number;
  label: string | React.ReactNode;
}

// Input props for different field types
interface BaseInputProps extends Record<string, any> {
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

interface TextInputProps extends BaseInputProps {
  maxLength?: number;
  minLength?: number;
}

interface NumberInputProps extends BaseInputProps {
  min?: number;
  max?: number;
  step?: number;
}

interface TextAreaInputProps extends BaseInputProps {
  rows?: number;
  cols?: number;
  resize?: boolean;
}

interface SelectInputProps extends BaseInputProps {
  multiple?: boolean;
}

interface CheckboxInputProps extends BaseInputProps {
  indeterminate?: boolean;
}

interface RadioInputProps extends BaseInputProps {
  orientation?: "horizontal" | "vertical";
}

interface PasswordInputProps extends BaseInputProps {
  showToggle?: boolean;
}

interface OTPInputProps extends BaseInputProps {
  length?: number;
  type?: "numeric" | "alphanumeric";
}

// Phone field specific props
interface CountryCodeData {
  id: number;
  name: string;
  phone_code: string;
  phone_limit: number;
  flag: string;
}

interface PhoneInputProps extends BaseInputProps {
  phoneCodeName: string;
  phoneNumberName: string;
  countries: CountryCodeData[];
  currentPhoneLimit?: number | null;
  codeClass?: string;
  phoneClass?: string;
}

// Date picker props
interface DateInputProps extends BaseInputProps {
  mode?: "single" | "range" | "multiple";
  disabledDates?: {
    from?: Date;
    to?: Date;
  };
  format?: string;
}

// Discriminated union for all field types
export type FieldProp<T extends FieldValues> =
  | ({
      type: "text";
      inputProps?: TextInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "textarea";
      inputProps?: TextAreaInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "number";
      inputProps?: NumberInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "password";
      inputProps?: PasswordInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "checkbox";
      inputProps?: CheckboxInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "select";
      inputProps?: SelectInputProps;
      options: FieldOption[];
    } & BaseFieldProps<T>)
  | ({
      type: "radio";
      inputProps?: RadioInputProps;
      options: FieldOption[];
    } & BaseFieldProps<T>)
  | ({
      type: "otp";
      inputProps?: OTPInputProps & { 
        handleOTPChange?: (value: string) => void;
      };
    } & BaseFieldProps<T>)
  | ({
      type: "phone";
      inputProps?: PhoneInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "date";
      inputProps?: DateInputProps;
    } & BaseFieldProps<T>)
  | ({
      type: "custom";
      customItem: React.ReactNode;
    } & Omit<BaseFieldProps<T>, "name" | "control"> & {
      name?: FieldPath<T>;
      control?: Control<T>;
    });

// Export types for use in components
export type {
  BaseFieldProps,
  FieldOption,
  TextInputProps,
  NumberInputProps,
  TextAreaInputProps,
  SelectInputProps,
  CheckboxInputProps,
  RadioInputProps,
  PasswordInputProps,
  OTPInputProps,
  PhoneInputProps,
  DateInputProps,
  CountryCodeData,
};
  //   | ({ type: "map"; inputProps?: GoogleMapProps; onPositionChange?: (position: Position) => void; } & CommonProps<T>);
//   | ({ type: "rate"; inputProps?: RatingInputProps; } & CommonProps<T>)
//   | ({ type: "imgUploader"; inputProps?: UploaderProps; } & CommonProps<T>)
//   | ({ type: "mediaUploader"; inputProps?: UploaderProps; } & CommonProps<T>)
//   | ({ type: "fileUpload"; inputProps?: UploaderProps; } & CommonProps<T>)
//   | ({ type: "multiLangField"; inputProps?: MultiLangFieldInputProps; } & CommonProps<T>)
//   | ({ type: "editor"; inputProps?: EditorProps; } & CommonProps<T>)
//   | ({ type: "date"; inputProps?: DateFieldsProps<T>; } & CommonProps<T>)

