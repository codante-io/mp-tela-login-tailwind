import Head from 'next/head'
import './globals.css'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ weight: '400', style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'Tela de Tailwind',
  description: 'A tela de login mais bonita do mundo com Tailwind CSS',
  icons: {
    icon: '/cdnt.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex items-center justify-center ${dmSans.className}`} >{children}</body>
    </html>
  )
}
