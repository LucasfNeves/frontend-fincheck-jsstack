import React, { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toogleValueVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true)

  const toogleValueVisibility = useCallback(() => {

    // usando o operador de negação para inverter o estado atual
    setAreValuesVisible((state) => !state)
  }, [])
  return (
    <DashboardContext.Provider value={{ areValuesVisible, toogleValueVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
}
