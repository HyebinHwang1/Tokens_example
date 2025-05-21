import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Input } from "./Input";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputWithLabelVariants> {
  label: React.ReactNode;
  id: string;

  error?: boolean;
  feedback?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isRequired?: boolean;
}

const inputWithLabelVariants = cva("", {
  variants: {
    error: {
      true: "border border-danger-500 bg-white text-danger-500 focus-visible:ring-danger-500",
    },
  },
  defaultVariants: {
    error: false,
  },
});

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      className,
      type,
      label,
      id,
      error,
      feedback,
      rightIcon,
      leftIcon,
      isRequired,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
          {isRequired && <span className="text-danger-500">*</span>}
        </label>
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-4 text-gray-400 pointer-events-none top-1/2 -translate-y-1/2">
              {leftIcon}
            </span>
          )}
          <Input
            type={type}
            className={cn(
              inputWithLabelVariants({ error }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
            aria-invalid={error}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-4 text-gray-400 pointer-events-none top-1/2 -translate-y-1/2">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p
            className="mt-1 text-sm text-red-500"
            id={`${id}-error`}
            role="alert"
          >
            {feedback}
          </p>
        )}
      </div>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
