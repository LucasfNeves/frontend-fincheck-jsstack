import { useDashboard } from "../../../../../../app/hooks/useDashboardContext";

export function useNewTransactionModalController() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTrasactionType } = useDashboard();

  return {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTrasactionType,
  };
}
