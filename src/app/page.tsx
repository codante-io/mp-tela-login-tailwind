import * as B from "@/blocks";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-4/6 w-4/6 bor bg-black rounded-[1rem] overflow-hidden">
      <div className="w-2/5 h-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-white text-[20pt] font-bold">
          Faça seu login{" "}
          <span
            style={{
              background:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%), #D9D9D9",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            .
          </span>
        </h1>

        <B.LoginForm />
      </div>

      <div className="w-3/5 h-full flex flex-col items-center justify-center"></div>
    </div>
  );
}
