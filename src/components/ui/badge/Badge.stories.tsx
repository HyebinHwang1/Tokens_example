import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "COMPONENTS/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["info", "success", "danger", "outline"],
      description: "badge 컬러 변경",
    },
    weight: {
      control: "select",
      options: ["dimmed", "outline"],
      description: "badge line 변경",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => (
    <section className="flex gap-4">
      <Badge intent="info">Info</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="danger">Danger</Badge>
      <Badge intent="warning">Warning</Badge>
    </section>
  ),
};

export const Outline: Story = {
  render: () => (
    <section className="flex gap-4">
      <Badge intent="info" weight="outline">
        Info
      </Badge>
      <Badge intent="success" weight="outline">
        Success
      </Badge>
      <Badge intent="danger" weight="outline">
        Danger
      </Badge>
      <Badge intent="warning" weight="outline">
        Warning
      </Badge>
    </section>
  ),
};
