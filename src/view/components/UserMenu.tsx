import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
  const {signout} = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
            LC
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content side="bottom" className="w-32">
        <DropdownMenu.Item
          className="flex items-certer justify-between  font-medium"
          onSelect={signout}
        >
          Sair
          <ExitIcon className="w-4 h-4 text-red-800" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
