import Banner from '../assets/banner.png'

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r font-body text-gray-400">
      <div className="flex w-[1106px] justify-between overflow-hidden rounded-[34px] bg-black shadow-form">
        <section className="p-14">
          <h1 className="relative inline-block text-5xl font-bold leading-[65px] text-gray-200 after:absolute after:-right-4 after:bottom-4 after:h-3 after:w-3 after:rounded-full after:bg-eclipse-43">
            Faça seu login
          </h1>

          <form className="mt-14 flex flex-col">
            <label className="text-sm text-gray-400">
              Email
              <div className="mt-2 w-fit rounded-xl p-[1px] transition-all focus-within:bg-eclipse-10 focus-within:shadow-input">
                <input
                  type="text"
                  className="w-[355px] rounded-xl bg-neutral-900 p-3 text-base focus-within:outline-0"
                />
              </div>
            </label>

            <label className="mt-6 text-sm text-gray-400">
              Senha
              <div className="mt-2 w-fit rounded-xl p-[1px] transition-all focus-within:bg-eclipse-10 focus-within:shadow-input">
                <input
                  type="text"
                  className="w-[355px] rounded-xl bg-neutral-900 p-3 text-base focus-within:outline-0"
                />
              </div>
            </label>

            <a
              href="#"
              className="mt-5 self-end text-sm underline hover:text-gray-300"
            >
              Esqueci minha senha
            </a>

            <button className="mt-9 w-[355px] rounded-xl bg-eclipse-10 p-2 text-2xl font-bold text-white transition-opacity hover:opacity-90">
              Entrar
            </button>

            <a
              href="#"
              className="mt-9 self-center text-sm underline hover:text-gray-300"
            >
              Ainda não tenho conta
            </a>
          </form>
        </section>

        <section className="relative after:absolute after:top-0 after:z-10 after:h-full after:w-full after:bg-black/70">
          <img src={Banner} alt="Banner com montanhas e céu estrelado" />
        </section>
      </div>
    </div>
  )
}
