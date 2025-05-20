"use client";

import { Button } from "@/components/ui/button/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-10 gap-3">
      <Button variant="text" size="xs">
        xsmall text
      </Button>
      <Button variant="text" size="sm">
        small text
      </Button>
      <Button variant="text" size="md">
        medium text
      </Button>
    </div>
  );
}
