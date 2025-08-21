"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const GeneralSheet = ({
  taggle,
  sheetTitle,
  sheetDescription,
  children,
  side = "right",
}: {
  taggle: React.ReactNode;
  children: React.ReactNode;
  side: "left" | "right" | "top" | "bottom";
  sheetTitle: React.ReactNode | string;
  sheetDescription?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{taggle}</SheetTrigger>
      <SheetContent side={side} className="overflow-y-auto">
        <SheetHeader  className="border-b-1">
          <SheetTitle>{sheetTitle}</SheetTitle>
          {sheetDescription && (
            <SheetDescription>{sheetDescription}</SheetDescription>
          )}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
