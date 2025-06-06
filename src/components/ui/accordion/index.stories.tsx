import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./index";

const meta: Meta<typeof Accordion> = {
  title: "Modules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
    },
    controls: {
      exclude: ["className", "children"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "아코디언 타입 (single: 하나만 열림, multiple: 여러 개 열림 가능)",
    },
    collapsible: {
      control: "boolean",
      description: "type이 'single'일 때, 모든 아이템을 닫을 수 있는지 여부",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultItemsData = [
  {
    value: "item-1",
    trigger: "アウター",
    content: "アウター",
  },
  {
    value: "item-2",
    trigger: "トップス",
    content: "トップス",
  },
  {
    value: "item-3",
    trigger: "パンツ",
    content: "パンツ",
  },
];

export const Basic: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-[400px] md:w-[500px]",
  },
  argTypes: {
    children: {
      control: false,
      description: "아코디언 내부에 들어갈 AccordionItem들 입니다.",
    },
    defaultValue: {
      control: false,
      description: "초기에 열려있는 아이템의 값",
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: `
const accordionItems = [
  {
    value: "item-1",
    trigger: "アウター",
    content: "アウター",
  },
  {
    value: "item-2",
    trigger: "トップス",
    content: "トップス",
  },
  {
    value: "item-3",
    trigger: "パンツ",
    content: "パンツ",
  },
];

<Accordion type="single" collapsible className="w-full">
  {accordionItems.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionTrigger>{item.trigger}</AccordionTrigger>
      <AccordionContent>{item.content}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
        `,
      },
      description: {
        story:
          "가장 기본적인 아코디언의 사용 예시입니다. `type`과 `collapsible` props를 조절하여 동작을 변경할 수 있습니다. 아래 코드는 일반적인 사용 구조를 보여줍니다.",
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      {defaultItemsData.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  args: {
    type: "multiple",
    className: "w-[400px] md:w-[500px]",
    defaultValue: ["item-1"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "`type`을 `'multiple'`로 설정하여 여러 개의 아이템을 동시에 열 수 있는 아코디언입니다. `defaultValue`를 사용하여 초기에 열려있을 아이템들을 지정할 수 있습니다.",
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      {defaultItemsData.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const DefaultOpenSingle: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-2",
    className: "w-[400px] md:w-[500px]",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`type`이 `'single'`일 때 `defaultValue`를 사용하여 특정 아이템이 초기에 열려 있도록 설정한 예시입니다.",
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      {defaultItemsData.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-[400px] md:w-[500px]",
    defaultValue: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "특정 `AccordionItem`에 `disabled` prop을 전달하여 비활성화할 수 있습니다. 비활성화된 아이템은 열거나 닫을 수 없습니다.",
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value={defaultItemsData[0].value}>
        <AccordionTrigger>{defaultItemsData[0].trigger}</AccordionTrigger>
        <AccordionContent>{defaultItemsData[0].content}</AccordionContent>
      </AccordionItem>
      <AccordionItem value={defaultItemsData[1].value} disabled>
        <AccordionTrigger>
          {defaultItemsData[1].trigger} (비활성화됨)
        </AccordionTrigger>
        <AccordionContent>{defaultItemsData[1].content}</AccordionContent>
      </AccordionItem>
      <AccordionItem value={defaultItemsData[2].value}>
        <AccordionTrigger>{defaultItemsData[2].trigger}</AccordionTrigger>
        <AccordionContent>{defaultItemsData[2].content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
