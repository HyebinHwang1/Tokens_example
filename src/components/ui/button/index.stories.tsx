import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";
import { Button } from "./index";

export default {
  title: "COMPONENTS/Button",
  component: Button,
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
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "primary", "secondary", "dark", "text", "ghost"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  args: {
    children: "Button",
    variant: "light",
    size: "md",
    capsule: false,
    disabled: false,
    selected: false,
  },
  parameters: {
    controls: {
      exclude: ["asChild"],
    },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => <Button {...args} />,
};

export const Variant: Story = {
  render: () => (
    <section className="flex gap-4">
      <Button>Light(Default)</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dark">Dark</Button>
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
      <Button variant="light" selected>
        Light(Default)
      </Button>
      <Button variant="primary" selected>
        Primary
      </Button>
      <Button variant="secondary" selected>
        Secondary
      </Button>
      <Button variant="dark" selected>
        Dark
      </Button>
      <Button variant="text" selected>
        Text
      </Button>
    </section>
  ),
};

export const Size: Story = {
  render: () => (
    <section>
      <div className="flex gap-4 mb-4">
        <Button size="xs">XSmall Button</Button>
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="xl">XLarge Button</Button>
      </div>
      <div>
        <Button size="full">Full Button</Button>
      </div>
    </section>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => (
    <section className="flex gap-4">
      <Button variant="light" disabled>
        Light(default)
      </Button>
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="dark" disabled>
        Dark
      </Button>
      <Button variant="text" disabled>
        Text
      </Button>
    </section>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Button variant="primary" {...args}>
      <Plus />
      Primary
      <Plus />
    </Button>
  ),
};

export const Capsule: Story = {
  render: () => (
    <section className="flex gap-4">
      <Button variant="light" capsule>
        Light(Default)
      </Button>
      <Button variant="dark" capsule>
        Dark
      </Button>
      <Button variant="primary" capsule>
        Primary
      </Button>
      <Button variant="secondary" capsule>
        Secondary
      </Button>
    </section>
  ),
};

// export const Example: Story = {
//   render: () => (
//     <section className="flex gap-8 flex-col">
//       <div className="flex flex-col items-center">
//         <h2 className="mb-2">Card Button(ghost button)</h2>
//         <Button
//           variant="ghost"
//           className="flex items-center gap-2 w-auto h-auto bg-gray-100 p-2 rounded-2xl"
//         >
//           <div className="w-11 h-11 rounded-full relative">
//             <Image
//               src={BrandExample}
//               alt="no image"
//               fill
//               className="rounded-full"
//             />
//           </div>
//           <div className="text-gray-500 flex flex-col items-start">
//             <p className="text-gray-900 text-xs">MARITHÉ FRANÇOIS GIRBAUD</p>
//             <div className="flex gap-2 text-[9px]">
//               <span># マニッシュ</span>
//               <span># マニッシュ</span>
//               <span># マニッシュ</span>
//             </div>
//             <p className="text-[9px]">directed by kazane</p>
//           </div>
//         </Button>
//       </div>

//       <div className="flex flex-col items-center">
//         <h2 className="mb-2 flex gap-1">Option Button(default button)</h2>
//         <Button className="w-auto p-2" selected>
//           <ArrowRight className="w-4 h-4" />
//           <span className="text-xs">Color</span>
//           <span className="text-[10px]">(モデル)</span>
//         </Button>
//       </div>

//       <div className="flex flex-col items-center">
//         <h2 className="mb-2 flex gap-1">Capsule button(black button)</h2>
//         <Button variant="dark" className="rounded-full">
//           button name
//         </Button>
//       </div>

//       <div className="flex flex-col items-center">
//         <h2 className="mb-4 flex gap-1">icon button(ghost button)</h2>
//         <Button
//           variant="ghost"
//           className="flex flex-col gap-1 text-gray-900 font-[400]"
//         >
//           <HomeIcon className="w-6 h-6" />
//           <span className="text-[9px]"> タイトル</span>
//           <span className="text-[9px]">home</span>
//         </Button>
//       </div>
//     </section>
//   ),
// };
