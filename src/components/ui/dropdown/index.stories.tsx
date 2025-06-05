import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownArrowButton,
  DropdownItem,
  DropdownGroup,
  SimpleDropdown,
} from "./index";

const meta: Meta<DropdownStoryProps> = {
  title: "Modules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
      story: {
        inline: false,
        height: "350px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "드롭다운 열림/닫힘 상태",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "드롭다운 열림/닫힘 상태 변경 콜백",
    },
    sideOffset: {
      control: "number",
      description: "DropdownContent와 Trigger 사이의 거리 (px)",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "DropdownContent의 정렬 방향",
    },
  },
};

export default meta;

interface DropdownStoryProps extends React.ComponentProps<typeof Dropdown> {
  sideOffset?: number;
  align?: "start" | "center" | "end";
  buttonText?: string;
  items?: Array<{
    id?: string;
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: React.ElementType;
    shortcut?: string;
  }>;
}

const basicDropdownItems: Required<Pick<DropdownStoryProps, "items">>["items"] =
  [
    {
      id: "profile",
      label: "プロフィール (Profile)",
      onClick: () => alert("プロフィール (Profile) selected"),
    },
    {
      id: "billing",
      label: "請求 (Billing)",
      onClick: () => alert("請求 (Billing) selected"),
    },
    {
      id: "settings",
      label: "設定 (Settings)",
      onClick: () => alert("設定 (Settings) selected"),
    },
  ];

interface StoryDropdownItem {
  id: string;
  label: string;
  icon?: React.ElementType;
  disabled?: boolean;
  shortcut?: string;
}

interface StoryDropdownGroup {
  groupLabel?: string;
  items: StoryDropdownItem[];
}

export const Basic: StoryObj<DropdownStoryProps> = {
  args: {
    open: false,
    sideOffset: 4,
    align: "center",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      description: {
        story:
          "가장 기본적인 `Dropdown` 사용 예시입니다. `DropdownArrowButton`을 트리거로 사용하며, 몇 가지 기본 아이템을 보여줍니다. Storybook 컨트롤을 통해 `open`, `sideOffset`, `align`을 제어할 수 있습니다.",
      },
      source: {
        code: `const [open, setOpen] = React.useState(false);

<Dropdown open={open} onOpenChange={(open)=>setOpen(open)}>
  <DropdownTrigger asChild>
      <DropdownArrowButton open={open}>プロフィール</DropdownArrowButton>
  </DropdownTrigger>
  <DropdownContent sideOffset={sideOffset} align={align}>
      {basicDropdownItems.map((item) => (
        <DropdownItem key={item.id} onClick={() => {}}>
          {item.label}
        </DropdownItem>
      ))} 
  </DropdownContent>
</Dropdown>
        `,
      },
    },
  },
  render: function Render(args: DropdownStoryProps) {
    const [open, setOpen] = useState(!!args.open);

    useEffect(() => {
      setOpen(!!args.open);
    }, [args.open]);

    return (
      <Dropdown open={open} onOpenChange={(open) => setOpen(open)}>
        <DropdownTrigger asChild>
          <DropdownArrowButton open={open}>プロフィール</DropdownArrowButton>
        </DropdownTrigger>
        <DropdownContent
          sideOffset={args.sideOffset}
          align={args.align}
          className="w-56"
        >
          {basicDropdownItems.map((item) => (
            <DropdownItem
              key={item.id}
              onSelect={() => alert(`${item.label} selected`)}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const Simple: StoryObj<DropdownStoryProps> = {
  args: {
    open: false,
    buttonText: "プロフィール (Simple)",
    sideOffset: 4,
    align: "center",
    items: basicDropdownItems.map((item) => ({
      label: item.label,
      onClick: () => alert(`${item.label} selected from SimpleDropdown`),
    })),
  },
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = React.useState(false);

<SimpleDropdown
  open={open}
  buttonText="プロフィール"
  onOpenChange={(open) => setOpen(open)}
  items={basicDropdownItems.map((item) => ({
    label: item.label,
    onClick: () => {},
  }))}
/>
    `,
      },
      description: {
        story:
          "\`SimpleDropdown\`은 \`Dropdown\`의 사용을 단순화한 래퍼 컴포넌트 예시입니다. 기본적인 드롭다운 기능을 더 간결한 props로 제공합니다.",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: function Render(args: DropdownStoryProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      setOpen(Boolean(args.open));
    }, [args.open]);

    return (
      <SimpleDropdown
        open={open}
        buttonText="プロフィール"
        onOpenChange={setOpen}
        items={basicDropdownItems.map((item) => ({
          label: item.label,
          onClick: () => alert(`${item.label} selected`),
        }))}
      />
    );
  },
};

const dropdownItemsWithIconsAndGroups: StoryDropdownGroup[] = [
  {
    groupLabel: "マイアカウント",
    items: [
      {
        id: "profile",
        label: "Profile",
        shortcut: "⇧⌘P",
      },
      {
        id: "billing",
        label: "Billing",
        shortcut: "⌘B",
      },
      {
        id: "settings",
        label: "Settings",
        shortcut: "⌘S",
      },
    ],
  },
  {
    groupLabel: "チーム ",
    items: [
      { id: "team", label: "Team" },
      {
        id: "invite",
        label: "Invite users",
      },
      {
        id: "new-team",
        label: "New Team",
        shortcut: "⌘+T",
      },
    ],
  },
  {
    items: [
      { id: "github", label: "GitHub" },
      { id: "support", label: "Support" },
      { id: "api", label: "API", disabled: true },
    ],
  },
  {
    groupLabel: "連絡先",
    items: [
      { id: "email", label: "Email" },
      { id: "message", label: "Message" },
    ],
  },
  {
    items: [
      {
        id: "logout",
        label: "Log out",
        shortcut: "⇧⌘Q",
      },
    ],
  },
];

export const WithGroups: StoryObj<DropdownStoryProps> = {
  args: {
    ...Basic.args,
    align: "center",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`DropdownGroup`을 사용하여 아이템을 그룹화한 예시입니다. 그룹 헤더와 아이템 내 단축키 표시를 포함합니다.",
      },
      story: {
        height: "550px",
      },
    },
  },
  render: function Render(args: DropdownStoryProps) {
    const [open, setOpen] = useState(!!args.open);

    useEffect(() => {
      setOpen(!!args.open);
    }, [args.open]);

    return (
      <Dropdown open={open} onOpenChange={(open) => setOpen(open)}>
        <DropdownTrigger asChild>
          <DropdownArrowButton open={open}>メニューを開く</DropdownArrowButton>
        </DropdownTrigger>
        <DropdownContent
          sideOffset={args.sideOffset}
          align={args.align}
          className="w-80"
        >
          {dropdownItemsWithIconsAndGroups.map((group, groupIndex) => (
            <React.Fragment key={group.groupLabel || `ungrouped-${groupIndex}`}>
              <DropdownGroup>
                {group.groupLabel && (
                  <div className="select-none px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    {group.groupLabel}
                  </div>
                )}
                {group.items.map((item) => (
                  <DropdownItem
                    key={item.id}
                    disabled={!!item.disabled}
                    onSelect={() => {}}
                  >
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <span className="ml-auto pl-2 text-xs tracking-widest text-muted-foreground">
                        {item.shortcut}
                      </span>
                    )}
                  </DropdownItem>
                ))}
              </DropdownGroup>
            </React.Fragment>
          ))}
        </DropdownContent>
      </Dropdown>
    );
  },
};
