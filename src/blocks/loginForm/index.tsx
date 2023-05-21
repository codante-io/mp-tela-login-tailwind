"use client";

import Link from "next/link";
import * as C from "@/components";
import { FiUser, FiLock } from "react-icons/fi";

export default function LoginForm() {
  return (
    <form className="w-4/5 flex flex-col justify-center items-center gap-4">
      <C.Input
        icon={FiUser}
        label="E-mail"
        type="text"
        placeholder="Digite o seu e-mail"
      />
      <C.Input
        icon={FiLock}
        label="password"
        type="password"
        placeholder="Digite sua senha"
      />

      <Link
        href="recover"
        className="self-end text-[#9CA3AF] text-[8pt] underline pr-3"
      >
        Esqueci minha senha
      </Link>

      <C.Button>Entrar</C.Button>

      <Link href="/register" className="text-[#9CA3AF] text-[8pt] underline">
        Ainda não tenho uma conta
      </Link>
    </form>
  );
}
