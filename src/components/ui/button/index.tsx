import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const baseStyle =
  "cursor-pointer inline-flex items-center justify-center gap-1 whitespace-nowrap transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 [&_svg]:shrink-0";

const buttonVariants = cva(baseStyle, {
  variants: {
    variant: {
      primary: "bg-primary-500 text-white",
      secondary: "bg-secondary-500 text-white",
      ghost: "bg-transparent text-gray-900",
      light: "bg-white text-gray-900 border border-gray-300",
      dark: "bg-gray-900 text-white",
      text: "bg-transparent text-gray-900 underline",
    },
    size: {
      xs: "text-2xs px-2 h-5",
      sm: "text-2xs px-2 h-6",
      md: "text-sm px-4 h-9",
      lg: "text-sm px-5 h-[44px]",
      xl: "text-sm px-5 h-[60px]",
      full: "w-full block text-base h-[64px]",
    },
    selected: {
      true: "",
      false: "",
    },
    capsule: {
      true: "rounded-full",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "light",
      selected: false,
      className: "[&:not(:disabled)]:hover:bg-gray-200",
    },
    {
      variant: "dark",
      selected: false,
      className: "[&:not(:disabled)]:hover:bg-gray-700",
    },
    {
      variant: "secondary",
      selected: false,
      className: "[&:not(:disabled)]:hover:bg-secondary-300",
    },
    {
      variant: "primary",
      selected: false,
      className: "[&:not(:disabled)]:hover:bg-primary-300",
    },
    {
      variant: "text",
      selected: false,
      className: "[&:not(:disabled)]:hover:text-gray-700",
    },
    {
      variant: "light",
      selected: true,
      className: "bg-black opacity-60 text-gray-0",
    },
    {
      variant: "primary",
      selected: true,
      className: "bg-primary-700",
    },
    {
      variant: "secondary",
      selected: true,
      className: "bg-secondary-700",
    },
    {
      variant: "ghost",
      selected: true,
      className: "text-black",
    },
    {
      variant: "dark",
      selected: true,
      className: "bg-black",
    },
    {
      variant: "text",
      size: "xs",
      className: "text-xs",
    },
    {
      variant: "text",
      size: "sm",
      className: "text-sm",
    },
    {
      variant: "text",
      size: "md",
      className: "text-md",
    },
    {
      variant: "text",
      size: "lg",
      className: "text-lg",
    },
    {
      variant: "text",
      size: "xl",
      className: "text-xl",
    },
  ],
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "light",
      size = "md",
      asChild = false,
      selected = false,
      capsule = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, selected, capsule, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
