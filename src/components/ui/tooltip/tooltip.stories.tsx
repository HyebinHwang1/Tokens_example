import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TooltipContentProps {
  theme?: "light" | "dark";
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const meta: Meta<TooltipContentProps> = {
  title: "COMPONENTS/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
};

export default meta;
type Story = StoryObj<TooltipContentProps>;

export const Default: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent {...args}>
          Nothing comes close to the precision with which physics enables you to
          understand the world around you.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {
    theme: "light",
    side: "top",
  },
};

export const Dark: Story = {
  render: (args) => (
    <div className="bg-gray-900 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-white">Hover me</TooltipTrigger>
          <TooltipContent {...args}>
            Nothing comes close to the precision with which physics enables you
            to understand the world around you.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
  args: {
    theme: "dark",
    side: "top",
  },
};

export const AllPositions: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Top Left</TooltipTrigger>
            <TooltipContent {...args} side="top" align="start">
              Top Left Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Top Center</TooltipTrigger>
            <TooltipContent {...args} side="top" align="center">
              Top Center Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Top Right</TooltipTrigger>
            <TooltipContent {...args} side="top" align="end">
              Top Right Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Left</TooltipTrigger>
            <TooltipContent {...args} side="left">
              Left Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Right</TooltipTrigger>
            <TooltipContent {...args} side="right">
              Right Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Bottom Left</TooltipTrigger>
            <TooltipContent {...args} side="bottom" align="start">
              Bottom Left Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Bottom Center</TooltipTrigger>
            <TooltipContent {...args} side="bottom" align="center">
              Bottom Center Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Bottom Right</TooltipTrigger>
            <TooltipContent {...args} side="bottom" align="end">
              Bottom Right Tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  ),
  args: {
    theme: "light",
  },
};
