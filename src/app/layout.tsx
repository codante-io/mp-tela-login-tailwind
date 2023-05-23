export const metadata = {
  title: 'A tela de login mais bonita do mundo com Tailwind CSS',
  description: 'Um mini-projeto Codante feito por Raphael Baere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
