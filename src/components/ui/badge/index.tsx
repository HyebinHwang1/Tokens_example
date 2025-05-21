import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-1 text-2xs border border",
  {
    variants: {
      color: {
        light: "border-gray-200 text-gray-900",
        black: "border-gray-800 bg-gray-800 text-gray-0",
        primary: "border-primary-500 bg-primary-500 text-gray-0",
        secondary: "border-secondary-500 bg-secondary-500 text-gray-0",
        gray: "border-gray-400 bg-gray-400 text-gray-0",
      },
      capsule: {
        true: "rounded-full",
        false: "rounded-xs",
      },
      size: {
        sm: "h-4 text-2xs",
        md: "h-5 text-xs",
        lg: "h-6 text-sm",
      },
    },
    defaultVariants: {
      color: "light",
      capsule: false,
      size: "md",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

function Badge({
  className,
  children,
  size = "md",
  capsule = false,
  color = "light",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ capsule, color, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
