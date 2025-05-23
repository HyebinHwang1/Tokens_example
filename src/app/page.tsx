"use client";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="lg">Hover</Button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            theme="secondary"
            sideOffset={10}
            align="start"
          >
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
