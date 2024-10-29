import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "h-[54px] bg-teal-900 hover:bg-teal-800 active:bg-teal-950 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-2xl transition-all",
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner className="w-6 h-6" /> : children}
    </button>
  );
}
