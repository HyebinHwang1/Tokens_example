import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-2xl px-3 py-1 text-sm font-semibold transition-colors border",
  {
    variants: {
      intent: {
        info: "bg-gray-800 text-white",
        success: "bg-blue-500 text-white",
        danger: "bg-red-500 text-white",
      },
      weight: {
        dimmed: "border-transparent",
        outline: "bg-white",
      },
    },
    compoundVariants: [
      {
        weight: "outline",
        intent: "info",
        className: "border-gray-800 text-gray-800",
      },
      {
        weight: "outline",
        intent: "success",
        className: "border-blue-500 text-blue-500",
      },
      {
        weight: "outline",
        intent: "danger",
        className: "border-red-500 text-red-500",
      },
    ],
    defaultVariants: {
      intent: "info",
      weight: "dimmed",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, intent, weight, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ intent, weight }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
