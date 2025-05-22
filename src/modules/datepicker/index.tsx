import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button/Button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClosePopover = () => {
      if (open) {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleClosePopover);
    return () => {
      window.removeEventListener("scroll", handleClosePopover);
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (date) {
      setOpen(false);
    }
  }, [date, setOpen]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"light"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "yyyy.MM.dd") : <span>yyyy.mm.dd</span>}
          <CalendarIcon className="ml-auto h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          endMonth={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
