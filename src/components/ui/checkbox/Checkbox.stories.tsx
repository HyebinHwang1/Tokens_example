import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "COMPONENTS/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean", description: "체크 여부" },
    disabled: { control: "boolean", description: "비활성화 여부" },
    onCheckedChange: {
      action: "checkedChange",
      description: "체크 상태 변경 핸들러",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

function WithLabelExample() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox
        checked={checked}
        onCheckedChange={(v) => setChecked(v === true)}
      />
      <span>이용약관에 동의합니다</span>
    </label>
  );
}

export const WithLabel: Story = {
  render: () => <WithLabelExample />,
};
