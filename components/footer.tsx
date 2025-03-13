import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Favicon-nCaUjphSqEBdu4kf4mNLbGLHPSwGhL.png"
                alt="Meu Consultório ON Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-white">Meu Consultório ON</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Ajudamos médicos e acadêmicos de medicina a construir uma presença digital eficaz, ética e profissional.
            </p>
            <p className="text-slate-400">
              Powered by{" "}
              <Link
                href="https://www.blog.eidoc.com.br/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Ei, Doc!
              </Link>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.eidoc.com.br/blackbook"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Quero meu consultório online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://blog.eidoc.com.br" className="text-slate-400 hover:text-white transition-colors">
                  Marketing Médico
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.eidoc.com.br/blackbook"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  BlackBook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.blog.eidoc.com.br/medgpt"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  MedGPT 20+
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 sm:mt-12 sm:pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Meu Consultório ON. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

