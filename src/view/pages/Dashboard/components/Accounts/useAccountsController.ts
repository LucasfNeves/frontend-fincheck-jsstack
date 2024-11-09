import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../../../../../app/hooks/useDashboardContext";
import { useRef } from "react";
import { Swiper as SwiperTypes } from "swiper/types";

export function useAccountController() {

  const windowWidth = useWindowWidth()

  const {areValuesVisible, toogleValueVisibility, openNewAccountModal} = useDashboard()

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const swiperRef = useRef<SwiperTypes | null>(null);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toogleValueVisibility,
    swiperRef,
    isLoading: false,
    accounts:[],
    openNewAccountModal
  }
}  