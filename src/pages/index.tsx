import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`
        flex min-h-screen flex-col 
        items-center justify-center p-24 ${inter.className}
        bg-gradient-to-r from-black to-gray-950
      `}
    >
      <h1>MP Login</h1>
    </main>
  )
}
