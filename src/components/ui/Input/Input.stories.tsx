import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";
import { Search } from "lucide-react";

const meta: Meta<InputProps> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "focus", "error", "disabled", "icon"],
    },
    error: { control: "text" },
    feedback: { control: "text" },
    icon: { control: false },
    label: { control: "text" },
    id: { control: "text" },
    disabled: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Figma 기반 Input 컴포넌트. variant, validation, 접근성, 아이콘 등 다양한 상태 지원.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "이름",
    id: "input-default",
    placeholder: "이름을 입력하세요",
    variant: "default",
  },
};

export const Focus: Story = {
  args: {
    label: "이름",
    id: "input-focus",
    placeholder: "포커스 상태",
    variant: "focus",
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const Error: Story = {
  args: {
    label: "이메일",
    id: "input-error",
    placeholder: "이메일을 입력하세요",
    error: "이메일 형식이 올바르지 않습니다.",
    variant: "error",
  },
};

export const Disabled: Story = {
  args: {
    label: "비밀번호",
    id: "input-disabled",
    placeholder: "비밀번호를 입력하세요",
    disabled: true,
    variant: "disabled",
  },
};

export const WithIcon: Story = {
  args: {
    label: "검색",
    id: "input-icon",
    placeholder: "검색어를 입력하세요",
    icon: <Search size={18} />,
    variant: "icon",
  },
};

export const WithFeedback: Story = {
  args: {
    label: "닉네임",
    id: "input-feedback",
    placeholder: "닉네임을 입력하세요",
    feedback: "사용 가능한 닉네임입니다.",
    variant: "default",
  },
};
