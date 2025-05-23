import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./index";
import { Button } from "../button/Button";

const meta = {
  title: "COMPONENTS/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SheetContent>;

export default meta;
type Story = StoryObj<typeof SheetContent>;

function BasicSheetExample({
  side,
}: {
  side: "top" | "right" | "bottom" | "left";
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="h-[800px] w-[800px]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Sheet 열기
          </button>
        </SheetTrigger>
        <SheetContent side={side} onClose={() => setOpen(false)}>
          <SheetTitle>Sheet 제목</SheetTitle>
          <SheetDescription>
            Sheet에 대한 설명이 들어갑니다. 이 컴포넌트는 모바일에서 자주
            사용되는 바텀 시트 형태의 UI를 제공합니다. 하단의 스와이프 영역을
            드래그하여 닫을 수 있습니다.
          </SheetDescription>
          <SheetFooter className="flex flex-row gap-2">
            <Button
              size="full"
              variant="light"
              className="h-10"
              onClick={() => setOpen(false)}
            >
              닫기
            </Button>
            <Button
              size="full"
              variant="dark"
              className="h-10"
              onClick={() => setOpen(false)}
            >
              확인
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export const Basic: Story = {
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Sheet가 나타나는 방향",
    },
  },
  args: {
    side: "bottom",
  },
  render: (args) => (
    <BasicSheetExample
      side={args.side as "top" | "right" | "bottom" | "left"}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = React.useState(false);

return (
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Sheet 열기
      </button>
    </SheetTrigger>
    <SheetContent side={side} onClose={() => setOpen(false)}>
      <SheetTitle>Sheet 제목</SheetTitle>
      <SheetDescription>
        Sheet에 대한 설명이 들어갑니다. 이 컴포넌트는 모바일에서 자주
        사용되는 바텀 시트 형태의 UI를 제공합니다. 하단의 스와이프 영역을
        드래그하여 닫을 수 있습니다.
      </SheetDescription>
      <SheetFooter className="flex flex-row gap-2">
        <Button size="full" variant="light" className="h-10" onClick={() => setOpen(false)}>
          닫기
        </Button>
        <Button size="full" variant="dark" className="h-10" onClick={() => setOpen(false)}>
          확인
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);`,
      },
    },
  },
};
