import type { Meta, StoryObj } from "@storybook/react";
import { CardRealExample, ProductCardExample } from "./CardRealExample";
import { CardThumbnail } from "./CardExample";
import { CardStyle } from "./CardExample";

const meta: Meta = {
  title: "UI/Example",
};

export default meta;
type Story = StoryObj;

export const ProductCard: Story = {
  render: () => (
    <div className="bg-gray-100 p-10">
      <ProductCardExample />
    </div>
  ),
};

export const BannerExample: Story = {
  render: () => (
    <div className="bg-gray-100 p-10">
      <CardRealExample />
    </div>
  ),
};

export const CardStyleExample: Story = {
  args: {
    theme: "white",
  },
  render: (args) => {
    return <CardStyle {...args} />;
  },
};

export const CardThumbnailExample: Story = {
  render: () => (
    <div className="bg-gray-100 p-10">
      <CardThumbnail />
    </div>
  ),
};
