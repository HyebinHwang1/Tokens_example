import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input, InputWithLabel } from ".";
import { Search, AlertCircleIcon, MailIcon, EyeIcon } from "lucide-react";

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
      exclude: ["leftIcon", "rightIcon", "className", "value", "onChange"],
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

export const WithIcons: Story = {
  args: {
    placeholder: "아이콘과 함께 검색...",
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
          args.onChange?.(e);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 입력창",
    value: "수정할 수 없는 값",
    disabled: true,
    leftIcon: <Search className="size-4 text-muted-foreground" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "비활성화 상태의 `Input` 컴포넌트입니다. `value` prop으로 초기값을 설정할 수 있습니다.",
      },
      source: {
        code: `<Input
  placeholder="비활성화된 입력창"
  value="수정할 수 없는 값"
  disabled={true}
  leftIcon={<Search className="size-4 text-muted-foreground" />}
/>`,
      },
    },
    controls: {
      exclude: ["rightIcon", "error", "className", "onChange"],
    },
  },
  render: (args) => <Input {...args} />,
};

export const Error: Story = {
  args: {
    placeholder: "오류 상태 입력창",
    error: true,
    rightIcon: <AlertCircleIcon className="size-4 text-destructive" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "오류 상태를 나타내는 `Input` 컴포넌트입니다. 사용자가 직접 입력 테스트를 할 수 있습니다.",
      },
      source: {
        code: `const [value, setValue] = React.useState("");

return (
  <Input
    placeholder="오류 상태 입력창"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    error={true}
    rightIcon={<AlertCircleIcon className="size-4 text-destructive" />}
  />
);`,
      },
    },
    controls: {
      exclude: ["leftIcon", "disabled", "className", "value", "onChange"],
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
  name: "WithLabel (InputWithLabel)",
  args: {
    id: "name-input-with-label",
    label: "이름 (WithLabel)",
    placeholder: "이름을 입력하세요",
    feedback: "이름은 필수 항목입니다.",
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "라벨과 피드백 메시지를 포함하는 `InputWithLabel` 컴포넌트의 사용 예시입니다. 사용자가 직접 입력하고 상태 변화를 확인할 수 있습니다.",
      },
      source: {
        code: `const [value, setValue] = React.useState("");

// InputWithLabel의 error 상태와 feedback 메시지를 동적으로 관리하는 예시
const hasError = value.length > 0 && value.length < 3;
const feedbackMessage = hasError
  ? "이름은 3자 이상이어야 합니다."
  : "멋진 이름이네요!";

return (
  <InputWithLabel
    id="name-input-with-label"
    label="이름 (WithLabel)"
    placeholder="이름을 입력하세요"
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
    id: { control: "text", description: "라벨과 Input을 연결하기 위한 ID" },
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
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (typeof args.onChange === "function") {
            // @ts-ignore TODO: InputWithLabel의 onChange prop 실제 타입 확인 후, 이 호출의 타입 안전성 확보 필요.
            // 현재는 args.onChange가 함수인지만 확인하고 호출하고 있습니다.
            args.onChange(e);
          }
        }}
        error={currentError}
        feedback={currentFeedback}
      />
    );
  },
};
