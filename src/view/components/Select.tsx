import * as RdxSelect from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";
import { useState } from "react";

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({
  className,
  error,
  placeholder,
  options,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("");

  function handleSelected(value: string) {
    setSelectedValue(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            "absolute top-1/2 left-4 -translate-y-1/2 text-gray-700 pointer-events-none",
            selectedValue &&
              "text-xs top-2 left-[13px] transition-all translate-y-0"
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root onValueChange={handleSelected}>
          <RdxSelect.Trigger
            className={cn(
              "relative w-full h-[52px] rounded-lg px-[12px] py-[2px] border border-gray-500  text-left outline-none pt-4",
              error ? "border-red-900 focus:border-red-900" : "border-gray-500",
              className
            )}
          >
            <RdxSelect.Value />
            <RdxSelect.Icon className="absolute right-3 top-1/2  -translate-y-1/2 ">
              <ChevronDownIcon className="w-6 h-6 text-gray-800" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>
          <RdxSelect.Portal>
            <RdxSelect.Content className="overflow-hidden bg-white rounded-2xl border border-gray-100  z-[99] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
              <RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>
              <RdxSelect.Viewport className="p-2 ">
                {options.map((option) => (
                  <RdxSelect.Item
                    key={option.value}
                    value={option.value}
                    className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-100 rounded-lg transition-colors"
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>
              <RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800 ">
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && (
        <span className=" text-red-900 text-xs flex gap-2 items-center justify-start mt-2">
          <CrossCircledIcon className="inline w-4 h-4" />
          <p>{error}</p>
        </span>
      )}
    </div>
  );
}
