import { Transition } from "@headlessui/react";
import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

interface LoucheScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LoucheScreenProps) {
  console.log(isLoading)
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-teal-900 fixed top-0 left-0 w-full gap-4 h-full flex items-center flex-col justify-center">
        <Logo width={173.53} className="text-white" />
        <Spinner className="text-teal-900 fill-white" />
      </div>
    </Transition>
  );
}
