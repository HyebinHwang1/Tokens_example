import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

export default {
  title: "COMPONENTS/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
  controls: {
    exclude: ["children"],
  },
  tags: ["autodocs"],
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  argTypes: {
    color: {
      control: "select",
      options: ["light", "black", "primary", "secondary", "gray"],
      description: "뱃지의 색상",
    },
    capsule: {
      control: "boolean",
      description: "캡슐 형태 여부",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "뱃지의 크기",
    },
    children: {
      control: "text",
      description: "뱃지의 내용",
    },
  },
  args: {
    children: "バッジ(Badge)",
    color: "light",
    capsule: false,
    size: "md",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `<Badge color="light" size="md">Badge</Badge>`,
      },
      description: {
        story:
          "가장 기본적인 `Badge` 컴포넌트의 사용 예시입니다. 컨트롤 패널을 통해 다양한 `props`를 테스트할 수 있습니다.",
      },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const Color: Story = {
  parameters: {
    docs: {
      source: { code: undefined },
      description: {
        story:
          "다양한 `color` prop에 따른 `Badge` 컴포넌트의 시각적 변화를 보여줍니다.",
      },
    },
  },
  render: () => (
    <section className="flex flex-wrap gap-4">
      <Badge color="light">Light</Badge>
      <Badge color="black">Black</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="gray">Gray</Badge>
    </section>
  ),
};

export const Size: Story = {
  parameters: {
    docs: {
      source: { code: undefined },
      description: {
        story:
          "다양한 `size` prop에 따른 `Badge` 컴포넌트의 크기 변화를 보여줍니다.",
      },
    },
  },
  render: () => (
    <section className="flex gap-4 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </section>
  ),
};

export const Capsule: Story = {
  parameters: {
    docs: {
      source: { code: undefined },
      description: {
        story:
          "`capsule` prop을 사용하여 캡슐 형태로 표시되는 `Badge` 컴포넌트의 예시입니다.",
      },
    },
  },
  render: () => (
    <section className="flex flex-wrap gap-4">
      <Badge color="light" capsule>
        Light
      </Badge>
      <Badge color="black" capsule>
        Black
      </Badge>
      <Badge color="primary" capsule>
        Primary
      </Badge>
      <Badge color="secondary" capsule>
        Secondary
      </Badge>
      <Badge color="gray" capsule>
        Gray
      </Badge>
    </section>
  ),
};
