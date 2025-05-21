import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

export default {
  title: "COMPONENTS/Badge",
  component: Badge,
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
  },
  args: {
    children: "Badge",
    color: "light",
    capsule: false,
    size: "md",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const Color: Story = {
  render: () => (
    <section className="flex gap-4">
      <Badge color="light">Light</Badge>
      <Badge color="black">Black</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="gray">Gray</Badge>
    </section>
  ),
};

export const Size: Story = {
  render: () => (
    <section className="flex gap-4 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </section>
  ),
};

export const Capsule: Story = {
  render: () => (
    <section className="flex gap-4">
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
