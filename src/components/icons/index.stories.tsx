import React, { SVGProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./index";
import { size as sizeOptions } from "./constants"; // 크기 옵션 가져오기

const iconKeys = Object.keys(Icons).filter(
  (key) => typeof Icons[key as keyof typeof Icons] === "function"
) as (keyof typeof Icons)[];

export default {
  title: "Components/Icons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Icons>;

type Story = StoryObj<
  SVGProps<SVGSVGElement> & { size?: keyof typeof sizeOptions }
>;

export const BasicIcon: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: Object.keys(sizeOptions),
      defaultValue: "md",
      description: "아이콘 크기를 선택합니다.",
    },
  },
  render: (args) => {
    return (
      <section className="flex gap-4 border border-gray-300 shadow-md rounded-md p-4">
        <Icons.CartOutline24 {...args} />
        <Icons.HomeOutline24 {...args} />
        <Icons.FilterFilled24 {...args} />
      </section>
    );
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
        <CartOutline24 size="md" />
<HomeOutline24 size="md" />
<FilterFilled24 size="md" />
        `,
      },
    },
  },
};

export const AllIcons: Story = {
  render: () => {
    return (
      <section className="grid grid-cols-8 border border-gray-300 shadow-md rounded-md p-8 gap-7 max-w-5xl">
        {iconKeys.map((key) => {
          const IconComponent = Icons[key as keyof typeof Icons];
          return (
            <div
              key={key}
              title={key}
              className="flex flex-col items-center gap-1"
            >
              <IconComponent size="xl" />
              <span className="text-xs text-gray-800">{key}</span>
            </div>
          );
        })}
      </section>
    );
  },
};
