"use client";

import { Button } from "@/components/ui/button";
import { SimpleBottomSheet } from "@/modules/bottomSheet";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-80 border">
      <SimpleBottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Title"
        triggerButton={<Button onClick={() => setIsOpen(true)}>Open</Button>}
        showHandleBar={true}
      >
        <div>Hello</div>
      </SimpleBottomSheet>
    </div>
  );
}
