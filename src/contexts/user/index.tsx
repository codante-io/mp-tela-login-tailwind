import { createContext, useContext, useState } from "react";
import * as T from "./types";
import { IUser, IUserLoginRequest, IUserRecoverRequest } from "@/types/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toast";

const userContext = createContext<T.IUserContext>({} as T.IUserContext);

export const useUserContext = () => {
  const context = useContext(userContext);

  return context;
};

export default function UserProvider({ children }: T.IUserProvider) {
  const [database, setDatabase] = useState<IUser[]>([]);
  const router = useRouter();

  const login = (data: IUserLoginRequest) => {
    try {
      const userExists = database.find((user) => user.email === data.email);

      if (!userExists) {
        throw new Error("Usuário ou senha errados!");
      }

      const passwordsMatch = userExists.password === data.password;

      if (!passwordsMatch) {
        throw new Error("Usuário ou senha errados!");
      }

      toast.success("Usuário logado com sucesso!");

      setTimeout(() => {
        toast.success("Você será redirecionado para a tela de boas vindas.");
      }, 2000);

      setTimeout(() => {
        router.push(`/welcome/${userExists.name + "$" + userExists.id}`);
      }, 3500);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const register = () => {};

  const recover = (data: IUserRecoverRequest) => {
    try {
      const userExists = database.find((user) => user.email === data.email);

      if (!userExists) {
        throw new Error("Usuário não encontrado");
      }

      const newDatabase = database.map((user) => {
        if (user.email === data.email) {
          user.password = data.newPassword;
          return user;
        } else {
          return user;
        }
      });

      setDatabase(newDatabase);

      toast.success("Usuário atualizado com sucesso!");

      setTimeout(() => {
        toast.success("Você será redirecionado para a tela de login");
      }, 2000);

      setTimeout(() => {
        router.push("/");
      }, 3500);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <userContext.Provider value={{ login, register, recover }}>
      {children}
    </userContext.Provider>
  );
}
