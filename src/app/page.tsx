"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-[500px]">
      <div className="bg-third-500">asdasd</div>
      <Accordion type="single">
        <AccordionItem value="1">
          <AccordionTrigger>Accordion 1</AccordionTrigger>
          <AccordionContent>Accordion 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Accordion 2</AccordionTrigger>
          <AccordionContent>Accordion 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Accordion 3</AccordionTrigger>
          <AccordionContent>Accordion 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
