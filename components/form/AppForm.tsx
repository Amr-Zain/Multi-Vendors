"use client";

import React from "react";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Field from "@/components/form/Field";
import { FieldProp } from "@/types/form";

interface GeneralFormConfig<T extends Record<string, any>> {
  schema: z.ZodSchema<T>;
  fields: FieldProp<T>[];
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  onError?: (errors: any) => void;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
  isLoading?: boolean;
  className?: string;
  formClassName?: string;
  gridColumns?: number;
  spacing?: "sm" | "md" | "lg";
}

// Form layout configuration
interface FormLayoutConfig {
  containerClassName?: string;
  fieldContainerClassName?: string;
  buttonContainerClassName?: string;
  submitButtonClassName?: string;
  resetButtonClassName?: string;
}

function AppForm<T extends Record<string, any>>({
  schema,
  fields,
  defaultValues,
  onSubmit,
  onError,
  submitButtonText = "Submit",
  resetButtonText = "Reset",
  showResetButton = false,
  isLoading = false,
  className = "",
  formClassName = "",
  gridColumns = 1,
  spacing = "md",
  ...layoutConfig
}: GeneralFormConfig<T> & FormLayoutConfig) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Form submission error:", error);
      if (onError) {
        onError(error);
      }
    }
  };

  const handleReset = () => {
    form.reset(defaultValues);
  };

  // Dynamic spacing classes
  const spacingClasses = {
    sm: "space-y-3",
    md: "space-y-4",
    lg: "space-y-6",
  };

  // Dynamic grid classes
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`w-full ${className} ${layoutConfig.containerClassName || ""}`}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`${spacingClasses[spacing]} ${formClassName}`}
        >
          {/* Fields Container */}
          <div
            className={`grid gap-4 ${
              gridClasses[gridColumns as keyof typeof gridClasses] ||
              "grid-cols-1"
            } ${layoutConfig.fieldContainerClassName || ""}`}
          >
            {fields.map((fieldConfig, index) => {
              // Handle custom fields without name/control
              if (fieldConfig.type === "custom") {
                return (
                  <div
                    key={`custom-${index}`}
                    className={
                      fieldConfig.span ? `col-span-${fieldConfig.span}` : ""
                    }
                  >
                    <Field {...fieldConfig} />
                  </div>
                );
              }

              return (
                <div
                  key={String(fieldConfig.name)}
                  className={
                    fieldConfig.span ? `col-span-${fieldConfig.span}` : ""
                  }
                >
                  <Field {...fieldConfig} control={form.control} />
                </div>
              );
            })}
          </div>

          {/* Buttons Container */}
          <div
            className={`flex gap-3 pt-4 ${
              showResetButton ? "justify-between" : "justify-end"
            } ${layoutConfig.buttonContainerClassName || ""}`}
          >
            {showResetButton && (
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                disabled={isLoading}
                className={layoutConfig.resetButtonClassName || ""}
              >
                {resetButtonText}
              </Button>
            )}

            <Button
              type="submit"
              disabled={isLoading || !form.formState.isValid}
              className={`min-w-[120px] ${
                layoutConfig.submitButtonClassName || ""
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                submitButtonText
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AppForm;
export type { GeneralFormConfig, FormLayoutConfig };
