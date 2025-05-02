import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const baseStyle =
  "cursor-pointer inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 [&_svg]:shrink-0";

const buttonVariants = cva(baseStyle, {
  variants: {
    variant: {
      primary:
        "bg-primary-500 text-white [&:not(:disabled)]:hover:bg-primary-300",
      secondary:
        "bg-secondary-500 text-white [&:not(:disabled)]:hover:bg-secondary-300",
      ghost:
        "bg-transparent text-gray-900 [&:not(:disabled)]:hover:text-gray-700",
      default:
        "bg-white text-gray-900 [&:not(:disabled)]:hover:bg-gray-200 border border-gray-300",
      skeleton: "bg-gray-300 animate-pulse text-transparent cursor-wait",
      black: "bg-gray-900 text-white [&:not(:disabled)]:hover:bg-gray-700",
      text: "bg-transparent text-gray-900 underline [&:not(:disabled)]:hover:text-gray-700",
    },
    size: {
      md: "w-32 h-10 text",
      sm: "w-24 h-8 text-sm",
      lg: "w-40 h-12 text-lg",
    },
    selected: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
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
      variant: "black",
      selected: true,
      className: "bg-black",
    },
    {
      variant: "text",
      selected: true,
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    selected: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  selected?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      selected = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, selected, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
