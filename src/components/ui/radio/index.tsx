"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "../label";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square h-5 w-5 rounded-full border border-gray-300 bg-gray-100  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center rounded-full bg-secondary-500 h-full w-full"
      >
        <Circle className="h-2.5 w-2.5 fill-gray-0 text-gray-0" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

interface RadioGroupItemWithLabelProps
  extends React.ComponentProps<typeof RadioGroup> {
  items: {
    id: string;
    value: string;
  }[];
  onValueChange: (value: string) => void;

  groupClassName?: string;
  labelContainerClassName?: string;
  defaultValue?: string;
  direction?: "row" | "column";
}

function RadioGroupItemWithLabel({
  items,
  defaultValue,
  direction = "row",
  groupClassName,
  labelContainerClassName,
  onValueChange,
  ...props
}: RadioGroupItemWithLabelProps) {
  return (
    <RadioGroup
      {...props}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={cn(
        "flex",
        groupClassName,
        direction === "row" && "flex-row",
        direction === "column" && "flex-col"
      )}
    >
      {items.map((item) => (
        <div
          className={cn(
            "flex items-center space-x-2 mr-2",
            labelContainerClassName
          )}
          key={item.id}
        >
          <RadioGroupItem value={item.value} id={item.id} />
          <Label htmlFor={item.id} className="mb-0 text-sm">
            {item.value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel };
