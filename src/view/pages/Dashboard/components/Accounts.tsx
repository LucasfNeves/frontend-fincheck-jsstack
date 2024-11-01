import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { useRef } from "react";
import { Swiper as SwiperTypes} from "swiper/types";


export function Accounts() {
  const swiperRef = useRef<SwiperTypes | null>(null);

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div className="flex flex-col">
        <span className="text-white tracking-[-0.5px]">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 100,00
          </strong>

          <button className=" w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end gap-4">
        <div className=" flex items-center justify-between">
          <strong className="text-white tracking-[-1px] text-lg">
            Minhas contas
          </strong>

          <AccountsSliderNavigation swiperRef={swiperRef}/>
      </div>

          

        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Associa a instância do Swiper à referência
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
      </div>
    </div>
  );
}
