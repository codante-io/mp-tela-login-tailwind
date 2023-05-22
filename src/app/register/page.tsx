import * as B from "@/blocks";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-[75%] w-3/5 max-md:w-[85%]  bg-[#070708] rounded-[2rem] overflow-hidden border-animation">
      <div className="w-[45%] max-md:w-full max-lg:w-[55%] h-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-[20pt] font-bold">
          Cadastre-se Já{" "}
          <span
            className="text-[20pt]"
            style={{
              background:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%), #D9D9D9",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            !
          </span>
        </h1>

        <B.RegisterForm />
      </div>

      <div className="w-[55%] h-full max-md:hidden max-lg:w-[45%] flex flex-col items-center justify-center background opacity-40"></div>
    </div>
  );
}
