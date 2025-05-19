import type { Meta, StoryObj } from "@storybook/react";
import Search from "./search";

const meta: Meta<typeof Search> = {
  title: "MODULES/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", description: "placeholder 텍스트" },
    defaultValue: { control: "text", description: "기본 입력값" },
    onChange: { action: "changed", description: "입력값 변경 핸들러" },
    onClickDelete: {
      action: "deleteClicked",
      description: "삭제 버튼 클릭 핸들러",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Basic: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Search />
    </section>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <section className="flex flex-col gap-6 w-80">
      <Search defaultValue="기본값" />
    </section>
  ),
};
