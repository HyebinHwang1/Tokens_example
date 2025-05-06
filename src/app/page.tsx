"use client";

import { Input } from "@/components/ui/Input/Input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Input type="text" placeholder="Input" className="w-1/2" disabled />
    </div>
  );
}
