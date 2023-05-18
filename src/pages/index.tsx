import ContainerLogin from '@/components/ContainerLogin'
import HeroLogin from '@/components/HeroLogin'
import Login from '@/components/Login'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`
        flex min-h-screen flex-col min-w-screen
        items-center justify-center p-24 ${inter.className}
        bg-gradient-to-r from-zinc-950 to-zinc-900
      `}
    >
      <ContainerLogin>
        <Login />
        <HeroLogin />
      </ContainerLogin>
    </main>
  )
}
