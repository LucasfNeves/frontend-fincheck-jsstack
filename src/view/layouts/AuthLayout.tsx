// Layouts são componentes que envolvem as rotas, permitindo a adição de elementos comuns a todas as páginas, como cabeçalhos, rodapés, etc.
import { Outlet } from "react-router-dom";
import ilustration from "../../assets/images/ilustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <Logo className="w-[104.32px] text-gray-500 " />

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
        <img
          src={ilustration}
          className=" object-cover rounded-[32px] w-full h-full max-w-[656px] max-h-[960px] select-none"
          alt=""
        />

        <div className="max-w-[656px]  bg-white p-10 absolute rounded-b-[32px] bottom-8 flex flex-col gap-6 text-red-500">
          <Logo className="text-teal-900 w-[138.42px]" />
          <p className="text-gray-700 font-medium text-xl">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
