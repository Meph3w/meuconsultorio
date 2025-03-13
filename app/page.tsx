import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-16 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Transforme sua carreira médica com presença digital
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white">
              Ajudamos médicos e acadêmicos de medicina a construir uma presença online eficaz, ética e profissional.
            </p>
            <Link href="https://blog.eidoc.com.br/blackbook">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 border border-transparent w-full sm:w-auto"
              >
                Quero meu consultório online ainda hoje! <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Por que ter presença digital?
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              No mundo atual, sua presença online é tão importante quanto sua presença no consultório
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Amplie seu alcance</h3>
                <p className="text-slate-700">
                  Atinja mais pacientes e construa uma reputação sólida além das paredes do seu consultório.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Destaque-se no mercado</h3>
                <p className="text-slate-700">
                  Diferencie-se da concorrência com uma presença digital profissional e estratégica.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Educação médica</h3>
                <p className="text-slate-700">
                  Compartilhe conhecimento, eduque pacientes e contribua para a saúde pública.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">Como funciona</h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Processo simples e eficiente para estabelecer sua presença digital
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Diagnóstico digital</h3>
                  <p className="text-slate-700">
                    Avaliamos sua situação atual e identificamos as melhores oportunidades para sua especialidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Estratégia personalizada</h3>
                  <p className="text-slate-700">
                    Desenvolvemos um plano sob medida para seus objetivos profissionais e sua especialidade médica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Implementação e acompanhamento</h3>
                  <p className="text-slate-700">
                    Colocamos o plano em prática e monitoramos os resultados, ajustando conforme necessário.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="https://blog.eidoc.com.br/blackbook">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                  Quero meu consultório online ainda hoje! <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Médicos que transformaram sua carreira com nossa ajuda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6">
                    "Minha carreira mudou completamente após implementar as estratégias do Meu Consultório ON. Hoje
                    tenho uma agenda cheia e pacientes que me encontram facilmente online."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Dr${i}`}
                        alt={`Dr. Exemplo ${i}`}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Dr. Exemplo {i}</p>
                      <p className="text-sm text-slate-600">Cardiologista</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-0">Blog</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 flex items-center">
              Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Como criar conteúdo médico ético para redes sociais",
                excerpt: "Aprenda a criar conteúdo que educa pacientes e respeita as diretrizes do CFM.",
                slug: "conteudo-medico-etico-redes-sociais",
                date: "10 Mar 2023",
              },
              {
                title: "SEO para médicos: seja encontrado por quem precisa",
                excerpt: "Estratégias de otimização para mecanismos de busca específicas para profissionais de saúde.",
                slug: "seo-para-medicos",
                date: "25 Fev 2023",
              },
              {
                title: "Telemedicina: como implementar em sua prática",
                excerpt: "Um guia completo sobre como oferecer consultas online de forma segura e eficiente.",
                slug: "telemedicina-implementacao",
                date: "18 Jan 2023",
              },
            ].map((post, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Blog+${i + 1}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-600 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 text-slate-900">{post.title}</h3>
                  <p className="text-slate-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-white">
            Junte-se a centenas de médicos que já estão colhendo os benefícios de uma estratégia digital eficaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://blog.eidoc.com.br/blackbook" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border border-transparent w-full">
                Quero meu consultório online ainda hoje! <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blog" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white w-full">
                Explorar o blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

