import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchWithLabel } from ".";
import React, { useEffect, useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "COMPONENTS/Switch",
  component: Switch,
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
    checked: {
      control: { type: "boolean" },
      description: "스위치의 초기 선택(on/off) 상태를 제어합니다.",
      name: "checked (초기값)",
    },
    disabled: {
      control: { type: "boolean" },
      description: "스위치의 비활성화 상태를 제어합니다.",
    },
    onCheckedChange: {
      description: "스위치 상태 변경 시 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "(checked: boolean) => void" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    className: {
      table: { disable: true },
      control: false,
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
      description: {
        story:
          "가장 기본적인 `Switch` 컴포넌트의 사용 예시입니다. Storybook 컨트롤을 통해 `checked` (초기값) 및 `disabled` 상태를 변경할 수 있으며, 스위치를 클릭하여 상태를 토글할 수 있습니다.",
      },
      source: {
        code: `
const [isChecked, setIsChecked] = React.useState(false);

return (
  <Switch
    checked={isChecked}
    onCheckedChange={setIsChecked}
    disabled={false}
  />
);
        `,
      },
    },
  },
  render: function Render(args) {
    const [currentChecked, setCurrentChecked] = useState(args.checked);

    useEffect(() => {
      setCurrentChecked(args.checked);
    }, [args.checked]);

    return (
      <Switch
        {...args}
        checked={currentChecked}
        onCheckedChange={setCurrentChecked}
      />
    );
  },
};

export const WithLabel: StoryObj<typeof SwitchWithLabel> = {
  args: {
    checked: false,
    disabled: false,
    labelDirection: "left",
    label: "Switch",
    id: "switch",
    labelClassName: "text-sm",
    labelContainerClassName: "flex items-center gap-2 select-none",
  },
  argTypes: {
    labelDirection: {
      control: "radio",
      options: ["left", "right"],
      default: "left",
    },
    labelClassName: {
      control: false,
    },
    labelContainerClassName: {
      control: false,
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "`Switch` 컴포넌트를 `label` 태그와 함께 사용하는 예시입니다. 라벨을 클릭해도 스위치 상태가 변경됩니다. Storybook 컨트롤을 통해 `Switch`의 상태를 변경해볼 수 있습니다.",
      },
      source: {
        code: `
const [checked, setChecked] = React.useState(false);

<SwitchWithLabel
   label="Switch"
   id="switch"
   checked={checked}
   onCheckedChange={setChecked} 
   labelDirection="left"
 />
        `,
      },
    },
  },

  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);

    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return (
      <SwitchWithLabel
        {...args}
        label="Switch"
        id="switch"
        checked={checked}
        onCheckedChange={setChecked}
      />
    );
  },
};
