import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { formatDate } from "../../app/utils/formatDate";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface DatePickerInputInputProps {
  className?: string;
  error?: string;
}

export function DatePickerInput({
  className,
  error,
}: DatePickerInputInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger >
          <button
            type="button"
            className={cn(
              "relative w-full h-[52px] rounded-lg px-[12px] py-[2px] border border-gray-500 pt-4 text-left outline-none text-gray-700",
              error ? "border-red-900 focus:border-red-900" : "border-gray-500",
              className
            )}
          >
            <span className="absolute text-gray-700 text-xs left-[13px] top-2 pointer-events-none">
              Data
            </span>

            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>

            <Popover.Content side="bottom">
              <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)}/>
            </Popover.Content>

      </Popover.Root>

      {error && (
        <span className=" text-red-900 text-xs flex gap-2 items-center justify-start mt-2">
          <CrossCircledIcon className="inline w-4 h-4" />
          <p>{error}</p>
        </span>
      )}
    </div>
  );
}
