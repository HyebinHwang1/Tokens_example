import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input, InputWithLabel } from ".";
import { MailIcon, EyeIcon } from "lucide-react";

const meta = {
  title: "COMPONENTS/Input",
  component: Input,
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
      description: "입력 필드의 placeholder",
    },
    error: {
      control: "boolean",
      description: "에러 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    leftIcon: {
      control: false,
      description: "입력 필드의 왼쪽 아이콘",
    },
    rightIcon: {
      control: false,
      description: "입력 필드의 오른쪽 아이콘",
    },
    className: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "内容を入力してください。",
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `Input` 컴포넌트입니다. 사용자가 직접 입력 테스트를 할 수 있습니다.",
      },
      source: {
        code: `const [value, setValue] = React.useState("");

return (
  <Input
    placeholder="内容を入力してください。"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);`,
      },
    },
    controls: {
      exclude: ["className", "value", "onChange"],
    },
  },
  render: function Render(args) {
    const [value, setValue] = React.useState(args.value || "");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange?.(e);
        }}
      />
    );
  },
};

export const WithLabel: StoryObj<typeof InputWithLabel> = {
  name: "WithLabel",
  args: {
    placeholder: "商品名を入力してください。",
    feedback: "商品名は必須項目です。",
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "라벨과 피드백 메시지를 포함하는 `InputWithLabel` 컴포넌트의 사용 예시입니다. 사용자가 직접 입력하고 상태 변화를 확인할 수 있습니다.",
      },
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `const [value, setValue] = React.useState("");

const hasError = value.length > 0 && value.length < 3;
const feedbackMessage = hasError && "商品名は3文字以上で入力してください。"

return (
  <InputWithLabel
    id="name-input-with-label"
    label="商品名"
    placeholder="商品名を入力してください。"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    error={hasError}
    feedback={feedbackMessage}
  />
);`,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Input의 라벨" },
    placeholder: { control: "text", description: "입력 필드의 placeholder" },
    feedback: {
      control: "text",
      description: "입력 필드 하단의 피드백 메시지",
    },
    error: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화 상태" },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  render: function Render(args) {
    const [value, setValue] = React.useState((args.value as string) || "");
    const currentError = args.error;
    const currentFeedback = args.feedback;

    return (
      <InputWithLabel
        {...args}
        label="商品名"
        id="name-input-with-label"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        error={currentError}
        feedback={currentFeedback}
      />
    );
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: "メール(mail)",
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "좌우 아이콘을 포함하는 `Input` 컴포넌트입니다. 사용자가 직접 입력 테스트를 할 수 있습니다.",
      },
    },
  },
  render: function Render(args) {
    const [value, setValue] = React.useState(args.value || "");

    return (
      <Input
        {...args}
        value={value}
        leftIcon={<MailIcon className="size-4" />}
        rightIcon={<EyeIcon className="size-4" />}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  },
};
