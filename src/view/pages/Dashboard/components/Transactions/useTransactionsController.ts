import { useDashboard } from "../../../../../app/hooks/useDashboardContext";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    trasactions:[{}]
  };
}