import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAK - Swiss Army Knife UI Design Tool Hub',
  description: 'A hub for basic UI design tools',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href="/favicon.ico"/>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
