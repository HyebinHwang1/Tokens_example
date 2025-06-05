"use client";

import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";

import { Input } from "@/components/ui/Input";

interface SearchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "placeholder"
  > {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClickDelete?: () => void;
  placeholder?: string;
}
export default function Search({
  onChange,
  onClickDelete,
  defaultValue = "",
  placeholder = "何をお探しですか?",
  ...props
}: SearchProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="w-full relative">
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          onChange?.(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
        className="pr-14 pl-4 text-xs rounded-full bg-gray-100 focus-visible:ring-0 focus-visible:ring-offset-0"
        {...props}
      />

      {value && (
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full bg-gray-400 p-1 cursor-pointer"
          onClick={() => {
            setValue("");
            onClickDelete?.();
          }}
        >
          <X className="w-2.5 h-2.5 text-white" />
        </button>
      )}

      <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
        <SearchIcon className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}
