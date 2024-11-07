import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/utils/cn";
import { useTransactionsController } from "./useTransactionsController";
import { Spinner } from "../../../../components/Spinner";
import emptyStateImage from "./../../../../../assets/images/empty-state.svg";
import { TransactionsTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersModal } from "./FiltersModal";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    trasactions,
    isLoading,
    handleCloseFilterModal,
    handleOpenFilterModal,
    isFilterModalOpen,
  } = useTransactionsController();

  const hasTransactions = trasactions.length > 0;
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <Spinner className="w-10 h-10" />
        </div>
      ) : (
        <>
          <FiltersModal open={isFilterModalOpen} onClose={handleCloseFilterModal} />
          <header>
            <div className="flex items-center justify-between w-full">
              <TransactionsTypeDropdown />

              <button onClick={handleOpenFilterModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />

                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        isActive={isActive}
                        month={month}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 flex flex-col space-y-2 md:overflow-y-auto">
            {hasTransactions && !isLoading && (
              <>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="expense" />

                    <div className="flex flex-col ">
                      <strong className="font-bold tracking-[-0.5px]">
                        Almoço
                      </strong>
                      <span className="text-sm text-gray-600">04/06/2024</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "text-red-800 tracking-[-0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    - {formatCurrency(123)}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="income" />

                    <div className="flex flex-col ">
                      <strong className="font-bold tracking-[-0.5px]">
                        Almoço
                      </strong>
                      <span className="text-sm text-gray-600">04/06/2024</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "text-green-800 tracking-[-0.5px] font-medium",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(123)}
                  </span>
                </div>
              </>
            )}

            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                {isLoading && <Spinner className="w-10 h-10" />}
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={emptyStateImage} alt="Empty State" />

                <p className="text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
