import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleFormSubmit, register, errors, isPending } = useLoginController();

  return (
    <div>
      <header className="flex flex-col justify-center items-center gap-1 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px]">
          Entre em sua conta
        </h1>
        <span className="flex gap-2 text-base">
          <p className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</p>{" "}
          <Link
            to={"/register"}
            className="text-teal-900 font-medium tracking-[-0.5px]"
          >
            Crie uma conta
          </Link>
        </span>
      </header>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col w-full mt-12 space-y-12"
      >
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="E-mail"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="Senha"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>

        <Button isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
