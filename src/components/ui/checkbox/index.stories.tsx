import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "COMPONENTS/Checkbox",
  component: Checkbox,
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
    className: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  argTypes: {
    checked: {
      control: "boolean",
      description: "체크박스의 값을 제어합니다.",
      name: "checked",
    },
    disabled: {
      control: "boolean",
      description: "체크박스의 비활성화 상태를 제어합니다.",
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `Checkbox`의 사용 예시입니다. Storybook 컨트롤을 통해 초기 `checked` 상태와 `disabled` 상태를 제어할 수 있으며, 사용자의 클릭에 따라 상태가 변경됩니다.",
      },
      source: {
        code: `
  const [isChecked, setIsChecked] = React.useState(false);

<Checkbox
  checked={isChecked}
  disabled={disabled}
  onCheckedChange={() => setIsChecked(!isChecked)}
/>
`,
      },
    },
  },
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(args.checked);

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <Checkbox
        checked={isChecked}
        disabled={args.disabled}
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
    );
  },
};
