import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputDefaultStyle =
  "flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:ring-gray-400 disabled:text-gray-400 md:text-sm";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: React.ReactNode;
  /** input과 연결할 id */
  id: string;
  error?: boolean;
  feedback?: string;
  icon?: React.ReactNode;
}

const inputVariants = cva(inputDefaultStyle, {
  variants: {
    error: {
      true: "border border-danger-500 bg-white text-danger-500 focus-visible:ring-danger-500",
    },
  },
  defaultVariants: {
    error: false,
  },
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, error, feedback, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            className={cn(
              inputDefaultStyle,
              inputVariants({ error }),
              className
            )}
            aria-invalid={error}
            ref={ref}
            {...props}
          />
          {icon && (
            <span className="absolute right-4 text-gray-400 pointer-events-none top-1/2 -translate-y-1/2">
              {icon}
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
Input.displayName = "Input";

export { Input, inputVariants, inputDefaultStyle };
