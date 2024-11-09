import React, { createContext, useCallback, useState } from "react";
import { set } from "react-hook-form";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toogleValueVisibility: () => void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  isNewTransactionModalOpen: boolean;
  openNewTransactionModal: (type: "INCOME" | "EXPENSE") => void;
  closeNewTransactionModal: () => void;
  newTrasactionType: "INCOME" | "EXPENSE" | null;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const [newTrasactionType, setNewTrasactionType] = useState<
    "INCOME" | "EXPENSE" | null
  >(null);

  const toogleValueVisibility = useCallback(() => {
    // usando o operador de negação para inverter o estado atual
    setAreValuesVisible((state) => !state);
  }, []);

  const openNewAccountModal = useCallback(() => {
    // usando o operador de negação para inverter o estado atual
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    // usando o operador de negação para inverter o estado atual
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: "INCOME" | "EXPENSE") => {
    setNewTrasactionType(type);

    // usando o operador de negação para inverter o estado atual
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    // usando o operador de negação para inverter o estado atual
    setNewTrasactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toogleValueVisibility,
        closeNewAccountModal,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewTransactionModal,
        isNewTransactionModalOpen,
        openNewTransactionModal,
        newTrasactionType,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
