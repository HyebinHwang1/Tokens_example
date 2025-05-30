"use client";

import { Tabs, TabsList } from "@/components/ui/tab";

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
  return (
    <div className="flex flex-col items-center justify-center mx-10 gap-3 text-2xs h-screen w-full border">
      <Tabs>
        {tabs.map((tab) => (
          <TabsList key={tab.value} href="#" active={tab.value === "tab1"}>
            {tab.label}
          </TabsList>
        ))}
      </Tabs>
    </div>
  );
}
