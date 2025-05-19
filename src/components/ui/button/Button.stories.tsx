import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowRight, HomeIcon, Plus } from "lucide-react";
import BrandExample from "@/assets/images/brand_example.svg";
import Image from "next/image";

const meta: Meta<typeof Button> = {
  title: "COMPONENTS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "black",
        "skeleton",
        "ghost",
        "text",
      ],
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

export const Size: Story = {
  render: () => (
    <section className="gap-4">
      <Button className="mr-4" size="sm">
        Small Button
      </Button>
      <Button className="mr-4" size="md">
        Medium Button
      </Button>
      <Button className="mr-4" size="lg">
        Large Button
      </Button>
    </section>
  ),
};

export const Basic: Story = {
  render: () => (
    <section className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="black">Black</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="text">Text</Button>
    </section>
  ),
};

export const Selected: Story = {
  args: {
    selected: true,
  },

  render: () => (
    <section className="flex gap-4">
      <Button variant="default" selected>
        Default
      </Button>
      <Button variant="black" selected>
        Black
      </Button>
      <Button variant="primary" selected>
        Primary
      </Button>
      <Button variant="secondary" selected>
        Secondary
      </Button>
      <Button variant="ghost" selected>
        Ghost
      </Button>
      <Button variant="text" selected>
        Text
      </Button>
    </section>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  render: () => (
    <section className="flex gap-4">
      <Button variant="default" disabled>
        Default
      </Button>
      <Button variant="black" disabled>
        Black
      </Button>
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

export const Example: Story = {
  render: () => (
    <section className="flex gap-8 flex-col">
      <div className="flex flex-col items-center">
        <h2 className="mb-2">Card Button(ghost button)</h2>
        <Button
          variant="ghost"
          className="flex items-center gap-2 w-auto h-auto bg-gray-100 p-2 rounded-2xl"
        >
          <div className="w-11 h-11 rounded-full relative">
            <Image
              src={BrandExample}
              alt="no image"
              fill
              className="rounded-full"
            />
          </div>
          <div className="text-gray-500 flex flex-col items-start">
            <p className="text-gray-900 text-xs">MARITHÉ FRANÇOIS GIRBAUD</p>
            <div className="flex gap-2 text-[9px]">
              <span># マニッシュ</span>
              <span># マニッシュ</span>
              <span># マニッシュ</span>
            </div>
            <p className="text-[9px]">directed by kazane</p>
          </div>
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-2 flex gap-1">Option Button(default button)</h2>
        <Button className="w-auto p-2" selected>
          <ArrowRight className="w-4 h-4" />
          <span className="text-xs">Color</span>
          <span className="text-[10px]">(モデル)</span>
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-2 flex gap-1">Capsule button(black button)</h2>
        <Button variant="black" className="rounded-full">
          button name
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-4 flex gap-1">icon button(ghost button)</h2>
        <Button
          variant="ghost"
          className="flex flex-col gap-1 text-gray-900 font-[400]"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-[9px]"> タイトル</span>
          <span className="text-[9px]">home</span>
        </Button>
      </div>
    </section>
  ),
};
