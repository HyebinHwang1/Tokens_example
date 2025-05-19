import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "COMPONENTS/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "라벨 텍스트" },
    id: { control: "text", description: "input id" },
    error: { control: "boolean", description: "에러 상태 여부" },
    feedback: { control: "text", description: "에러 메시지" },
    icon: { control: false },
    type: { control: "text", description: "input type" },
    placeholder: { control: "text", description: "placeholder 텍스트" },
    disabled: { control: "boolean", description: "비활성화 여부" },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Input label="이름" id="input-basic" placeholder="이름을 입력하세요" />
    </section>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Input
        label="이메일"
        id="input-icon"
        placeholder="이메일을 입력하세요"
        icon={<Mail />}
      />
    </section>
  ),
};

export const Error: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Input
        label="이메일"
        id="input-error"
        placeholder="이메일을 입력하세요"
        error
        feedback="올바른 이메일을 입력해주세요."
      />
    </section>
  ),
};

export const Disabled: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Input
        label="이름"
        id="input-disabled"
        placeholder="이름을 입력하세요"
        disabled
      />
    </section>
  ),
};
