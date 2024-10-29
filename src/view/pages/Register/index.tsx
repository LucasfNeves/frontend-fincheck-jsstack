import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { handleFormSubmit, register, errors, isPending } = useRegisterController();
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

      <form onSubmit={handleFormSubmit} className="flex flex-col w-full mt-12 space-y-12">
        <div className="flex flex-col gap-4">
          <Input
            error={errors.name?.message}
            type="text"
            placeholder="Nome"
            {...register("name")}
          />
          <Input
            error={errors.email?.message}
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <Input
            error={errors.password?.message}
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
        </div>

        <Button isLoading={isPending}>Criar conta</Button>
      </form>
    </div>
  );
}
