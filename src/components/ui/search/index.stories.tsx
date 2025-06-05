import type { Meta, StoryObj } from "@storybook/react";
import Search from "./index";

const meta: Meta<typeof Search> = {
  title: "MODULES/Search",
  component: Search,

  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Basic: Story = {
  argTypes: {
    placeholder: { control: "text", description: "placeholder 텍스트" },
    defaultValue: { control: "text", description: "기본 입력값" },
    onChange: { action: "changed", description: "입력값 변경 핸들러" },
    onClickDelete: {
      action: "deleteClicked",
      description: "삭제 버튼 클릭 핸들러",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <Search {...args} />,
};
