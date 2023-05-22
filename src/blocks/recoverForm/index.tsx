"use client";

import Link from "next/link";
import * as C from "@/components";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRecoverSchema } from "@/schemas/user";
import { IUser, IUserRecoverRequest } from "@/types/user";
import { useRouter } from "next/navigation";
import { database } from "@/database";
import { toast, ToastContainer } from "react-toast";

export default function RegisterForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IUserRecoverRequest>({
    resolver: zodResolver(userRecoverSchema),
  });

  const handleRegister = (data: IUserRecoverRequest) => {
    try {
      const userExists = database.find((user) => user.email === data.email);

      if (!userExists) {
        throw new Error("Usuário não encontrado");
      }

      database.map(
        (user) =>
          user.email === data.email && (user.password = data.newPassword)
      );

      toast.success("Usuário atualizado com sucesso!");

      setTimeout(() => {
        toast.success("Você será redirecionado para a tela de login");
      }, 2000);

      setTimeout(() => {
        router.push("/");
      }, 3500);

      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-4/5 flex flex-col justify-center items-center gap-4"
      >
        <C.Input
          icon={FiUser}
          label="Nome"
          type="text"
          placeholder="Digite o seu nome"
          {...register("email")}
          error={errors.email?.message}
        />
        <C.Input
          icon={FiLock}
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <C.Input
          icon={FiLock}
          label="Confirmação"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmNewPassword")}
          error={errors.confirmNewPassword?.message}
        />

        <C.Button type="submit">Redefinir</C.Button>
      </form>
      <ToastContainer delay={3000} />
    </>
  );
}
