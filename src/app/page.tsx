"use client";

import SimpleAlert from "@/components/ui/alert/simple";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-[500px]">
      <button onClick={() => setIsOpen(true)}>onCLick</button>
      <SimpleAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        description="変更された会員情報はありません。"
        actionButtonText="確認"
      />
      , useState
    </div>
  );
}
