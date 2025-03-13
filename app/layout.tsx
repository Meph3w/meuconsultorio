import type React from "react"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Meu Consultório ON | Presença Digital para Médicos",
  description: "Ajudamos médicos e acadêmicos de medicina a construir uma presença digital eficaz e profissional.",
  icons: {
    icon: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Favicon-nCaUjphSqEBdu4kf4mNLbGLHPSwGhL.png" },
    ],
    apple: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Favicon-nCaUjphSqEBdu4kf4mNLbGLHPSwGhL.png" },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'