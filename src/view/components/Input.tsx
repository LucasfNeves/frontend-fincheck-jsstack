import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        name={name}
        id={inputId}
        {...props}
        placeholder=" "
        className="relative w-full h-[52px] rounded-lg px-[12px] py-[2px] border border-gray-500 pt-4 placeholder-shown:pt-0 peer"
      />

      <label
        htmlFor={inputId}
        //className="absolute left-4 top-4 text-gray-700 pointer-events-none"
        className="absolute left-4 top-2 text-gray-700 text-xs pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}
