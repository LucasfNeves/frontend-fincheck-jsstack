import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../app/utils/cn";
import { Cross1Icon } from "@radix-ui/react-icons";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
  onClose(): void;
}

export function Modal({
  open,
  title,
  rightAction,
  onClose,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
            "data-[state=open]:animate-overlay-show"
          )}
        >
          <Dialog.Content
            className={cn(
              "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-10 p-6 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] ",
              "data-[state=open]:animate-content-show outline-none"
            )}
          >
            <header className="h-12 flex items-center justify-between text-gray-800">
              <button onClick={onClose} className="h-12 w-12 flex items-center justify-center outline-none">
                <Cross1Icon className="w-6 h-6" />
              </button>
              <span className="flex-1 text-center tracking-[-1px] font-bold text-lg">
                {title}
              </span>
              <div className="w-12 h-12 flex items-center justify-center">
                {rightAction}
              </div>
            </header>
            <div>{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
