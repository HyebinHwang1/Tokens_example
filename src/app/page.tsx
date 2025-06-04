"use client";

import { SwitchWithLabel } from "@/components/ui/switch";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-80 border">
      <SwitchWithLabel label="Switch" id="switch" labelDirection="right" />
    </div>
  );
}
