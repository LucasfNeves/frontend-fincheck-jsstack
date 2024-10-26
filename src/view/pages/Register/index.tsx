import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
  return (
    <div>
      <header className="flex flex-col justify-center items-center gap-1 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">Crie uma conta</h1>
        <span className="flex gap-2 text-base">
          <p className="text-gray-700 tracking-[-0.5px]">
            Já possui uma conta?
          </p>{" "}
          <Link
            to={"/login"}
            className="text-teal-900 font-medium tracking-[-0.5px]"
          >
            Faça login
          </Link>
        </span>
      </header>

      <form className="flex flex-col w-full mt-12 space-y-12">
        <div className="flex flex-col gap-4">
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
        </div>

        <Button>Criar conta</Button>
      </form>
    </div>
  );
}
