import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Tabs, TabsList } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Modules/Tab",
  component: Tabs,
  parameters: {
    layout: "center",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
      story: {
        inline: false, // 스토리가 너무 길어지는 것을 방지
        height: "300px", // 스토리 표시 영역 높이 조절
      },
    },
    exclude: ["className", "children", "items"],
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "radio",
      options: ["full", "compact"],
      description:
        "탭 레이아웃을 설정합니다. `full`은 일반적인 스크롤 가능한 탭, `compact`는 탭 아이템들이 공간을 균등하게 채웁니다.",
    },
  },
};

export default meta;

const tabItems = [
  { id: "tab1", label: "マイページ", href: "#mypage" },
  { id: "tab2", label: "会員情報", href: "#profile" },
  { id: "tab3", label: "購入履歴", href: "#history" },
  { id: "tab4", label: "クーポン", href: "#coupons" },
  { id: "tab5", label: "お知らせ", href: "#notifications" },
  { id: "tab6", label: "設定", href: "#settings" },
];

interface TabStoryProps extends React.ComponentProps<typeof Tabs> {
  items: typeof tabItems;
  initialActiveTab: string;
}

const Template: StoryObj<TabStoryProps> = {
  render: function Render({ items, initialActiveTab, layout, ...args }) {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    return (
      <Tabs layout={layout} {...args}>
        {items.map((item) => (
          <TabsList
            key={item.id}
            href={item.href}
            active={activeTab === item.id}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(item.id);
            }}
          >
            {item.label}
          </TabsList>
        ))}
      </Tabs>
    );
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      source: {
        code: `
// Basic Tabs 사용 예시 (상태 관리 포함)
const [activeTab, setActiveTab] = React.useState("tab1");
const tabItems = [
  { id: "tab1", label: "マイページ", href: "#mypage" },
  { id: "tab2", label: "会員情報", href: "#profile" },
  { id: "tab3", label: "購入履歴", href: "#history" },
  // ... more items
];

return (
  <Tabs layout="full"> 
    {tabItems.map((item) => (
      <TabsList
        key={item.id}
        href={item.href}
        active={activeTab === item.id}
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(item.id);
        }}
      >
        {item.label}
      </TabsList>
    ))}
  </Tabs>
);
        `,
      },
      controls: {
        exclude: ["items"],
      },
    },
  },
};

export const Basic: StoryObj<TabStoryProps> = {
  ...Template,
  args: {
    items: tabItems.slice(0, 4),
    initialActiveTab: "tab1",
    layout: "full",
  },
  parameters: {
    ...Template.parameters,
    docs: {
      ...Template.parameters?.docs,
      description: {
        story:
          "가장 기본적인 `Tabs` 컴포넌트 사용 예시입니다. `layout='full'`이며, 탭 아이템들은 내부 컨텐츠 너비만큼 차지합니다. 탭 개수가 많아지면 스크롤이 가능합니다.",
      },
    },
  },
};

export const CompactLayout: StoryObj<TabStoryProps> = {
  ...Template,
  args: {
    items: tabItems.slice(0, 3),
    initialActiveTab: "tab2",
    layout: "compact",
  },
  parameters: {
    ...Template.parameters,
    docs: {
      ...Template.parameters?.docs,
      description: {
        story:
          "`layout='compact'`로 설정된 `Tabs` 컴포넌트입니다. 탭 아이템들이 사용 가능한 공간을 균등하게 나누어 차지합니다 (`flex-1`).",
      },
    },
  },
};

export const Scrollable: StoryObj<TabStoryProps> = {
  ...Template,
  args: {
    items: tabItems,
    initialActiveTab: "tab3",
    layout: "full",
    className: "w-72",
  },
  parameters: {
    ...Template.parameters,
    docs: {
      ...(Template.parameters?.docs || {}),
      description: {
        story:
          "탭 아이템의 총 너비가 `Tabs` 컨테이너 너비를 초과하여 가로 스크롤이 발생하는 예시입니다. 마우스 드래그로 스크롤할 수 있습니다. (컨테이너 너비 w-72로 고정)",
      },
    },
  },
};
