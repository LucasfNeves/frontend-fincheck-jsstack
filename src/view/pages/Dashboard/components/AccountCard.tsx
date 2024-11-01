import { formatCurrency } from "../../../../app/utils/formatCurrency.ts";
import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: "CASH" | "CHECKING" | "INVESTMENT";
}

export function AccountCard({ balance, color, name, type }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between items-start border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div className="flex flex-col gap-4">
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium traking-[-0.5px]">
          {name}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span>{formatCurrency(balance)}</span>
        <small className="text-gray-600 text-sm font-medium traking-[-0.5px]">
          Saldo atual
        </small>
      </div>
    </div>
  );
}
