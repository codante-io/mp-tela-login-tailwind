"use client";

import Link from "next/link";
import * as C from "@/components";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@/schemas/user";
import { IUserLoginRequest } from "@/types/user";
import { useUserContext } from "@/contexts/user";
import { ToastContainer } from "react-toast";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IUserLoginRequest>({
    resolver: zodResolver(userLoginSchema),
  });

  const { login } = useUserContext();

  const handleLogin = (data: IUserLoginRequest) => {
    login(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
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
          label="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <Link
          href="/recover"
          className="self-end text-[#9CA3AF] text-[8pt] underline pr-3"
        >
          Esqueci minha senha
        </Link>

        <C.Button type="submit">Entrar</C.Button>

        <Link href="/register" className="text-[#9CA3AF] text-[8pt] underline">
          Ainda não tenho uma conta
        </Link>
      </form>
      <ToastContainer delay={3000} />
    </>
  );
}
