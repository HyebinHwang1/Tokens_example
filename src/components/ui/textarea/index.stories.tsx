import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Textarea, TextAreaWithLabel } from "./index";

const meta: Meta<typeof Textarea> = {
  title: "COMPONENTS/Textarea",
  component: Textarea,
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
    placeholder: {
      control: "text",
      description: "입력 필드에 표시되는 플레이스홀더 텍스트입니다.",
    },
    disabled: {
      control: "boolean",
      description: "Textarea 비활성화 여부입니다.",
    },
    value: {
      control: "text",
      description: "Textarea의 현재 값입니다.",
    },
    onChange: {
      action: "changed",
      description: "Textarea 값 변경 시 호출되는 함수입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    placeholder: "内容を入力してください。",
    disabled: false,
    value: "",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `Textarea` 컴포넌트의 사용 예시입니다. 사용자는 내용을 직접 입력하고 테스트할 수 있습니다.",
      },
      source: {
        code: `
const [text, setText] = React.useState("");

return (
  <Textarea
    placeholder="内容を入力してください。"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
);
        `,
      },
    },
  },
  render: function Render(args) {
    const [currentValue, setCurrentValue] = useState(args.value || "");

    return (
      <Textarea
        {...args}
        className="w-80"
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          if (args.onChange) {
            args.onChange(e);
          }
        }}
      />
    );
  },
};

type WithLabelStory = StoryObj<typeof TextAreaWithLabel>;

export const WithLabel: WithLabelStory = {
  argTypes: {
    label: {
      control: "text",
      description: "Textarea 위에 표시될 라벨 텍스트입니다.",
    },
    isRequired: {
      control: "boolean",
      description: "라벨에 필수 입력 표시(별표)를 할지 여부입니다.",
    },
    labelClassName: {
      control: "text",
      description: "라벨에 적용할 추가 Tailwind CSS 클래스입니다.",
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
  args: {
    label: "テキストエリア",
    isRequired: false,
    placeholder: "内容を入力してください。",
    disabled: false,
    value: "",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "`TextAreaWithLabel` 컴포넌트는 라벨과 Textarea를 함께 제공합니다. 필수 입력 표시 등을 설정할 수 있습니다.",
      },
      source: {
        code: `
const [description, setDescription] = React.useState("");

return (
  <TextAreaWithLabel
    label="テキストエリア"
    placeholder="内容を入力してください。"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    isRequired={false}
  />
);
        `,
      },
    },
  },
  render: function Render(args) {
    const { label, isRequired, labelClassName, ...textareaArgs } = args;
    const [currentValue, setCurrentValue] = useState(textareaArgs.value || "");

    return (
      <TextAreaWithLabel
        label={label!}
        isRequired={isRequired}
        labelClassName={labelClassName}
        className="w-80"
        {...textareaArgs}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          if (textareaArgs.onChange) {
            textareaArgs.onChange(e);
          }
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    // Basic 스토리의 args를 일부 가져오되, disabled만 true로 설정
    placeholder: "비활성화된 Textarea입니다.",
    disabled: true,
    value: "입력 불가",
    className: "w-80",
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`disabled` prop을 `true`로 설정하여 Textarea를 비활성화한 모습입니다. `Textarea`와 `TextAreaWithLabel` 두 가지 경우를 보여줍니다.",
      },
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-4 items-start">
      <Textarea {...args} />
    </div>
  ),
};
