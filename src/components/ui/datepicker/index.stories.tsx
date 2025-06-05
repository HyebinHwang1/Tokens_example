import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./index";
import React, { useState, useEffect } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "MODULES/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    date: {
      control: false,
      description: "선택된 날짜. 초기 날짜 설정에 사용됩니다.",
      table: {
        type: { summary: "Date | undefined" },
      },
    },
    setDate: {
      control: false,
      description: "날짜를 설정하는 콜백 함수입니다.",
      table: {
        type: { summary: "(date: Date | undefined) => void" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "가장 기본적인 `DatePicker` 컴포넌트의 사용 예시입니다. 사용자는 캘린더 아이콘을 클릭하여 날짜를 선택할 수 있습니다. `date`와 `setDate` props를 통해 상태를 제어합니다.",
      },
      source: {
        code: `
const [selectedDate, setSelectedDate] = React.useState<Date>();

<div className="flex flex-col items-center gap-2">
  <p>선택된 날짜: {selectedDate ? selectedDate.toLocaleDateString() : "선택되지 않음"}</p>
  <DatePicker
    date={selectedDate}
    setDate={setSelectedDate}
  />
</div>
        `,
      },
    },
  },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <section className="h-96 w-full flex flex-col ">
        <p className="mb-4 text-sm text-gray-700">
          현재 선택된 날짜: {date ? date.toLocaleDateString() : "없음"}
        </p>
        <DatePicker {...args} date={date} setDate={setDate} />
      </section>
    );
  },
};

export const DisabledState: Story = {
  parameters: {
    docs: {
      description: {
        story: "DatePicker가 비활성화된 상태를 개념적으로 보여주는 예시입니다.",
      },
      source: { code: null },
    },
  },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(new Date());

    useEffect(() => {
      if (args.date !== date) {
        setDate(args.date);
      }
    }, [args.date, date]);

    return (
      <section className="h-96 w-full flex flex-col items-center justify-center">
        <p className="mb-2 text-sm font-medium text-gray-500">
          이 DatePicker는 비활성화된 것으로 간주합니다:
        </p>
        <DatePicker {...args} date={date} setDate={setDate} disabled={true} />
        <p className="mt-2 text-xs text-gray-400">
          DatePicker가 비활성화되어 있습니다 (컨셉 예시).
        </p>
      </section>
    );
  },
};

export const WithInitialDate: Story = {
  args: {
    date: new Date(2024, 0, 20),
  },
  parameters: {
    docs: {
      description: {
        story:
          "초기 날짜가 `new Date(2024, 0, 20)`로 설정된 `DatePicker`의 예시입니다. `date` prop을 통해 초기값을 전달합니다.",
      },
      source: { code: null },
    },
  },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(args.date);

    useEffect(() => {
      if (args.date !== date) {
        setDate(args.date);
      }
    }, [args.date, date]);

    return (
      <section className="h-96 w-full flex flex-col items-center justify-center">
        <p className="mb-4 text-sm text-gray-700">
          설정된 초기 날짜: {date ? date.toLocaleDateString() : "없음"}
        </p>
        <DatePicker {...args} date={date} setDate={setDate} />
      </section>
    );
  },
};
