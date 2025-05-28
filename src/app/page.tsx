"use client";

import { Cat } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen">
      <Cat className="w-10 h-10" />
    </div>
  );
}
