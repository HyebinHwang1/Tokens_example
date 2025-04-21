import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Save } from "lucide-react";

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
      options: ["primary", "secondary", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    state: {
      control: "select",
      options: ["default", "hover", "active", "disabled"],
    },
    icon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "Button",
    icon: <Save size={20} />,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    state: "disabled",
    children: "Button",
  },
};
