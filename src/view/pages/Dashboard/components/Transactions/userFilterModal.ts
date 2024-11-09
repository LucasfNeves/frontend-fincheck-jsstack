import { useState } from "react";

export function UserFilterModal() {
  const [selectedBankId, setSelectedBankId] = useState<null | string>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBank(bankAccountId: string) {
    setSelectedBankId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId
    );
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    handleSelectBank,
    selectedBankId,
    selectedYear,
    handleChangeYear,
  };
}
