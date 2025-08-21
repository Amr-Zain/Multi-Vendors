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
import { Button } from "@/components/ui/button";

/**
 * A reusable Shadcn Sheet component.
 *
 * This component acts as a wrapper around the Shadcn Sheet primitives,
 * making it easy to create a consistent, styled sheet with a trigger button.
 * It's perfect for use cases like settings panels, shopping carts, or
 * detail views.
 *
 * @param {Object} props - The component props.
 * @param {string} props.triggerText - The text to display on the button that triggers the sheet.
 * @param {string} props.sheetTitle - The title of the sheet.
 * @param {string} props.sheetDescription - The description text for the sheet.
 * @param {React.ReactNode} props.children - The content to be displayed inside the sheet.
 * @param {'left' | 'right' | 'top' | 'bottom'} props.side - The side from which the sheet should appear.
 *
 * @example
 * // To use this component, you can import it and pass the required props.
 * // You can place any React elements as children to render inside the sheet's content area.
 * <ReusableSheet
 * triggerText="Open Settings"
 * sheetTitle="App Settings"
 * sheetDescription="Manage your application preferences."
 * side="right"
 * >
 * <div className="p-4">
 * <p>Here are your settings options...</p>
 * </div>
 * </ReusableSheet>
 */
const ReusableSheet = ({
  triggerText,
  sheetTitle,
  sheetDescription,
  children,
  side = "right",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </SheetTrigger>
      <SheetContent side={side} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
          <SheetDescription>{sheetDescription}</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Define a type for a category to ensure type safety
interface Category {
  id: number;
  label: string;
}

// Main App component to demonstrate the ReusableSheet
export default function App() {
  // Example data to be passed as children
  const categories: Category[] = [
    { id: 1, label: "Electronics" },
    { id: 2, label: "Fashion" },
    { id: 3, label: "Home & Kitchen" },
    { id: 4, label: "Books" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 space-y-4">
      <h1 className="text-2xl font-bold">Reusable Shadcn Sheet Demo</h1>
      
      {/* Example 1: Basic settings sheet from the right */}
      <ReusableSheet
        triggerText="Open Settings"
        sheetTitle="App Settings"
        sheetDescription="Manage your application preferences."
        side="right"
      >
        <div className="p-4">
          <p>Here you can add your settings forms, toggles, and controls.</p>
        </div>
      </ReusableSheet>

      {/* Example 2: Cart sheet from the left with custom content */}
      <ReusableSheet
        triggerText="View Cart"
        sheetTitle="Your Shopping Cart"
        sheetDescription="Review items in your cart."
        side="left"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-lg">Product A</span>
            <span className="ml-auto font-bold">$19.99</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg">Product B</span>
            <span className="ml-auto font-bold">$45.00</span>
          </div>
          <p className="text-right mt-4 font-bold text-xl">Total: $64.99</p>
        </div>
      </ReusableSheet>

      {/* Example 3: Sheet with categories passed as children */}
      <ReusableSheet
        triggerText="Browse Categories"
        sheetTitle="Product Categories"
        sheetDescription="Select a category to view products."
        side="right"
      >
        <ul className="list-disc list-inside space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="text-foreground text-lg">
              {category.label}
            </li>
          ))}
        </ul>
      </ReusableSheet>

    </div>
  );
}
