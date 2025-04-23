import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "text", "skeleton"],
      description: "버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "버튼의 크기",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
    asChild: {
      control: "boolean",
      description: "Radix UI Slot 컴포넌트로 렌더링 여부",
    },
    isLoading: {
      control: "boolean",
      description: "로딩 상태 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <section className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="text">Text</Button>
    </section>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  render: () => (
    <section className="flex gap-4">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="text" disabled>
        Text
      </Button>
    </section>
  ),
};

export const Size: Story = {
  render: () => (
    <section className="gap-4">
      <Button className="mr-4" variant="primary" size="sm">
        Small Button
      </Button>
      <Button className="mr-4" variant="primary" size="md">
        Medium Button
      </Button>
      <Button className="mr-4" variant="primary" size="lg">
        Large Button
      </Button>
    </section>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <section className="gap-4 flex">
      <Button variant="primary">
        <Plus />
        Primary
      </Button>
      <Button variant="secondary">
        <Plus />
        Secondary
      </Button>
      <Button variant="ghost">
        <Plus />
        Ghost
      </Button>
    </section>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <section>
      <Button className="mr-4" size="sm" variant="skeleton">
        Skeleton
      </Button>
      <Button className="mr-4" size="md" variant="skeleton">
        Skeleton
      </Button>
      <Button className="mr-4" size="lg" variant="skeleton">
        Skeleton
      </Button>
    </section>
  ),
};

export const Loading: Story = {
  render: () => (
    <section className="flex gap-4">
      <Button variant="primary" isLoading>
        Primary
      </Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="ghost" isLoading>
        Ghost
      </Button>
    </section>
  ),
};
