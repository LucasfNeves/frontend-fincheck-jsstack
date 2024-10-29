import React, { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/userService";
import toast from "react-hot-toast";
import { LaunchScreen } from "../../view/components/LaunchScreen.tsx";

interface AuthContextValue {
  signedIn: boolean;
  signin: (acessToken: string) => void;
  signout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAcessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return Boolean(storedAcessToken);
  });

  // Usamos o useQuery para verificar se o token de autenticação é válido, o useQuery é uma função do react-query que faz uma requisição e armazena o resultado em cache, com isso podemos verificar se o token é válido e se o usuário está autenticado.
  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((acessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, acessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  // Verificamos se o token de autenticação é inválido, caso seja, exibimos uma mensagem de erro e deslogamos o usuário.
  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou, faça login novamente");
      setSignedIn(false);
      signout();
    }
  }, [isError, signout, setSignedIn]);

  return (
    <AuthContext.Provider
      value={{
        signin,

        /* Usamos o IsSucess para verificar se o usuário está autenticado, caso esteja, passamos o valor de signedIn como true, caso contrário, passamos false, assim o usuário só terá acesso as rotas protegidas se estiver autenticado. */
        signedIn: isSuccess && signedIn,
        signout,
      }}
    >
       <LaunchScreen isLoading={isFetching}/>
       {!isFetching && children}
    </AuthContext.Provider>
  );
}
