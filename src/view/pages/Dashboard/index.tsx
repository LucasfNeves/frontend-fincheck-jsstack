import { DashboardProvider } from "../../../app/context/DashboardContext";
import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4 ">
        <header className="h-12 flex justify-between items-center">
          <Logo width={106} className="text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex-1 md:grid md:grid-cols-2 flex flex-col gap-4 h-full">
          <div className="h-full">
            <Accounts />
          </div>

          <div className=" h-full max-h-full md:overflow-y-auto">
            <Transactions />
          </div>
        </main>

        <Fab />
      </div>
    </DashboardProvider>
  );
}
