"use client";
import { useEffect } from "react";
import * as T from "./types";
import { useUserContext } from "@/contexts/user";
import { useRouter } from "next/navigation";
import * as C from "@/components";
import { ToastContainer } from "react-toast";

export default function WelcomePage({
  params: { userName },
}: T.IWelcomePageProps) {
  console.log(userName);
  const { logout, loggedUser } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!loggedUser) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden gap-4 py-[3rem] px-4 sm:px-20">
        <h1 className="text-[25pt] max-sm:text-[20pt] text-[#FFCC70] text-center font-bold">
          Bem-vindo(a), {userName}!
        </h1>
        <p className="text-center text-white text-[14pt] max-sm:text-[11pt]">
          Você está contemplando uma das primeiras aplicações que eu fiz usando
          Next.Js e Tailwind.CSS
        </p>
        <p className="text-center text-white text-[14pt] mb-4 max-sm:text-[11pt]">
          Ainda há muito o que aprender mas o seu feedback é muito importante
          para mim por isso quero te pedir que possa visitar o meu{" "}
          <a href="https://www.linkedin.com/in/th-matheus/">Linkedin</a> e me dê
          um feedback do que achou desta aplicação e sugestões para este meu
          aprendizado e caminhada.
        </p>
        <div className="w-[100%] h-[50%] max-sm:hidden flex flex-col items-center justify-center overflow-hidden">
          <img
            src="https://i.ibb.co/7vvFXVs/Team-pana.png"
            alt="image"
            className="h-[170%]"
          />
        </div>
        <div className="w-[15rem]">
          <C.Button onClick={logout}>Logout</C.Button>
        </div>
      </div>
      <ToastContainer delay={3000} />
    </>
  );
}
