import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertAction,
  AlertContent,
  AlertDescription,
  AlertFooter,
  AlertHeader,
  AlertTitle,
  AlertTrigger,
} from "./index";
import { Button } from "@/components/ui/button";
import SimpleAlert from "./simple";

const meta: Meta<typeof Alert> = {
  title: "Modules/Alert",
  component: Alert,
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
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  argTypes: {
    open: {
      control: "boolean",
      description: "알림창 열림/닫힘 상태 (외부 제어용)",
    },
    children: { control: false },
  },
  args: {
    open: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
const [open, setOpen] = React.useState(false);

<Alert open={open} onOpenChange={setOpen}>
  <AlertTrigger asChild>
    <Button variant="light">オープン (Trigger)</Button>
  </AlertTrigger>
  <AlertContent>
    <AlertHeader>
      <AlertTitle>変更された会員情報はありません。</AlertTitle>
      <AlertDescription>
        変更された会員情報はありません。
      </AlertDescription>
    </AlertHeader>
    <AlertFooter>
      <AlertAction onClick={() => setOpen(false)}>確認</AlertAction>
    </AlertFooter>
  </AlertContent>
</Alert>
        `,
      },
      description: {
        story:
          "가장 기본적인 AlertDialog의 사용 예시입니다. `open` prop을 통해 외부에서 열림/닫힘 상태를 제어할 수 있습니다.",
      },
    },
  },
  render: function Render(args) {
    const [currentOpen, setCurrentOpen] = useState(args.open);

    useEffect(() => {
      setCurrentOpen(args.open);
    }, [args.open]);

    return (
      <Alert open={currentOpen} onOpenChange={setCurrentOpen}>
        <AlertTrigger asChild>
          <Button variant="light">オープン (Trigger)</Button>
        </AlertTrigger>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>変更された会員情報はありません。</AlertTitle>
            <AlertDescription>
              変更された会員情報はありません。
            </AlertDescription>
          </AlertHeader>
          <AlertFooter>
            <AlertAction onClick={() => setCurrentOpen(false)}>
              確認
            </AlertAction>
          </AlertFooter>
        </AlertContent>
      </Alert>
    );
  },
};

type SimpleStory = StoryObj<typeof SimpleAlert>;

export const SimpleAlertExample: SimpleStory = {
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "알림창 열림/닫힘 상태 (Storybook 컨트롤용)",
    },
    title: { control: "text", description: "알림창 제목 (선택 사항)" },
    description: { control: "text", description: "알림창 설명 (필수)" },
    actionButtonText: {
      control: "text",
      description: "확인 버튼 텍스트 (기본값: 確認)",
    },
    triggerButtonText: { control: false },
    onClose: {
      action: "closed",
      description: "알림창이 닫힐 때 호출되는 함수",
    },
  },
  args: {
    isOpen: false,
    title: "Simple Alert",
    description: "Simple Alert",
    actionButtonText: "OK",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "자주 사용되는 패턴을 단순화한 `SimpleAlertDialog` 컴포넌트의 예시입니다. `isOpen` prop으로 열림 상태를 제어합니다.",
      },
      source: {
        code: `
const [isOpen, setIsOpen] = React.useState(false);

<Button onClick={() => setIsOpen(true)}>Simple Alert オープン</Button> (트리거 예시)

<SimpleAlert
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Simple Alert"
  description="Simple Alert"
  actionButtonText="OK"
/>
        `,
      },
    },
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Simple Alert オープン (Control)
        </Button>
        <SimpleAlert
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose();
          }}
          title={args.title}
          description={args.description}
          actionButtonText={args.actionButtonText}
        />
      </>
    );
  },
};
