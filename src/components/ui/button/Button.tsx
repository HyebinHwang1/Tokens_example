import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const baseStyle =
  "cursor-pointer inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:w-4 [&_svg]:h-4";

const buttonVariants = cva(baseStyle, {
  variants: {
    variant: {
      primary:
        "bg-primary-100 text-white [&:not(:disabled)]:hover:bg-primary-200",
      secondary:
        "bg-secondary-100 text-white [&:not(:disabled)]:hover:bg-secondary-200",
      ghost:
        "bg-transparent text-primary-100 [&:not(:disabled)]:hover:text-primary-200",
      text: "bg-transparent text-primary-100 underline [&:not(:disabled)]:hover:text-primary-200",
      skeleton: "bg-gray-300 animate-pulse text-transparent cursor-wait",
    },
    size: {
      md: "w-32 h-10 text",
      sm: "w-24 h-8 text-sm",
      lg: "w-40 h-12 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
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
