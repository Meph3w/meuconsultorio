import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Como criar conteúdo médico ético para redes sociais",
    excerpt:
      "Aprenda a criar conteúdo que educa pacientes e respeita as diretrizes do CFM. Neste artigo, discutimos as melhores práticas para médicos nas redes sociais.",
    slug: "conteudo-medico-etico-redes-sociais",
    date: "10 Mar 2023",
    category: "Marketing Digital",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "SEO para médicos: seja encontrado por quem precisa",
    excerpt:
      "Estratégias de otimização para mecanismos de busca específicas para profissionais de saúde. Descubra como aparecer nos primeiros resultados do Google.",
    slug: "seo-para-medicos",
    date: "25 Fev 2023",
    category: "SEO",
    readTime: "10 min",
  },
  {
    id: 3,
    title: "Telemedicina: como implementar em sua prática",
    excerpt:
      "Um guia completo sobre como oferecer consultas online de forma segura e eficiente, respeitando a legislação brasileira e as diretrizes do CFM.",
    slug: "telemedicina-implementacao",
    date: "18 Jan 2023",
    category: "Telemedicina",
    readTime: "12 min",
  },
  {
    id: 4,
    title: "Como criar um site médico eficiente",
    excerpt:
      "Descubra os elementos essenciais que todo site médico deve ter para atrair pacientes e transmitir credibilidade. Inclui exemplos e ferramentas recomendadas.",
    slug: "site-medico-eficiente",
    date: "05 Jan 2023",
    category: "Websites",
    readTime: "9 min",
  },
  {
    id: 5,
    title: "Marketing médico: o que é permitido pelo CFM?",
    excerpt:
      "Entenda as regras do Conselho Federal de Medicina para publicidade e marketing médico. Saiba o que pode e o que não pode ser feito.",
    slug: "marketing-medico-cfm",
    date: "20 Dez 2022",
    category: "Marketing",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "Como usar o LinkedIn para médicos",
    excerpt:
      "Estratégias específicas para profissionais de saúde aproveitarem o potencial do LinkedIn para networking, educação e captação de pacientes.",
    slug: "linkedin-para-medicos",
    date: "10 Dez 2022",
    category: "Redes Sociais",
    readTime: "6 min",
  },
]

export const metadata = {
  title: "Blog | Meu Consultório ON",
  description:
    "Artigos e recursos para médicos e acadêmicos de medicina sobre presença digital, marketing médico e telemedicina.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-900">Blog</h1>
        <p className="text-lg sm:text-xl text-slate-700 mb-8 sm:mb-12">
          Artigos e recursos para médicos e acadêmicos de medicina
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 relative">
                <Image
                  src={`/placeholder.svg?height=300&width=500&text=Blog+${post.id}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <p className="text-sm text-slate-600">{post.date}</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full w-fit">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2 text-slate-900">{post.title}</h2>
                <p className="text-slate-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">{post.readTime} de leitura</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

