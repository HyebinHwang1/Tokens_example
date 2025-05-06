import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const defaultStyle =
  "flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:ring-gray-400 disabled:text-gray-400 md:text-sm";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** input 상태 variant */
  variant?: "default" | "focus" | "error" | "disabled" | "icon";
  /** 에러 메시지 */
  error?: string;
  /** 인라인 피드백 메시지 */
  feedback?: string;
  /** input 내부 아이콘 */
  icon?: React.ReactNode;
  /** 시각적/접근성 라벨 */
  label: string;
  /** input과 연결할 id */
  id: string;
}

const inputVariants = cva(defaultStyle, {
  variants: {
    variant: {
      default: defaultStyle,
    },
  },
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(defaultStyle, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
