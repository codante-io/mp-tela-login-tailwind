import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import UserIcon from '../assets/user.svg'

export function Welcome() {
  return (
    <div className="flex h-full flex-col items-center justify-between p-14">
      <div className="flex w-full items-center justify-between">
        <img src={Logo} alt="" className="h-[80px] w-[80px]" />
        <Link
          to="/"
          className="rounded-lg bg-eclipse-10 px-6 py-1 text-lg font-bold text-white hover:opacity-90"
        >
          Sair
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-9 text-white">
        <h1 className="text-4xl font-bold ">
          Evolua na programação{' '}
          <span className="bg-eclipse-text bg-clip-text text-transparent">
            front-end
          </span>
        </h1>
        <p className="max-w-4xl text-center text-2xl">
          Fuja dos mesmos cursos e tutoriais de sempre e aprimore suas skills em
          programação com <strong>workshops</strong> e{' '}
          <strong>mini projetos</strong> ensinados pelos melhores profissionais
          do mercado!
        </p>

        <div className="flex items-center gap-16">
          <Link
            to="https://codante.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-eclipse-blue px-4 py-2 hover:opacity-90"
          >
            Saiba mais
          </Link>
          <Link
            to="https://codante.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2 text-black hover:opacity-90"
          >
            <img src={UserIcon} className="h-4 w-4" alt="Ícone de usuário" />
            Cadastre-se
          </Link>
        </div>
      </div>

      <span>© 2023 Codante.io</span>
    </div>
  )
}
