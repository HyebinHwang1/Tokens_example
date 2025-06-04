import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./index";

export default {
  title: "COMPONENTS/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  docs: {
    source: {
      type: "code",
      language: "tsx",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Profile>;

type Story = StoryObj<typeof Profile>;

export const Basic: Story = {
  argTypes: {
    size: {
      control: "select",
      options: ["xxs", "xs", "sm", "md", "lg", "xl"],
      description: "프로필 이미지의 크기",
    },
  },
  args: {
    src: "https://github.com/shadcn.png",
    alt: "Profile Image",
    size: "md",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <Profile {...args} />,
};

export const Size: Story = {
  render: () => (
    <section className="flex gap-4 items-center">
      <div>
        <span className="block text-center mb-1">xxs</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="XXS Profile"
          size="xxs"
        />
      </div>
      <div>
        <span className="block text-center mb-1">xs</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="XS Profile"
          size="xs"
        />
      </div>
      <div>
        <span className="block text-center mb-1">sm</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="SM Profile"
          size="sm"
        />
      </div>
      <div>
        <span className="block text-center mb-1">md</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="MD Profile"
          size="md"
        />
      </div>
      <div>
        <span className="block text-center mb-1">lg</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="LG Profile"
          size="lg"
        />
      </div>
      <div>
        <span className="block text-center mb-1">xl</span>
        <Profile
          src="https://github.com/shadcn.png"
          alt="XL Profile"
          size="xl"
        />
      </div>
    </section>
  ),
};
