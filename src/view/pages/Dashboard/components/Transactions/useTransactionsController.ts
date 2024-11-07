import { useState } from "react";
import { useDashboard } from "../../../../../app/hooks/useDashboardContext";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  function handleOpenFilterModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    trasactions: [{}],
    handleCloseFilterModal,
    handleOpenFilterModal,
    isFilterModalOpen,
  };
}
