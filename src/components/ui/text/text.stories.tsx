import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const English: Story = {
  render: () => (
    <div className="flex-col gap-4 font-pretendard">
      <p className="text-sm font-thin">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-md font-light">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-lg font-normal">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-xl font-medium">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-2xl font-semibold">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-3xl font-bold">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-4xl font-extrabold">
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  ),
};

export const Japanese: Story = {
  render: () => (
    <div className="flex-col gap-4 font-notoSansJP">
      <p className="text-sm font-thin">アァイィウゥエェオォカガユュ</p>
      <p className="text-md font-light">アァイィウゥエェオォカガユュ</p>
      <p className="text-lg font-normal">アァイィウゥエェオォカガユュ</p>
      <p className="text-xl font-medium">アァイィウゥエェオォカガユュ</p>
      <p className="text-2xl font-semibold">アァイィウゥエェオォカガユュ</p>
      <p className="text-3xl font-bold">アァイィウゥエェオォカガユュ</p>
      <p className="text-4xl font-extrabold">アァイィウゥエェオォカガユュ</p>
    </div>
  ),
};
