import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel } from "./index";
import { Label } from "../label";

const meta: Meta<typeof RadioGroup> = {
  title: "COMPONENTS/Radio",
  component: RadioGroup,
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
    className: { table: { disable: true } },
  },
};
export default meta;

type RadioGroupStory = StoryObj<typeof RadioGroup>;

export const Basic: RadioGroupStory = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `RadioGroup`의 사용 예시입니다. `defaultValue`를 통해 초기 선택 값을 설정할 수 있으며, 사용자의 선택에 따라 값이 변경됩니다.",
      },
      source: {
        code: `
const [selectedValue, setSelectedValue] = React.useState("r1-story");

<RadioGroup
  defaultValue="r1-story"
  onValueChange={(value) => setSelectedValue(value)}
>
  <RadioGroupItem value="r1-story" id="r1-story" />
</RadioGroup>
    `,
      },
    },
  },
  args: {
    defaultValue: "r1-story",
    disabled: false,
  },

  argTypes: {
    defaultValue: {
      control: {
        disable: true,
      },
      description: "라디오 그룹의 기본 선택 값입니다.",
    },
    disabled: {
      control: {
        type: "boolean",
        description: "라디오 그룹을 비활성화합니다.",
      },
      description: "라디오 그룹을 비활성화합니다.",
    },
  },
  render: function Render(args) {
    const [selectedValue, setSelectedValue] = React.useState(args.defaultValue);

    return (
      <RadioGroup
        {...args}
        value={selectedValue}
        onValueChange={setSelectedValue}
      >
        <RadioGroupItem value="r1-story" id="r1-story" />
      </RadioGroup>
    );
  },
};

export const WithLabels: StoryObj<typeof RadioGroupItemWithLabel> = {
  args: {
    disabled: false,
    direction: "row",
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
      defaultValue: "row",
      description: "라디오 그룹의 방향을 설정합니다. 기본값은 `row`입니다.",
    },
    disabled: {
      control: "boolean",
      description: "라디오 그룹을 비활성화합니다.",
    },
    labelContainerClassName: {
      control: false,
      description: "라디오 그룹의 라벨 컨테이너 클래스를 설정합니다.",
    },
    groupClassName: {
      control: false,
      description: "라디오 그룹의 컨테이너 클래스를 설정합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "`RadioGroupItem`과 `Label` 컴포넌트를 함께 사용하는 헬퍼 컴포넌트입니다. 라벨을 클릭해도 해당 라디오 버튼이 선택됩니다.",
      },
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
const [selectedValue, setSelectedValue] = React.useState("label-r1-story");

<RadioGroupItemWithLabel
  items={[
    { id: "label-r1-story", value: "label-r1-story" },
    { id: "label-r2-story", value: "label-r2-story" },
  ]}
  onValueChange={(value) => setSelectedValue(value)}
  defaultValue={selectedValue}
/>
        `,
      },
    },
  },
  render: function Render(args) {
    const [selectedValue, setSelectedValue] = React.useState("label-r1-story");
    return (
      <RadioGroupItemWithLabel
        {...args}
        items={[
          { id: "label-r1-story", value: "label-r1-story" },
          { id: "label-r2-story", value: "label-r2-story" },
        ]}
        onValueChange={(value) => setSelectedValue(value)}
        defaultValue={selectedValue}
      />
    );
  },
};

export const DisabledGroup: RadioGroupStory = {
  parameters: {
    docs: {
      description: {
        story:
          "`RadioGroup` 컴포넌트의 `disabled` prop을 `true`로 설정하여 그룹 내 모든 라디오 버튼을 비활성화한 예시입니다.",
      },
    },
  },
  args: {
    disabled: true,
    defaultValue: "option-1",
  },
  render: (args) => (
    <RadioGroup {...args} className="gap-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="d1" />
        <Label htmlFor="d1" className="text-slate-400">
          옵션 1 (비활성)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="d2" />
        <Label htmlFor="d2" className="text-slate-400">
          옵션 2 (비활성)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="d3" />
        <Label htmlFor="d3" className="text-slate-400">
          옵션 3 (비활성)
        </Label>
      </div>
    </RadioGroup>
  ),
};
