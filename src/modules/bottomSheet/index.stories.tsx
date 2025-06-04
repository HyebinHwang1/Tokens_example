import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetTrigger,
  SimpleBottomSheet,
} from "./index";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Modules/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof BottomSheetContent>;

export default meta;

type Story = StoryObj<typeof BottomSheetContent>;
type SimpleStory = StoryObj<typeof SimpleBottomSheet>;

function BasicSheetExample({
  showHandleBar,
  showClose,
}: {
  showHandleBar?: boolean;
  showClose?: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="h-[500px] w-[800px] flex items-center justify-center">
      <BottomSheet open={open} onOpenChange={setOpen}>
        <BottomSheetTrigger asChild>
          <Button variant="primary" onClick={() => setOpen(true)}>
            オープン
          </Button>
        </BottomSheetTrigger>
        <BottomSheetContent
          showHandleBar={showHandleBar}
          onClose={() => setOpen(false)}
          showClose={showClose}
        >
          <BottomSheetTitle>Sheet Title</BottomSheetTitle>
          <BottomSheetDescription>Hello BottomSheet!</BottomSheetDescription>
          <BottomSheetFooter className="flex flex-row gap-2">
            <Button
              size="full"
              variant="light"
              className="h-10"
              onClick={() => setOpen(false)}
            >
              クローズ
            </Button>
            <Button
              size="full"
              variant="dark"
              className="h-10"
              onClick={() => setOpen(false)}
            >
              確認
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
      description: "콘텐츠 상단 핸들바 표시 여부",
    },
    showClose: {
      control: "boolean",
      description: "콘텐츠 우상단 닫기 버튼 표시 여부",
    },
  },
  args: {
    showHandleBar: true,
    showClose: true,
  },
  render: (args) => (
    <BasicSheetExample
      showHandleBar={args.showHandleBar}
      showClose={args.showClose}
    />
  ),
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `BottomSheet`의 사용 예시입니다. `BottomSheetTrigger`를 통해 시트를 열고 닫을 수 있으며, `BottomSheetContent` 내부에 제목, 설명, 푸터 등을 구성할 수 있습니다. 컨트롤을 통해 핸들바 및 닫기 버튼 표시 여부를 제어할 수 있습니다.",
      },
      source: {
        code: `
const [open, setOpen] = React.useState(false);

return (
  <BottomSheet open={open} onOpenChange={setOpen}>
    <BottomSheetTrigger asChild>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        オープン
      </Button>
    </BottomSheetTrigger>
    <BottomSheetContent 
      showHandleBar={true}
      showClose={true}
      onClose={() => setOpen(false)}
    >
      <BottomSheetTitle>Sheet Title</BottomSheetTitle>
      <BottomSheetDescription>
        Hello BottomSheet!
      </BottomSheetDescription>
      <BottomSheetFooter className="flex flex-row gap-2">
        <Button variant="light" onClick={() => setOpen(false)}>
          クローズ
        </Button>
        <Button variant="dark" onClick={() => setOpen(false)}>
          確認
        </Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);`,
      },
    },
  },
};

interface SimpleSheetExampleProps {
  title: string;
  showHandleBar?: boolean;
  showClose?: boolean;
}

function SimpleSheetExample({
  title,
  showHandleBar,
  showClose,
}: SimpleSheetExampleProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SimpleBottomSheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={title} // args에서 전달받은 title 사용
      showHandleBar={showHandleBar} // args에서 전달받은 showHandleBar 사용
      showClose={showClose} // args에서 전달받은 showClose 사용
      triggerButton={
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          オープン
        </Button>
      }
    >
      <div className="p-4">Hello SimpleBottomSheet!</div>
      <BottomSheetFooter className="flex flex-row gap-2 !pt-0">
        <Button
          size="full"
          variant="light"
          className="h-10"
          onClick={() => setIsOpen(false)}
        >
          キャンセル
        </Button>
        <Button
          size="full"
          variant="dark"
          className="h-10"
          onClick={() => setIsOpen(false)}
        >
          確認
        </Button>
      </BottomSheetFooter>
    </SimpleBottomSheet>
  );
}

export const SimpleSheet: SimpleStory = {
  argTypes: {
    title: {
      control: { disable: true },
      description:
        "SimpleBottomSheet의 제목 웹 접근성을 위해 필수로 제공되는 값",
    },
    showHandleBar: {
      control: "boolean",
      description: "콘텐츠 상단 핸들바 표시 여부",
    },
    showClose: {
      control: "boolean",
      description: "콘텐츠 우상단 닫기 버튼 표시 여부",
    },
    children: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    onClose: { table: { disable: true } },
    triggerButton: { table: { disable: true } },
  },
  args: {
    title: "간편 바텀시트 제목",
    showHandleBar: true,
    showClose: false,
  },
  render: (args) => (
    <section className="h-[500px] w-[800px] flex items-center justify-center">
      <SimpleSheetExample {...args} />
    </section>
  ),
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "`SimpleBottomSheet`는 `BottomSheet`의 일반적인 사용 패턴을 간소화한 헬퍼 컴포넌트입니다.`title` prop은 웹접근성을 위해 내부적으로 `VisuallyHidden` 컴포넌트로 감싸져 스크린리더에는 제공되지만 화면에는 보이지 않습니다.",
      },
      source: {
        code: `
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SimpleBottomSheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="title"
      triggerButton={
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          オープン
        </Button>
      }
    >
      <div className="p-4">
        Hello SimpleBottomSheet!
      </div>
      <BottomSheetFooter className="flex flex-row gap-2 !pt-0">
        <Button variant="light" className="h-10" onClick={() => setIsOpen(false)}>
          キャンセル
        </Button>
        <Button variant="dark" className="h-10" onClick={() => setIsOpen(false)}>
          確認
        </Button>
      </BottomSheetFooter>
    </SimpleBottomSheet>
  );
}

`,
      },
    },
  },
};
