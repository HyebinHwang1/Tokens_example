import React, { forwardRef, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

/**
 * Input 컴포넌트 Props
 * @prop variant - input 상태 (default, focus, error, disabled, icon)
 * @prop error - 에러 메시지 (있으면 error 스타일 적용)
 * @prop feedback - 인라인 피드백 메시지
 * @prop icon - input 내부에 표시할 아이콘 (ReactNode)
 * @prop label - 접근성 및 시각적 라벨
 * @prop id - input과 label 연결용 id
 * @prop disabled - 비활성화 여부
 * @prop ...rest - 기타 input 속성
 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
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

const inputVariants = cva(
  "block w-full rounded-md border px-3 py-2 text-base transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-white text-gray-900",
        focus: "border-primary-500 ring-2 ring-primary-100 bg-white",
        error: "border-error-500 bg-white text-error-700",
        disabled: "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed",
        icon: "", // 아이콘 포함 시 추가 스타일 필요
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      error,
      feedback,
      icon,
      label,
      id,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const showError = Boolean(error);
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div
          className={clsx("relative flex items-center", {
            "opacity-50": disabled,
          })}
        >
          {icon && (
            <span className="absolute left-3 text-gray-400 pointer-events-none">
              {icon}
            </span>
          )}
          <input
            id={id}
            ref={ref}
            type="text"
            aria-invalid={showError}
            aria-describedby={
              showError
                ? `${id}-error`
                : feedback
                  ? `${id}-feedback`
                  : undefined
            }
            disabled={disabled}
            className={clsx(
              inputVariants({
                variant: showError
                  ? "error"
                  : disabled
                    ? "disabled"
                    : icon
                      ? "icon"
                      : variant,
              }),
              icon ? "pl-10" : "",
              className
            )}
            {...rest}
          />
        </div>
        {showError ? (
          <p
            id={`${id}-error`}
            className="mt-1 text-xs text-error-600"
            role="alert"
          >
            {error}
          </p>
        ) : feedback ? (
          <p id={`${id}-feedback`} className="mt-1 text-xs text-gray-500">
            {feedback}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
