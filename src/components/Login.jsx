import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-login-bg flex lg:w-1/4 lg:flex-row md:w-1/2 sm:flex-col">

      <section className="w-full">
        <h1 className="text-4xl text-gray-200 m-10">
          Faça seu login
          <span className="bg-gradient-to-r from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 text-transparent bg-clip-text">.</span>
        </h1>
        <form className="flex flex-col gap-1 m-10" onSubmit={ (e) => {
           e.preventDefault()
           navigate('/welcome')
          }
          }>
          <label htmlFor="email" className="text-gray-400 text-sm">
            Email
          </label>
          <div className="group  h-12">
            <div className=" transition ease-in opacity-0 group-focus-within:opacity-100 bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 h-10 blur-md rounded-lg">
            </div>
              <div className="relative -top-[2.5rem] p-1 bg-none focus-within:bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 rounded-lg ">
                <input type="text" name="email" id="email" required className="bg-input rounded-md text-gray-400 h-10 p-1 " />
              </div>
          </div>

          <label htmlFor="password" className="text-gray-400 text-sm">
            Senha
          </label> 
          <div className="group h-12">
            <div className=" transition ease-in opacity-0 group-focus-within:opacity-100 bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 h-10 blur-md rounded-lg">
            </div>
              <div className="relative -top-[2.5rem] p-1 bg-none focus-within:bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2 rounded-lg">
                <input type="password" name="" id="password" required className="bg-input rounded-md text-gray-400 h-10 p-1" />
              </div>
          </div>
          <p className="text-gray-400 underline flex justify-end text-sm mb-5">Esqueci minha senha</p>
          <button type="submit" className="bg-gradient-to-tr from-custom-point-gradient-0 via-custom-point-gradient-1 to-custom-point-gradient-2
          rounded-md
          text-white
          w-2/2
          h-10
          mb-5
          "
          
          >
            Entrar
          </button>
          <p className="text-gray-400 underline flex justify-center text-sm">Ainda não tenho uma conta</p>
        </form>
      </section>
      <img className=" hidden md:block " src="/dist/assets/image1.png" alt="oi" />
    </div>
  )
}
