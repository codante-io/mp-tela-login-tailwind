export default function Login() {
  return (
    <div className="bg-login-bg flex w-full md:w-1/2 lg:w-1/4 lg:h-3/6">

      <section>
        <h1 className="text-4xl text-gray-200 m-10">
          Faça seu login
          <span className="bg-gradient-to-r from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 text-transparent bg-clip-text">.</span>
        </h1>
        <form className="flex flex-col gap-1 m-10">
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
            <input type="text" name="" id="email" className="bg-input rounded-md text-gray-400 w-2/2 h-10  mb-5" />
          <label htmlFor="password" className="text-gray-400 text-sm">
            Senha
          </label> 
            <input type="text"  id="password" className="bg-input rounded-md text-gray-400 w-2/2 h-10 mb-5"/>
          <p className="text-gray-400 underline flex justify-end text-sm mb-5">Esqueci minha senha</p>
          <button type="button" className="bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2
          rounded-md
          text-white
          w-2/2
          h-10
          mb-5
          ">
            Entrar
          </button>
          <p className="text-gray-400 underline flex justify-center text-sm">Ainda não tenho uma conta</p>
        </form>
      </section>
      <img className="w-1/2 rounded-md w-full" src="/src/assets/image1.png" alt="oi" />
    </div>
  )
}
