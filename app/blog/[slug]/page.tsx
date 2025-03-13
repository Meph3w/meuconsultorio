import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Como criar conteúdo médico ético para redes sociais",
    excerpt: "Aprenda a criar conteúdo que educa pacientes e respeita as diretrizes do CFM.",
    slug: "conteudo-medico-etico-redes-sociais",
    date: "10 Mar 2023",
    category: "Marketing Digital",
    readTime: "8 min",
    author: {
      name: "Dra. Ana Silva",
      role: "Especialista em Marketing Médico",
      image: "/placeholder.svg?height=100&width=100&text=AS",
    },
    content: `
      <p>A presença digital tornou-se essencial para médicos que desejam ampliar seu alcance e educar o público. No entanto, é fundamental que todo conteúdo compartilhado nas redes sociais esteja alinhado com as diretrizes éticas do Conselho Federal de Medicina (CFM).</p>
      
      <h2>Por que criar conteúdo para redes sociais?</h2>
      
      <p>As redes sociais oferecem uma oportunidade única para médicos compartilharem conhecimento, desmistificarem informações incorretas e construírem uma reputação sólida. Quando bem utilizada, essa ferramenta pode:</p>
      
      <ul>
        <li>Educar pacientes sobre condições médicas e tratamentos</li>
        <li>Combater fake news na área da saúde</li>
        <li>Humanizar a relação médico-paciente</li>
        <li>Posicionar o profissional como referência em sua especialidade</li>
      </ul>
      
      <h2>Diretrizes éticas para conteúdo médico</h2>
      
      <p>O CFM estabelece regras claras sobre a comunicação médica. Alguns pontos essenciais incluem:</p>
      
      <ol>
        <li><strong>Não fazer promessas de cura:</strong> Evite garantir resultados específicos de tratamentos.</li>
        <li><strong>Não expor pacientes:</strong> Mesmo com autorização, tenha cautela ao compartilhar casos clínicos.</li>
        <li><strong>Não fazer autopromoção sensacionalista:</strong> Mantenha um tom informativo e educativo.</li>
        <li><strong>Basear-se em evidências científicas:</strong> Todo conteúdo deve ter embasamento na literatura médica atual.</li>
      </ol>
      
      <h2>Tipos de conteúdo recomendados</h2>
      
      <p>Alguns formatos que funcionam bem e respeitam as diretrizes éticas:</p>
      
      <ul>
        <li>Explicações sobre condições médicas comuns</li>
        <li>Dicas de prevenção e promoção da saúde</li>
        <li>Esclarecimentos sobre mitos e verdades</li>
        <li>Atualizações sobre pesquisas e avanços científicos</li>
        <li>Conteúdo educativo sobre procedimentos médicos</li>
      </ul>
      
      <h2>Ferramentas e estratégias</h2>
      
      <p>Para criar conteúdo eficiente e ético:</p>
      
      <ul>
        <li>Planeje um calendário editorial com temas relevantes</li>
        <li>Use linguagem acessível, evitando jargões médicos complexos</li>
        <li>Invista em recursos visuais como infográficos e ilustrações</li>
        <li>Responda dúvidas frequentes dos pacientes</li>
        <li>Mantenha consistência na frequência das publicações</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Criar conteúdo médico para redes sociais pode ser extremamente benéfico tanto para os pacientes quanto para sua carreira, desde que feito com responsabilidade e dentro dos parâmetros éticos. Lembre-se: o objetivo principal deve ser sempre educar e informar, não promover serviços ou procedimentos específicos.</p>
    `,
  },
  {
    id: 2,
    title: "SEO para médicos: seja encontrado por quem precisa",
    excerpt: "Estratégias de otimização para mecanismos de busca específicas para profissionais de saúde.",
    slug: "seo-para-medicos",
    date: "25 Fev 2023",
    category: "SEO",
    readTime: "10 min",
    author: {
      name: "Dr. Carlos Mendes",
      role: "Especialista em Marketing Digital para Saúde",
      image: "/placeholder.svg?height=100&width=100&text=CM",
    },
    content: `
      <p>Quando pacientes buscam por especialistas médicos, o Google é frequentemente o primeiro lugar onde procuram. Estar bem posicionado nos resultados de busca pode fazer toda a diferença para sua prática médica.</p>
      
      <h2>O que é SEO e por que é importante para médicos?</h2>
      
      <p>SEO (Search Engine Optimization) é o conjunto de técnicas que ajudam seu site a aparecer nos primeiros resultados dos mecanismos de busca. Para médicos, isso significa ser encontrado por pacientes que estão ativamente procurando por seus serviços.</p>
      
      <p>Estudos mostram que mais de 70% dos pacientes pesquisam online antes de marcar uma consulta médica, e a maioria não passa da primeira página de resultados do Google.</p>
      
      <h2>Palavras-chave para profissionais de saúde</h2>
      
      <p>O primeiro passo é identificar as palavras-chave relevantes para sua especialidade. Alguns exemplos incluem:</p>
      
      <ul>
        <li>Termos específicos da especialidade: "cardiologista São Paulo", "dermatologista tratamento acne"</li>
        <li>Sintomas: "dor no peito causas", "manchas na pele tratamento"</li>
        <li>Procedimentos: "cirurgia de catarata preço", "tratamento para varizes"</li>
        <li>Perguntas: "quando consultar um endocrinologista", "como escolher um bom pediatra"</li>
      </ul>
      
      <h2>Otimizando seu site médico</h2>
      
      <p>Alguns elementos essenciais para otimizar seu site:</p>
      
      <ol>
        <li><strong>Conteúdo de qualidade:</strong> Crie páginas informativas sobre condições, tratamentos e procedimentos relacionados à sua especialidade.</li>
        <li><strong>Otimização técnica:</strong> Garanta que seu site carregue rapidamente e seja responsivo para dispositivos móveis.</li>
        <li><strong>Metadados:</strong> Utilize títulos e descrições otimizados para cada página.</li>
        <li><strong>Estrutura do site:</strong> Organize o conteúdo de forma lógica e fácil de navegar.</li>
        <li><strong>Google Meu Negócio:</strong> Mantenha seu perfil atualizado com horários, endereço e avaliações.</li>
      </ol>
      
      <h2>Estratégias de conteúdo para médicos</h2>
      
      <p>O conteúdo é o coração de qualquer estratégia de SEO. Algumas ideias eficazes:</p>
      
      <ul>
        <li>Blog com artigos sobre condições médicas comuns</li>
        <li>Páginas de FAQ respondendo dúvidas frequentes dos pacientes</li>
        <li>Guias detalhados sobre procedimentos oferecidos</li>
        <li>Estudos de caso (respeitando a confidencialidade)</li>
        <li>Vídeos explicativos sobre temas de saúde</li>
      </ul>
      
      <h2>Medindo resultados</h2>
      
      <p>Utilize ferramentas como Google Analytics e Search Console para monitorar:</p>
      
      <ul>
        <li>Posições das palavras-chave nos resultados de busca</li>
        <li>Tráfego orgânico para seu site</li>
        <li>Taxa de conversão (visitantes que agendam consultas)</li>
        <li>Tempo de permanência no site</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Investir em SEO é uma estratégia de longo prazo que pode trazer resultados duradouros para sua prática médica. Ao contrário da publicidade paga, o SEO continua gerando resultados mesmo quando você não está investindo ativamente, tornando-se um dos melhores investimentos para médicos que desejam expandir sua presença digital.</p>
    `,
  },
  {
    id: 3,
    title: "Telemedicina: como implementar em sua prática",
    excerpt: "Um guia completo sobre como oferecer consultas online de forma segura e eficiente.",
    slug: "telemedicina-implementacao",
    date: "18 Jan 2023",
    category: "Telemedicina",
    readTime: "12 min",
    author: {
      name: "Dra. Mariana Costa",
      role: "Especialista em Telemedicina",
      image: "/placeholder.svg?height=100&width=100&text=MC",
    },
    content: `
      <p>A telemedicina revolucionou a forma como os cuidados de saúde são prestados, especialmente após a pandemia de COVID-19. Implementar consultas online em sua prática pode expandir seu alcance e melhorar a experiência dos pacientes.</p>
      
      <h2>Benefícios da telemedicina</h2>
      
      <p>Oferecer consultas online traz diversas vantagens:</p>
      
      <ul>
        <li>Maior conveniência para pacientes</li>
        <li>Redução de faltas e cancelamentos</li>
        <li>Atendimento a pacientes de áreas remotas</li>
        <li>Otimização do tempo do médico</li>
        <li>Acompanhamento mais frequente de pacientes crônicos</li>
        <li>Redução de custos operacionais</li>
      </ul>
      
      <h2>Aspectos legais e regulatórios</h2>
      
      <p>No Brasil, a telemedicina foi regulamentada definitivamente pela Lei nº 14.510/2023. Alguns pontos importantes:</p>
      
      <ul>
        <li>É necessário o registro regular no CRM</li>
        <li>O atendimento deve garantir a privacidade e segurança dos dados</li>
        <li>O consentimento informado do paciente é obrigatório</li>
        <li>A documentação completa da consulta deve ser mantida</li>
        <li>Receitas digitais devem seguir as normas específicas</li>
      </ul>
      
      <h2>Infraestrutura necessária</h2>
      
      <p>Para oferecer telemedicina de qualidade, você precisará de:</p>
      
      <ol>
        <li><strong>Plataforma segura:</strong> Utilize sistemas específicos para telemedicina que garantam a criptografia e segurança dos dados.</li>
        <li><strong>Conexão estável:</strong> Uma internet de alta velocidade é essencial para evitar interrupções.</li>
        <li><strong>Equipamentos adequados:</strong> Câmera de boa qualidade, microfone e iluminação apropriada.</li>
        <li><strong>Sistema de agendamento:</strong> Ferramenta que permita aos pacientes marcarem consultas online facilmente.</li>
        <li><strong>Prontuário eletrônico:</strong> Para documentar adequadamente as consultas.</li>
      </ol>
      
      <h2>Melhores práticas para consultas online</h2>
      
      <p>Para garantir a qualidade do atendimento:</p>
      
      <ul>
        <li>Realize um teste antes da primeira consulta</li>
        <li>Tenha um ambiente profissional e sem distrações</li>
        <li>Mantenha contato visual olhando para a câmera</li>
        <li>Explique claramente os próximos passos ao final da consulta</li>
        <li>Envie um resumo por escrito após o atendimento</li>
        <li>Tenha um plano B caso ocorram problemas técnicos</li>
      </ul>
      
      <h2>Divulgação do serviço</h2>
      
      <p>Para informar seus pacientes sobre a disponibilidade de consultas online:</p>
      
      <ul>
        <li>Atualize seu site e perfis em redes sociais</li>
        <li>Envie e-mails informativos para sua base de pacientes</li>
        <li>Treine sua equipe para oferecer a opção durante o agendamento</li>
        <li>Crie materiais educativos sobre como funciona o processo</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>A telemedicina veio para ficar e representa uma oportunidade significativa para médicos modernizarem sua prática. Ao implementar consultas online seguindo as melhores práticas e requisitos legais, você pode melhorar a experiência dos pacientes, otimizar seu tempo e expandir o alcance de seus serviços.</p>
    `,
  },
]

// Function to get post by slug
function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Function to get related posts (excluding current post)
function getRelatedPosts(currentSlug: string, limit = 2) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artigo não encontrado | Meu Consultório ON",
      description: "O artigo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | Meu Consultório ON`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">Artigo não encontrado</h1>
          <p className="mb-8 text-slate-700">O artigo que você está procurando não está disponível.</p>
          <Link href="/blog">
            <Button>Voltar para o Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(params.slug)

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="flex items-center text-blue-600 mb-6 sm:mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
        </Link>

        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">{post.title}</h1>

          <div className="flex items-center mb-6">
            <Image
              src={post.author.image || "/placeholder.svg"}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium text-slate-900">{post.author.name}</p>
              <p className="text-sm text-slate-600">{post.author.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center text-slate-600 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>

          <div className="relative h-56 sm:h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={`/placeholder.svg?height=600&width=1200&text=${post.slug}`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-6 my-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="font-medium text-slate-900">Compartilhar este artigo:</span>
            <div className="flex space-x-4">
              <button className="text-slate-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Compartilhar no Facebook</span>
              </button>
              <button className="text-slate-600 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Compartilhar no Twitter</span>
              </button>
              <button className="text-slate-600 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Compartilhar no LinkedIn</span>
              </button>
              <button className="text-slate-600 hover:text-slate-900">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Compartilhar</span>
              </button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900">Artigos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-40 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=${relatedPost.slug}`}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-slate-600 mb-2">{relatedPost.date}</p>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 text-slate-900">{relatedPost.title}</h3>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm"
                    >
                      Ler artigo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 bg-blue-50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="mb-6 text-slate-700">
            Junte-se a centenas de médicos que já estão colhendo os benefícios de uma estratégia digital eficaz.
          </p>
          <Link href="https://blog.eidoc.com.br/blackbook">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
              Quero meu consultório online ainda hoje! <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

