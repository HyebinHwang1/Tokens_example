import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "비활성화 여부 (RadioGroupItem에 적용)",
    },
    onValueChange: { action: "valueChange", description: "값 변경 핸들러" },
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: () => (
    <RadioGroup defaultValue="1">
      <RadioGroupItem value="1" id="r1" />
      <RadioGroupItem value="2" id="r2" />
    </RadioGroup>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <RadioGroup defaultValue="option2">
      <label className="flex items-center gap-2 cursor-pointerㅎ">
        <RadioGroupItem value="option1" id="option1" />
        <span>옵션 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <RadioGroupItem value="option2" id="option2" />
        <span>옵션 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <RadioGroupItem value="option3" id="option3" />
        <span>옵션 3</span>
      </label>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="1">
      <RadioGroupItem value="1" id="d1" disabled />
      <RadioGroupItem value="2" id="d2" disabled />
      <RadioGroupItem value="3" id="d3" disabled />
    </RadioGroup>
  ),
};
