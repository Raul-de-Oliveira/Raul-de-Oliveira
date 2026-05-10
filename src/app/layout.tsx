import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raul de Oliveira | Desenvolvedor Frontend',
  description: 'Portfólio de Raul de Oliveira, Desenvolvedor Frontend especializado em React e Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
         <link rel="icon" href="/R.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}