import { z } from "zod";
import { FieldProp, FieldOption } from "@/types/form";

// Form builder utility class
export class FormBuilder<T extends Record<string, any>> {
  private fields: FieldProp<T>[] = [];
  private schemaShape: Record<string, z.ZodTypeAny> = {};

  // Helper method to add text field
  addTextField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    span?: number;
    className?: string;
  }) {
    const { name, required = false, minLength, maxLength, ...rest } = config;
    
    // Build schema
    let fieldSchema = z.string();
    if (minLength) fieldSchema = fieldSchema.min(minLength, `${String(name)} must be at least ${minLength} characters`);
    if (maxLength) fieldSchema = fieldSchema.max(maxLength, `${String(name)} must be at most ${maxLength} characters`);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    // Add field config
    this.fields.push({
      type: "text",
      name: name as any,
      inputProps: {
        minLength,
        maxLength,
        className: rest.className,
      },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add email field
  addEmailField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, ...rest } = config;
    
    let fieldSchema = z.string().email("Invalid email address");
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "text",
      name: name as any,
      inputProps: { type: "email" },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add password field
  addPasswordField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    minLength?: number;
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, minLength = 8, ...rest } = config;
    
    let fieldSchema = z.string().min(minLength, `Password must be at least ${minLength} characters`);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "password",
      name: name as any,
      inputProps: { showToggle: true },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add number field
  addNumberField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, min, max, ...rest } = config;
    
    let fieldSchema = z.number();
    if (min !== undefined) fieldSchema = fieldSchema.min(min, `${String(name)} must be at least ${min}`);
    if (max !== undefined) fieldSchema = fieldSchema.max(max, `${String(name)} must be at most ${max}`);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "number",
      name: name as any,
      inputProps: { min, max },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add textarea field
  addTextareaField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    rows?: number;
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, rows = 4, ...rest } = config;
    
    let fieldSchema = z.string();
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "textarea",
      name: name as any,
      inputProps: { rows },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add select field
  addSelectField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    options: FieldOption[];
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, options, ...rest } = config;
    
    const optionValues = options.map(opt => String(opt.value));
    let fieldSchema = z.enum(optionValues as [string, ...string[]]);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "select",
      name: name as any,
      options,
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add radio field
  addRadioField(config: {
    name: keyof T;
    label?: string;
    options: FieldOption[];
    required?: boolean;
    span?: number;
    orientation?: "horizontal" | "vertical";
  }) {
    const { name, required = false, options, orientation = "vertical", ...rest } = config;
    
    const optionValues = options.map(opt => String(opt.value));
    let fieldSchema = z.enum(optionValues as [string, ...string[]]);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "radio",
      name: name as any,
      options,
      inputProps: { orientation },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add checkbox field
  addCheckboxField(config: {
    name: keyof T;
    label?: string;
    required?: boolean;
    span?: number;
  }) {
    const { name, required = false, ...rest } = config;
    
    let fieldSchema = z.boolean();
    if (required) {
      fieldSchema = fieldSchema.refine(val => val === true, "This field is required");
    }

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "checkbox",
      name: name as any,
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add OTP field
  addOTPField(config: {
    name: keyof T;
    label?: string;
    length?: number;
    type?: "numeric" | "alphanumeric";
    required?: boolean;
    span?: number;
    onOTPChange?: (value: string) => void;
  }) {
    const { name, required = false, length = 6, type = "numeric", onOTPChange, ...rest } = config;
    
    let fieldSchema = z.string().length(length, `Code must be exactly ${length} characters`);
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "otp",
      name: name as any,
      inputProps: {
        length,
        type,
        handleOTPChange: onOTPChange,
      },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add date field
  addDateField(config: {
    name: keyof T;
    label?: string;
    placeholder?: string;
    mode?: "single" | "range" | "multiple";
    required?: boolean;
    span?: number;
    disabledDates?: {
      from?: Date;
      to?: Date;
    };
  }) {
    const { name, required = false, mode = "single", disabledDates, ...rest } = config;
    
    let fieldSchema = z.date();
    if (!required) fieldSchema = fieldSchema.optional();

    this.schemaShape[String(name)] = fieldSchema;

    this.fields.push({
      type: "date",
      name: name as any,
      inputProps: {
        mode,
        disabledDates,
      },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add phone field
  addPhoneField(config: {
    phoneCodeName: keyof T;
    phoneNumberName: keyof T;
    label?: string;
    countries: Array<{
      id: number;
      name: string;
      phone_code: string;
      phone_limit: number;
      flag: string;
    }>;
    required?: boolean;
    span?: number;
  }) {
    const { phoneCodeName, phoneNumberName, required = false, countries, ...rest } = config;
    
    let codeSchema = z.string();
    let numberSchema = z.string();
    if (required) {
      codeSchema = codeSchema.min(1, "Phone code is required");
      numberSchema = numberSchema.min(1, "Phone number is required");
    } else {
      codeSchema = codeSchema.optional();
      numberSchema = numberSchema.optional();
    }

    this.schemaShape[String(phoneCodeName)] = codeSchema;
    this.schemaShape[String(phoneNumberName)] = numberSchema;

    this.fields.push({
      type: "phone",
      name: phoneCodeName as any, // Base name for the phone field
      inputProps: {
        phoneCodeName: String(phoneCodeName),
        phoneNumberName: String(phoneNumberName),
        countries,
      },
      ...rest,
    } as FieldProp<T>);

    return this;
  }

  // Helper method to add custom field
  addCustomField(config: {
    customItem: React.ReactNode;
    span?: number;
  }) {
    this.fields.push({
      type: "custom",
      customItem: config.customItem,
      span: config.span,
    } as FieldProp<T>);

    return this;
  }

  // Method to get the built configuration
  build() {
    return {
      schema: z.object(this.schemaShape),
      fields: this.fields,
    };
  }

  // Method to get fields only
  getFields() {
    return this.fields;
  }

  // Method to get schema only
  getSchema() {
    return z.object(this.schemaShape);
  }
}

// Factory function for easier usage
export const createFormBuilder = <T extends Record<string, any>>() => {
  return new FormBuilder<T>();
};