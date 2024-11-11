
import { Button } from "../../../../../components/Button";
import { DatePickerInput } from "../../../../../components/DatePickerInput";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTrasactionType,
  } = useNewTransactionModalController();

  const isExpense = newTrasactionType === "EXPENSE";
  const isIncome = newTrasactionType === "INCOME";

  return (
    <Modal
      title={isIncome ? "Nova Receita" : "Nova Despesa"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div className="flex items-center flex-col gap-2 ">
          <span className=" text-gray-600 tracking-[-0.5px] text-base font-medium w-full ">
            Valor {isExpense ? "da despesa" : "da receita"}
          </span>
          <div className="flex items-center gap-2 ">
            <span className=" text-gray-600 tracking-[-0.5px] text-lg font-medium">
              R$
            </span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}
          />

          <Select
            placeholder="Categoria"
            options={[
              {
                label: "Conta Corrente",
                value: "CHECKING",
              },
              {
                label: "Investimentos",
                value: "INVESTMENT",
              },
              {
                label: "Dinheiro Físico",
                value: "CASH",
              },
            ]}
          />

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber em'}
            options={[
              {
                label: "Conta Corrente",
                value: "CHECKING",
              },
              {
                label: "Investimentos",
                value: "INVESTMENT",
              },
              {
                label: "Dinheiro Físico",
                value: "CASH",
              },
            ]}
          />

            <DatePickerInput />
        </div>

        <Button className="mt-6 w-full" type="submit">
          Adicionar {isExpense ? "Despesa" : "Receita"}
        </Button>
      </form>
    </Modal>
  );
}
