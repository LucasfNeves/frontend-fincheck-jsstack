import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService/index.ts";
import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../../../app/services/authService/signup.ts";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth.ts";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signup"],

    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const {signin} = useAuth()

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken)
    } catch (error) {
      console.log(error);
      toast.error('Deu ruim mané!')
    }
  });

  return { handleFormSubmit, register, errors, isPending };
}
