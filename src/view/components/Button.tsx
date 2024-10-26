import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="h-[54px] bg-teal-900 hover:bg-teal-800 active:bg-teal-950 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-2xl transition-all"
    >
      {children}
    </button>
  );
}
