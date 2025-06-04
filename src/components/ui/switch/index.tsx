"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex p-0.5 h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-gray-100 border-1 border-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:bg-secondary-500",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-3.5 w-3.5 rounded-full bg-gray-900 ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-gray-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

interface SwitchWithLabelProps extends React.ComponentProps<typeof Switch> {
  label: string;
  id: string;

  labelDirection?: "left" | "right";
  labelClassName?: string;
  labelContainerClassName?: string;
}

function SwitchWithLabel({
  label,
  id,
  labelClassName,
  labelContainerClassName,
  labelDirection = "left",
  ...props
}: SwitchWithLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 select-none",
        labelContainerClassName
      )}
    >
      {labelDirection === "left" && (
        <Label htmlFor={id} className={cn("mb-0 text-sm", labelClassName)}>
          {label}
        </Label>
      )}
      <Switch id={id} {...props} />
      {labelDirection === "right" && (
        <Label htmlFor={id} className={cn("mb-0 text-sm", labelClassName)}>
          {label}
        </Label>
      )}
    </div>
  );
}

export { Switch, SwitchWithLabel };
