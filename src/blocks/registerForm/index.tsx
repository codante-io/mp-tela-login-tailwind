"use client";

import Link from "next/link";
import * as C from "@/components";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userCreateSchema } from "@/schemas/user";
import { IUserCreateRequest } from "@/types/user";
import { ToastContainer } from "react-toast";
import { useUserContext } from "@/contexts/user";

export default function RegisterForm() {
  const { register: handleUserRegister } = useUserContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IUserCreateRequest>({
    resolver: zodResolver(userCreateSchema),
  });

  const handleRegister = (data: IUserCreateRequest) => {
    handleUserRegister(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col items-center justify-center w-4/5 gap-4"
      >
        <C.Input
          icon={FiUser}
          label="Nome"
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
          error={errors.name?.message}
        />
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
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <C.Input
          icon={FiLock}
          label="Confirmação"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <C.Button type="submit">Cadastrar</C.Button>

        <Link href="/" className="text-[#9CA3AF] text-[8pt] underline">
          Já possuo uma conta
        </Link>
      </form>
      <ToastContainer delay={3000} />
    </>
  );
}
