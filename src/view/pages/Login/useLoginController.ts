import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SigninParams } from "../../../app/services/authService/signin";

const schema = z.object({
  email: z
    .string()
    .email("Informe um -email válido")
    .min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signup"],

    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      console.log(accessToken);
    } catch (error) {
      console.log(error);
      toast.error("Credenciais inválidas");
    }
  });

  return { handleFormSubmit, register, errors, isPending };
}
