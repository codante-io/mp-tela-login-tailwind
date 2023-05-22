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
import { useUserContext } from "@/contexts/user";

export default function RecoverForm() {
  const { recover } = useUserContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IUserRecoverRequest>({
    resolver: zodResolver(userRecoverSchema),
  });

  const handleRegister = (data: IUserRecoverRequest) => {
    recover(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-4/5 flex flex-col justify-center items-center gap-4"
      >
        <C.Input
          icon={FiUser}
          label="E-mail"
          type="text"
          placeholder="Digite o seu e-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <C.Input
          icon={FiLock}
          label="Nova Senha"
          type="password"
          placeholder="Digite sua nova senha"
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <C.Input
          icon={FiLock}
          label="Confirmação"
          type="password"
          placeholder="Confirme sua nova senha"
          {...register("confirmNewPassword")}
          error={errors.confirmNewPassword?.message}
        />

        <C.Button type="submit">Redefinir</C.Button>

        <Link href="/" className="text-[#9CA3AF] text-[8pt] underline">
          Voltar para login
        </Link>
      </form>
      <ToastContainer delay={3000} />
    </>
  );
}
