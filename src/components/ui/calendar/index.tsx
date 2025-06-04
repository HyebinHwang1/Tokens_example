"use client";

import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import "react-day-picker/style.css";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 z-50 bg-white rounded-md", className)}
      classNames={{
        ...classNames,
        chevron: `fill-gray-700`,
        root: `${defaultClassNames.root} shadow-lg p-4`,
        day: "w-9 h-9",
        day_button: "w-9 h-9",
        caption_label:
          "z-index-1 white-space-nowrap inline-flex items-center relative gap-0.5 text-base text-gray-800",
        selected: `bg-primary-500 border-primary-500 text-white rounded-sm`,
      }}
      captionLayout="dropdown"
      {...props}
    />
  );
}

export { Calendar };
