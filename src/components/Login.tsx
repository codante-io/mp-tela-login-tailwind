export default function Login() {
  return (
    <div className={`
      flex flex-col justify-center items-center p-8 space-y-8
      w-max h-max bg-black overflow-hidden rounded-3xl
    `}>
      <h1 className={`
          text-3xl font-black text-white
        `}>Faça seu login<span className={`
          text-6xl font-black text-purple-800
        `}>.</span></h1>
      <form className={`
          flex flex-col justify-center items-center
          w-max h-max bg-black rounded-2xl
        `}>
        <label
          htmlFor="email"
          className={`
              text-zinc-500 text-left
              flex items-start justify-start
              w-full -mb-6 mt-8
            `}
        >
          Email
        </label>
        <input
          type="text"
          className={`
              w-80 h-12 px-4 py-2
              mt-8 mb-2 rounded-lg
            bg-zinc-950 text-white
            `}
        />
        <label
          htmlFor="email"
          className={`
              text-zinc-500 text-left
              flex items-start justify-start
              w-full -mb-6 mt-2
            `}
        >
          Senha
        </label>
        <input
          type="password"
          className={`
              w-80 h-12 px-4 py-2
              mt-8 mb-2 rounded-lg
            bg-zinc-950 text-white
            `}
        />
        <p className={`
            flex items-end justify-end w-full
            mt-6 mb-6 underline
          `}>
          <a href="#" className={`
              text-zinc-500 text-right text-sm
            `}>
            Esqueci minha senha
          </a>
        </p>
        <button
          type="submit"
          className={`
              w-80 h-12 px-4 py-2
              mb-8 rounded-lg font-bold
            text-white focus:outline-none
              bg-gradient-to-tr from-purple-950 to-yellow-300
            `}
        >
          Entrar
        </button>
        <p className={`
            flex items-end justify-end w-full
            mt-2 mb-2 underline text-zinc-500 text-right text-sm
          `}>
          <a href='#'>Ainda não tem uma conta</a>
        </p>
      </form>
    </div>
  )
}
