"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useDragToScroll } from "@/hooks/useDragToScroll";

function Tabs({
  className,
  layout,
  ...props
}: React.ComponentProps<"div"> & {
  layout?: "compact" | "full";
}) {
  const tabsRef = useDragToScroll<HTMLDivElement>();

  return (
    <div
      ref={tabsRef}
      data-slot="tabs"
      className={cn(
        "group w-full flex flex-nowrap gap-2 border-b border-b-gray-200 px-5 overflow-x-auto scrollbar-hidden",
        layout === "compact" && "compact flex flex-wrap",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  href,
  active,
  ...props
}: React.ComponentProps<"a"> & { href: string; active?: boolean }) {
  return (
    <Link
      href={href}
      data-slot="tabs-list"
      className={cn(
        "text-gray-800 relative inline-flex w-fit items-center justify-center px-2 py-3 text-sm whitespace-nowrap scroll-hidden",
        "group-[.compact]:flex-1",
        active && "border-b-2 border-b-gray-800",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList };
