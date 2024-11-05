import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";

import { useAccountController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    swiperRef,
    areValuesVisible,
    toogleValueVisibility,
    isLoading,
    accounts,
  } = useAccountController();
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isLoading && (
        <div className="flex w-full h-full items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex flex-col">
            <span className="text-white tracking-[-0.5px]">Saldo total</span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(3000)}
              </strong>

              <button
                onClick={toogleValueVisibility}
                className=" w-8 h-8 flex items-center justify-center"
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end gap-4 mt-10 md:mt-0">
            {accounts.length === 0 && (
              <>
                <strong className="text-white tracking-[-1px] text-lg">
                  Minhas contas
                </strong>

                <button className="mt-4  h-52 border-2 border-dashed rounded-2xl border-teal-600 flex flex-col items-center justify-center text-white gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-dashed flex items-center justify-center border-white">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="font-medium tracking-[0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <>
                <div className=" flex items-center justify-between">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>

                  <AccountsSliderNavigation
                    swiperRef={swiperRef}
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <div>
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper; // Associa a instância do Swiper à referência
                    }}
                    onSlideChange={(swiper) => {
                      setSliderState({
                        isBeginning: swiper.isBeginning,
                        isEnd: swiper.isEnd,
                      });
                    }}
                  >
                    <SwiperSlide>
                      <AccountCard
                        type="CHECKING"
                        balance={125.36}
                        color="#7950f2"
                        name="Nubank"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        type="INVESTMENT"
                        balance={3000.18}
                        color="#333"
                        name="XP"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        type="CASH"
                        balance={100}
                        color="#0f0"
                        name="Carteira"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
