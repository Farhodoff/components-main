import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { DatePicker } from "@/components/library/DatePicker";
import { LibraryBadge } from "@/components/library/LibraryBadge";

const datePickerProps = [
  {
    name: "date",
    type: "Date | undefined",
    description: "The selected Date object.",
  },
  {
    name: "onSelect",
    type: "(date: Date | undefined) => void",
    description: "Callback fired when a date is selected.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Pick a date"',
    description: "Text shown when no date is selected.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the date picker trigger button.",
  },
];

const importCode = `import { DatePicker } from "@/components/library/DatePicker";`;

const usageCode = `export default function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <DatePicker
      date={selectedDate}
      onSelect={setSelectedDate}
      placeholder="Select an appointment date"
    />
  );
}`;

export const DatePickerDocs: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Date Picker</h1>
          <LibraryBadge variant="secondary">Library</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A popover calendar component for selecting individual dates, built on top of Radix Popover and React Day Picker.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Demo</h2>
        <div className="p-8 rounded-lg border border-border bg-card">
          <div className="max-w-sm space-y-3">
            <DatePicker
              date={date}
              onSelect={setDate}
              placeholder="Pick a date"
            />
            {date && (
              <p className="text-xs text-muted-foreground">
                Selected date: <span className="font-semibold text-foreground">{date.toLocaleDateString()}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Installation & Import</h2>
        <CodeBlock code={importCode} language="typescript" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="tsx" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">API Reference</h2>
        <APIReferenceTable props={datePickerProps} />
      </section>
    </div>
  );
};
