import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
    <div className=" h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
      <header className="h-12 flex justify-between items-center">
        <Logo width={106} className="text-teal-900" />
        <UserMenu />
      </header>

      <main className=" flex flex-col flex-1 md:grid md:grid-cols-2 gap-4">
        <Accounts />
        <Transactions />
      </main>
    </div>
  );
}
