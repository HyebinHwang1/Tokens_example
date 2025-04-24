"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { HelpCircle, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../button/Button";

const alertVariants = cva(
  "relative w-[520px] rounded-[4px] bg-white shadow-sm animate-in fade-in-0 zoom-in-95",
  {
    variants: {
      type: {
        confirmation: "border-[#2185D0]",
        deletion: "border-[#DB2828]",
      },
    },
    defaultVariants: {
      type: "confirmation",
    },
  }
);

const iconVariants = cva(
  "flex items-center justify-center rounded-full size-10",
  {
    variants: {
      type: {
        confirmation: "bg-[rgba(33,133,208,0.15)]",
        deletion: "bg-[rgba(219,40,40,0.15)]",
      },
    },
    defaultVariants: {
      type: "confirmation",
    },
  }
);

const iconColorVariants = cva("size-6", {
  variants: {
    type: {
      confirmation: "text-[#2185D0]",
      deletion: "text-[#DB2828]",
    },
  },
  defaultVariants: {
    type: "confirmation",
  },
});

const buttonVariants = cva(
  "w-[86px] h-[38px] rounded-[4px] font-medium text-base",
  {
    variants: {
      type: {
        confirmation: "bg-[#2185D0] text-white",
        deletion: "bg-[#DB2828] text-white",
      },
    },
    defaultVariants: {
      type: "confirmation",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

function Alert({
  className,
  type,
  title,
  description,
  onCancel,
  onConfirm,
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ type }), className)}
      {...props}
    >
      <div className="flex items-start gap-4 p-8 pl-6">
        <div className={cn(iconVariants({ type }))}>
          {type === "confirmation" ? (
            <HelpCircle className={cn(iconColorVariants({ type }))} />
          ) : (
            <Trash2 className={cn(iconColorVariants({ type }))} />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[28px] font-semibold leading-[1.21] text-[#1B1C1D]">
            {title}
          </h3>
          <p className="text-base leading-[1.375] text-[#1B1C1D]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 bg-[rgba(118,118,118,0.05)] p-6">
        <Button
          variant="ghost"
          className="w-[86px] h-[38px] rounded-[4px] border-[#2185D0] text-[#2185D0] font-medium text-base"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          className={cn(buttonVariants({ type }))}
          onClick={onConfirm}
        >
          {type === "confirmation" ? "Confirm" : "Delete"}
        </Button>
      </div>
    </div>
  );
}

export { Alert };
