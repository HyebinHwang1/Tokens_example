import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "./index";
import { Button } from "../button";

const meta = {
  title: "COMPONENTS/BottomSheet",
  component: BottomSheet,
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
    controls: {
      showHandleBar: {
        type: "boolean",
        defaultValue: true,
        description: "하단 핸들바 표시 여부",
      },
      showClose: {
        type: "boolean",
        defaultValue: false,
        description: "닫기 버튼 표시 여부",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheetContent>;

export default meta;
type Story = StoryObj<typeof BottomSheetContent>;

function BasicSheetExample({
  showHandleBar,
  showClose,
}: {
  showHandleBar?: boolean;
  showClose?: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="h-[500px] w-[800px]">
      <BottomSheet open={open} onOpenChange={setOpen}>
        <BottomSheetTrigger asChild>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Sheet 열기
          </button>
        </BottomSheetTrigger>
        <BottomSheetContent
          showHandleBar={showHandleBar}
          onClose={() => setOpen(false)}
          showClose={showClose}
        >
          <BottomSheetTitle>Sheet 제목</BottomSheetTitle>
          <BottomSheetDescription>
            Sheet에 대한 설명이 들어갑니다. 이 컴포넌트는 모바일에서 자주
            사용되는 바텀 시트 형태의 UI를 제공합니다. 하단의 스와이프 영역을
            드래그하여 닫을 수 있습니다.
          </BottomSheetDescription>
          <BottomSheetFooter className="flex flex-row gap-2">
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
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>
    </section>
  );
}

export const Basic: Story = {
  argTypes: {
    showHandleBar: {
      control: "boolean",
      defaultValue: true,
      description: "하단 핸들바 표시 여부",
    },
    showClose: {
      control: "boolean",
      defaultValue: false,
      description: "닫기 버튼 표시 여부",
    },
  },
  render: (args) => (
    <BasicSheetExample
      showHandleBar={args.showHandleBar}
      showClose={args.showClose}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = React.useState(false);

return (
  <BottomSheet open={open} onOpenChange={setOpen}>
    <BottomSheetTrigger asChild>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Sheet 열기
      </button>
    </BottomSheetTrigger>
    <BottomSheetContent side={side} onClose={() => setOpen(false)}>
      <BottomSheetTitle>Sheet 제목</BottomSheetTitle>
      <BottomSheetDescription>
        Sheet에 대한 설명이 들어갑니다. 이 컴포넌트는 모바일에서 자주
        사용되는 바텀 시트 형태의 UI를 제공합니다. 하단의 스와이프 영역을
        드래그하여 닫을 수 있습니다.
      </BottomSheetDescription>
      <BottomSheetFooter className="flex flex-row gap-2">
        <Button size="full" variant="light" className="h-10" onClick={() => setOpen(false)}>
          닫기
        </Button>
        <Button size="full" variant="dark" className="h-10" onClick={() => setOpen(false)}>
          확인
        </Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);`,
      },
    },
  },
};
