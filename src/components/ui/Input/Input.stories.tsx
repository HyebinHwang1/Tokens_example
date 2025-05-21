import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputWithLabel } from "./Input";
import { EyeIcon, Search } from "lucide-react";

export default {
  title: "COMPONENTS/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  docs: {
    source: {
      type: "code",
      language: "tsx",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Input>;

type InputWithLabelStory = StoryObj<typeof InputWithLabel>;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
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
  },
  args: {
    placeholder: "입력해주세요",
    error: false,
    disabled: false,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    controls: {
      exclude: ["leftIcon", "rightIcon"],
    },
  },
  render: (args) => <Input {...args} />,
};

export const WithIcons: Story = {
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
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    controls: {
      exclude: ["leftIcon", "rightIcon"],
    },
  },
  args: {
    placeholder: "검색어를 입력하세요",
    leftIcon: <Search />,
    rightIcon: <EyeIcon />,
    error: false,
    disabled: false,
  },
  render: (args) => <Input {...args} />,
};

export const WithLabels: InputWithLabelStory = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    error: false,
    feedback: "이름을 입력하세요.",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    controls: {
      exclude: ["leftIcon", "rightIcon"],
    },
  },
  render: (args) => <InputWithLabel {...args} id="name" />,
};
