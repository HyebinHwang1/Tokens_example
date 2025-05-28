"use client";

import { HomeFilled24 } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen">
      <HomeFilled24 width={32} height={32} className="text-red-500" />
    </div>
  );
}
