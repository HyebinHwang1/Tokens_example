import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonState = "default" | "hover" | "active" | "disabled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantColors = {
  primary: {
    default: "bg-primary-100 text-white",
    hover: "bg-primary-200 text-white",
    active: "bg-primary-200 text-white",
    disabled: "bg-grey-200 text-grey-400",
  },
  secondary: {
    default: "bg-secondary-100 text-white",
    hover: "bg-red-500 text-white",
    active: "bg-red-500 text-white",
    disabled: "bg-grey-200 text-grey-400",
  },
  outline: {
    default: "bg-transparent border border-primary-100 text-primary-100",
    hover: "bg-primary-100 text-white",
    active: "bg-primary-200 text-white",
    disabled: "bg-transparent border border-grey-300 text-grey-400",
  },
  ghost: {
    default: "bg-transparent text-primary-100",
    hover: "bg-grey-100 text-primary-200",
    active: "bg-grey-200 text-primary-200",
    disabled: "bg-transparent text-grey-400",
  },
  link: {
    default: "bg-transparent text-primary-100 underline",
    hover: "bg-transparent text-primary-200 underline",
    active: "bg-transparent text-primary-200 underline",
    disabled: "bg-transparent text-grey-400 underline",
  },
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  state = "default",
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2";

  const accessibilityProps = {
    role: "button",
    "aria-disabled": state === "disabled",
    "aria-pressed": state === "active",
  };

  return (
    <button
      className={`${poppins.className} ${baseStyles} ${variantColors[variant][state]} ${sizeStyles[size]} ${className || ""}`}
      disabled={state === "disabled"}
      {...accessibilityProps}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
