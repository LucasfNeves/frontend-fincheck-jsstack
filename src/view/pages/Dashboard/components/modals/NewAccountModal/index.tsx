import { Button } from "../../../../../components/Button";
import { ColorsDropdownInput } from "../../../../../components/ColorsDropdown";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form>
        <div className="flex items-center flex-col gap-2 ">
          <span className=" text-gray-600 tracking-[-0.5px] text-base font-medium w-full ">
            Saldo
          </span>
          <div className="flex items-center gap-2 ">
            <span className=" text-gray-600 tracking-[-0.5px] text-lg font-medium">
              R$
            </span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />

          <Select
            placeholder="Tipo de conta"
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

          <ColorsDropdownInput />
        </div>

        <Button className="mt-6 w-full" type="submit">
          Cadastrar Conta
        </Button>
      </form>
    </Modal>
  );
}
