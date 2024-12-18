import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";
import { UserFilterModal } from "./userFilterModal";
import { cn } from "../../../../../app/utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const mockedAccounts = [
  {
    id: "1",
    name: "Nubank",
  },
  {
    id: "2",
    name: "XP Investimentos",
  },
  {
    id: "3",
    name: "Dinheiro",
  },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const { handleSelectBank, selectedBankId, selectedYear, handleChangeYear } = UserFilterModal();

  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <div>
        <span className="text-lg tracking-[1px] font-bold text-gray-800">
          Conta
        </span>

        <div className="space-y-2 mt-2">
          {mockedAccounts.map((account) => {
            return (
              <button
                onClick={() => handleSelectBank(account.id)}
                key={account.id}
                className={cn(
                  "p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors",
                  selectedBankId === account.id && "!bg-gray-200"
                )}
              >
                {account.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <span className="text-lg tracking-[1px] font-bold text-gray-800">
          Ano
        </span>

        <div className="mt-2 w-52 text-gray-800 flex items-center justify-between">
          <button onClick={() => handleChangeYear(-1)} className="w-12 h-12 flex items-center justify-center">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
          </div>

          <button  onClick={() => handleChangeYear(1)} className="w-12 h-12 flex items-center justify-center">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Button className="w-full mt-10">Aplicar Filtros</Button>
    </Modal>
  );
}
