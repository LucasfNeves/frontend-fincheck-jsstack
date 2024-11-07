import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Expense } from "../../../../components/icons/categories/expense/Expense";
import { Income } from "../../../../components/icons/categories/income/Income";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className=" bg-teal-900 p-4 rounded-full shadow-lg">
            <PlusIcon className="w-6 h-6 text-white " />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top" className="z-50">
          <DropdownMenu.Item className="gap-2">
            <Expense />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <Income />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
