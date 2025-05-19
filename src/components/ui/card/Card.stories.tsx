import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import ExampleImage from "@/assets/images/example.png";
import Image from "next/image";

const meta: Meta<typeof Card> = {
  title: "MODULES/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "추가 스타일링 클래스",
    },
    theme: {
      control: "select",
      options: ["white", "black"],
      description: "카드의 테마",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    theme: "white",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithThumbnail: Story = {
  args: {
    theme: "white",
  },
  render: (args) => (
    <Card className="pt-0" {...args}>
      <Image src={ExampleImage} className="rounded-t-lg" alt="Card Image" />
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  ),
};
