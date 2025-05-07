"use client";

import { cn } from "@/lib/utils";
import { inputDefaultStyle } from "./Input";
import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";

interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClickDelete?: () => void;
}
export default function Search({
  defaultValue,
  onChange,
  onClickDelete,
  ...props
}: SearchProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={cn(
          inputDefaultStyle,
          "pr-10 pl-4 rounded-full bg-gray-100 focus-visible:ring-0 focus-visible:ring-offset-0"
        )}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
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
