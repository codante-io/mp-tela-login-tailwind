import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Codante - Página de Login',
  description: 'Página de Login.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-[#0E0D10] text-zinc-50 ${dmSans.className}`}>{children}</body>
    </html>
  )
}