import { CrossCircledIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  placeholder: string;
  id?: string;
  className?: string;
}

// Como nosso input é um componente controlado, precisamos passar o ref para o input
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }: InputProps, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative flex flex-col gap-2">
        <input
          name={name}
          id={inputId}
          ref={ref}
          placeholder=" "
          className={cn(
            "relative w-full h-[52px] rounded-lg px-[12px] py-[2px] border pt-4 placeholder-shown:pt-0 peer",
            error ? "border-red-900 focus:border-red-900" : "border-gray-500",
            className
          )}
          {...props}
        />

        <label
          htmlFor={inputId}
          //className="absolute left-4 top-4 text-gray-700 pointer-events-none"
          className="absolute left-4 top-2 text-gray-700 text-xs pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <span className=" text-red-900 text-xs flex gap-2 items-center justify-start">
            <CrossCircledIcon className="inline w-4 h-4" />
            <p>{error}</p>
          </span>
        )}
      </div>
    );
  }
);
