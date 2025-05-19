import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "COMPONENTS/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["confirmation", "deletion"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Confirmation: Story = {
  args: {
    type: "confirmation",
    title: "Alert Header",
    description: "Alert Body",
    onCancel: () => console.log("Cancel clicked"),
    onConfirm: () => console.log("Confirm clicked"),
  },
};

export const Deletion: Story = {
  args: {
    type: "deletion",
    title: "Alert Header",
    description: "Alert Body",
    onCancel: () => console.log("Cancel clicked"),
    onConfirm: () => console.log("Delete clicked"),
  },
};
