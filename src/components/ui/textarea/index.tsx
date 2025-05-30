import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "../label";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-sm placeholder:text-muted-foreground resize-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-30 w-full rounded-md border bg-transparent p-3 border-gray-200 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function TextAreaWithLabel({
  label,
  isRequired,
  labelClassName = "",
  ...props
}: React.ComponentProps<"textarea"> & {
  label: string;
  isRequired?: boolean;
  labelClassName?: string;
}) {
  return (
    <div className="flex flex-col w-full">
      <Label isRequired={isRequired} className={labelClassName}>
        {label}
      </Label>
      <Textarea {...props} />
    </div>
  );
}

export { Textarea, TextAreaWithLabel };
