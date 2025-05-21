import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "COMPONENTS/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean", description: "스위치 온/오프 상태" },
    disabled: { control: "boolean", description: "비활성화 여부" },
    onCheckedChange: {
      action: "checkedChange",
      description: "상태 변경 핸들러",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <Switch {...args} />,
};

export const Disabled: Story = {
  render: () => (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Switch disabled />
        <span>비활성화</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch disabled checked />
        <span>비활성화 & 체크</span>
      </div>
    </section>
  ),
};

export const WithLabel: Story = {
  render: (args) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <Switch {...args} />
        <span>알림 받기</span>
      </label>
    );
  },
};
