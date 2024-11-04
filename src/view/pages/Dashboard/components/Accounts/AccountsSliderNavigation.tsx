import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { MutableRefObject } from "react";
import { Swiper as SwiperType } from "swiper/types";

interface AccountsSliderNavigationProps {
  swiperRef: MutableRefObject<SwiperType | null>;
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  swiperRef,
  isBeginning,
  isEnd,
}: AccountsSliderNavigationProps) {
  return (
    <div className="flex items-center ">
      <button
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-20"
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
        className="pl-2.5 pr-3.5 py-3 rounded-full  enabled:hover:bg-black/10 transition-colors disabled:opacity-20"
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
