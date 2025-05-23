import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./index";
import { Button } from "../button";

export default {
  title: "COMPONENTS/Tooltip",
  component: TooltipContent,
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
} as Meta<typeof TooltipContent>;

type Story = StoryObj<typeof TooltipContent>;

export const Basic: Story = {
  argTypes: {
    theme: {
      control: "select",
      options: ["primary", "secondary"],
      description: "툴팁 테마",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "툴팁 위치",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "툴팁 정렬",
    },
    alignOffset: {
      control: "number",
      description: "툴팁 정렬 오프셋",
    },
    sideOffset: {
      control: "number",
      description: "툴팁 위치 오프셋",
    },
  },
  args: {
    theme: "primary",
    side: "top",
    align: "center",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="lg">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>テキスト テキスト</TooltipContent>
    </Tooltip>
  ),
};

export const Themes: Story = {
  render: () => (
    <section className="flex gap-4">
      <div>
        <span className="block text-center mb-1">Primary</span>
        <Tooltip open>
          <TooltipTrigger>Primary</TooltipTrigger>
          <TooltipContent theme="primary">Primary tooltip</TooltipContent>
        </Tooltip>
      </div>
      <div>
        <span className="block text-center mb-1">Secondary</span>
        <Tooltip open>
          <TooltipTrigger>Secondary</TooltipTrigger>
          <TooltipContent theme="secondary">Secondary tooltip</TooltipContent>
        </Tooltip>
      </div>
    </section>
  ),
};

export const Positions: Story = {
  render: () => (
    <section className="flex flex-col items-center gap-4 p-8">
      <div className="flex gap-4">
        <Tooltip open>
          <TooltipTrigger>Top Left</TooltipTrigger>
          <TooltipContent side="top" align="start">
            Top Left Tooltip
          </TooltipContent>
        </Tooltip>

        <Tooltip open>
          <TooltipTrigger>Top Center</TooltipTrigger>
          <TooltipContent side="top" align="center">
            Top Center Tooltip
          </TooltipContent>
        </Tooltip>

        <Tooltip open>
          <TooltipTrigger>Top Right</TooltipTrigger>
          <TooltipContent side="top" align="end">
            Top Right Tooltip
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex gap-4">
        <Tooltip open>
          <TooltipTrigger>Left</TooltipTrigger>
          <TooltipContent side="left">Left Tooltip</TooltipContent>
        </Tooltip>

        <Tooltip open>
          <TooltipTrigger>Right</TooltipTrigger>
          <TooltipContent side="right">Right Tooltip</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger>Bottom Left</TooltipTrigger>
          <TooltipContent side="bottom" align="start">
            Bottom Left Tooltip
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>Bottom Center</TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            Bottom Center Tooltip
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>Bottom Right</TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            Bottom Right Tooltip
          </TooltipContent>
        </Tooltip>
      </div>
    </section>
  ),
};
