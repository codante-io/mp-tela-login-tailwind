import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dmSans = DM_Sans({ subsets: ['latin'], weight: '700' });

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <div className="flex bg-[#070709] xl:scale-150 max-w-[40rem] max-h-full shadow-md rounded-[1.5rem]">
          <aside className="flex flex-col p-4 w-[16.3rem] lg:w-[18rem]">
            <div className="flex flex-col items-start text-start">
              <div className="flex items-start text-start justify-start">
                <div className={`flex items-start text-start justify-start text-[2rem] xs:text-2xl text-gray-200 ${dmSans.className}`}>
                  Faça seu login
                </div>
                <div className="flex pl-1 pt-7">
                  <div className={`flex w-2 h-2 titleCircle rounded-full`} />
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col mt-6 space-y-5">
                <div className="flex flex-col items-start space-y-2 w-full">
                  <label form="email" className="pl-1 block text-sm font-normal text-gray-400">Email</label>
                  <input type="email" id="email" className="block h-7 w-full pl-2 bg-[#111112] rounded-lg text-gray-200 focus:border-[1px] border-transparent focus:border-[#C850C0] focus:outline-none focus:shadow-[0px_0px_0.6rem_0] focus:shadow-[#8D67DD]" required></input>
                </div>
                <div className="flex flex-col items-start space-y-2 w-full">
                  <label form="password" className="pl-1 block text-sm font-normal text-gray-400">Senha</label>
                  <input type="password" id="password" className="block h-7 w-full pl-2 bg-[#111112] rounded-lg text-gray-200 focus:border-[1px] border-transparent focus:border-[#C850C0] focus:outline-none focus:shadow-[0px_0px_0.6rem_0] focus:shadow-[#8D67DD]" required></input>
                </div>
              </form>
            </div>
            <div className="text-end m-3 pl-2">
              <a href="#" className="text-gray-400 underline text-xs">
                Esqueci minha senha
              </a>
            </div>
            <div className="text-center">
              <button className={`bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] text-white px-4 py-2 rounded-2xl w-full`}>
                Entrar
              </button>
            </div>
            <div className="text-center text-gray-400 underline text-xs pt-5">
              <a href="#">
                Ainda não tenho uma conta
              </a>
            </div>
          </aside>
          <div className="flex flex-1 relative">
            <Image
              className="object-cover rounded-l-none rounded-[1.5rem] w-full mix-blend-normal"
              src="https://www.figma.com/file/suvmja6210ggZOO6Cpehjl/image/31a10524d3e0aecc926f62732fb7f9a3bb2239ee"
              width={500}
              height={500}
              alt="codante"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r rounded-r-[1.5rem] from-[rgba(7,7,9,1)] via-[rgba(7,7,9,0.6)] to-[rgba(7,7,9,0.8)] mix-blend-normal"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t rounded-r-[1.5rem] from-[rgba(7,7,9,0.9)] via-[rgba(7,7,9,0)] to-[rgba(7,7,9,0)] mix-blend-normal"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-r-[1.5rem] from-[rgba(7,7,9,0.9)] via-[rgba(7,7,9,0)] to-[rgba(7,7,9,0)] mix-blend-normal"></div>
          </div>
        </div>
      </div>
    </main>
  )
}