import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./index";
import { useState } from "react";

export default {
  title: "MODULES/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

const DatePickerWithState = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <section className="h-80">
      <DatePicker date={date} setDate={setDate} />
    </section>
  );
};

export const Basic: Story = {
  render: () => <DatePickerWithState />,
  parameters: {
    docs: {
      source: {
        code: `
const [date, setDate] = useState<Date | undefined>(undefined);

return (
    <DatePicker date={date} setDate={setDate} />
);`,
      },
    },
  },
};
