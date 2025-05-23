import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTrigger,
} from ".";
import { useState } from "react";

export default {
  title: "COMPONENTS/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  docs: {
    source: {
      type: "code",
      language: "tsx",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof ModalContent>;

type Story = StoryObj<typeof ModalContent>;

const ModalBasic = ({ showClose }: { showClose?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger>Open</ModalTrigger>
      <ModalContent showClose={showClose}>
        <ModalDescription>
          IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。
        </ModalDescription>
        <ModalFooter className="flex flex-row gap-2 border-t border-gray-200">
          <Button
            size="full"
            className="h-10"
            variant="light"
            onClick={() => setOpen(false)}
          >
            キャンセル
          </Button>
          <Button
            size="full"
            className="h-10"
            variant="dark"
            onClick={() => setOpen(false)}
          >
            確認
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const Basic: Story = {
  argTypes: {
    showClose: {
      control: "boolean",
      description: "모달 닫기 버튼 표시 여부",
    },
  },
  args: {
    showClose: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

return (
  <Modal open={open} onOpenChange={setOpen}>
    <ModalTrigger>Open</ModalTrigger>
    <ModalContent showClose={showClose}>
      <ModalDescription>
        IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。IDまたはパスワvードが一致しません。
      </ModalDescription>
      <ModalFooter className="flex flex-row gap-2 border-t border-gray-200">
        <Button size="full" className="h-10" variant="light" onClick={() => setOpen(false)}>
          キャンセル
        </Button>
        <Button size="full" className="h-10" variant="dark" onClick={() => setOpen(false)}>
          確認
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);`,
      },
    },
  },
  render: (args) => <ModalBasic {...args} />,
};
