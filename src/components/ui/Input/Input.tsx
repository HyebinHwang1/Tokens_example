import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputWithLabel } from "./inputWithLabel";

const inputBaseStyle =
  "flex w-full border border-gray-300 bg-transparent px-5 py-2 text-base transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:ring-gray-400 disabled:border-gray-400 disabled:text-gray-400";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const inputVariants = cva(inputBaseStyle, {
  variants: {
    error: {
      true: "border-danger-500 bg-white text-danger-500 focus-visible:ring-danger-500",
    },
  },
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error = false, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ error }),
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          {...props}
          aria-invalid={error}
          ref={ref}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, InputWithLabel };
