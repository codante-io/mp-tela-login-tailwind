export default function Login() {
  return (
    <div className="bg-login-bg flex w-full md:w-1/2 lg:w-1/4">

      <section>
        <h1 className="text-4xl text-gray-200 m-10">
          Faça seu login
          <span className="bg-gradient-to-r from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 text-transparent bg-clip-text">.</span>
        </h1>
        <form className="flex flex-col gap-4 m-10">
          <label htmlFor="email" className="text-gray-400">
            Email
          </label>
            <input type="text" name="" id="email" className="bg-input rounded-md text-gray-400" />
          <label htmlFor="password" className="text-gray-400">
            Senha
          </label> 
            <input type="text"  id="password" className="bg-input rounded-md text-gray-400"/>
          <p className="text-gray-400 underline flex justify-end">Esqueci minha senha</p>
          <button type="button" className="bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2
          rounded-md
          text-white
          ">
            Entrar
          </button>
          <p className="text-gray-400 underline flex justify-center">Ainda não tenho uma conta</p>
        </form>
      </section>
      <img className="w-1/2 rounded-md" src="/src/assets/image1.png" alt="oi" />
    </div>
  )
}
