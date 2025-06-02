"use client";

import { Button } from "@/components/ui/button";
import {
  Dropdown,
  DropdownArrowButton,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { useState } from "react";

const tabs = [
  {
    label: "Tab 1",
    value: "tab1",
  },
  {
    label: "Tab 2",
    value: "tab2",
  },
  {
    label: "Tab 3",
    value: "tab3",
  },
  {
    label: "Tab 4",
    value: "tab4",
  },
  {
    label: "Tab 5",
    value: "tab5",
  },
  {
    label: "Tab 6",
    value: "tab6",
  },
  {
    label: "Tab 7",
    value: "tab7",
  },
  {
    label: "Tab 8",
    value: "tab8",
  },
  {
    label: "Tab 9",
    value: "tab9",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-80 border">
      <div className="items-center w-full grid grid-cols-2">
        <div>
          <Button className="w-full justify-baseline">123</Button>
        </div>
        <Dropdown open={open} onOpenChange={setOpen}>
          <DropdownTrigger asChild>
            <DropdownArrowButton open={open}>123</DropdownArrowButton>
          </DropdownTrigger>
          <DropdownContent>
            {tabs.map((tab) => (
              <DropdownItem key={tab.value}>{tab.label}</DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
      </div>
    </div>
  );
}
