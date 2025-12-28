import Feats from "@/components/feats";
import Navbar from "@/components/navbar";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icon";
import {
  Mail,
  Terminal,
  Database,
  Shield,
  Code2,
  ExternalLink,
  Layers,
  Cloud,
  Coffee,
  Computer
} from "lucide-react";

export default function Home() {
  const iam = {
    name: "João Pedro Aveiro",
    email: "jpaveiros@gmail.com",
    github: "https://github.com/jpaveiro",
    linkedin: "https://www.linkedin.com/in/jpaveiro/",
    description:
      "Técnico em Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes.",
  };

  const techStack = [
    {
      name: "Linguagens & Frameworks",
      icon: <Code2 size={24} />,
      color: "text-red-400",
      desc: "Java, TypeScript, C#, Python, Spring, ASP.NET Core, .NET MAUI, Angular e Next.js.",
    },
    {
      name: "Redes & Cibersegurança",
      icon: <Shield size={24} />,
      color: "text-green-400",
      desc: "Redes de computadores, boas práticas e fundamentos da segurança cibernética.",
    },
    {
      name: "Banco de Dados",
      icon: <Database size={24} />,
      color: "text-blue-400",
      desc: "Modelagem SQL e NoSQL, consultas e busca por similaridade utilizando PGVector.",
    },
    { 
      name: "Docker & Cloud",
      icon: <Cloud size={24} />,
      color: "text-cyan-400",
      desc: "Docker Compose, Containerização, GCP e DigitalOcean."
    },
    {
      name: "Arquitetura & Design",
      icon: <Layers size={24} />,
      color: "text-purple-400",
      desc: "SOLID, Clean Architecture, RESTful APIs, Microsserviços.",
    },
  ];

  const projects = [
    {
      title: "Velo",
      tags: [
        "Java",
        "Spring Boot",
        "Golang",
        "Gin",
        "TypeScript",
        "Angular",
        "Swift",
        "Mobile",
        "API",
        "Microsserviços",
        "REST",
        "gRPC"
      ],
      desc: "Plataforma social para ciclistas com arquitetura de microsserviços. Criação de rotas personalizadas, interação entre ciclistas por meio de comunidades e eventos, foco em segurança durante os trajetos.",
      link: "https://github.com/velo-project/",
    },
    {
      title: "BasicT-NG",
      tags: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "Angular",
        "Monólito",
        "API",
        "REST",
      ],
      desc: "WebApp Ponto de Venda desenvolvido com Angular, SpringBoot e MySQL.",
      link: "https://github.com/jpaveiro/BasicT-NG",
    },
    {
      title: "Backend Challenge Itaú Unibanco",
      tags: [
        "Desafio Backend",
        "Java",
        "Spring Boot",
        "API",
        "RESTful"
      ],
      desc: "O sistema tem como objetivo principal o registro de transações financeiras e o cálculo de estatísticas em tempo real, com base nas transações recebidas nos últimos 60 segundos.",
      link: "https://github.com/jpaveiro/BackendChallenge.Itau99"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-purple-500/30 overflow-x-hidden">
    <Navbar iam={iam}></Navbar>
      <main
        id="início"
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-24 px-6 md:px-8 gap-12 mb-32"
      >
        <section className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            On-line
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Codando o futuro com
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Criatividade & Inovação
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            {iam.description}
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href={iam.github}
              className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon size={20} /> GitHub
            </a>
            <a
              href={iam.linkedin}
              className="px-8 py-3 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all font-semibold flex items-center justify-center gap-2"
            >
              <LinkedinIcon size={20} /> LinkedIn
            </a>
          </div>
        </section>

        <div className="relative group w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-2xl">
            <img
              src={`${iam.github}.png`}
              alt={iam.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 right-0 animate-bounce bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
            <Computer className="text-purple-400" size={24} />
          </div>
          <div className="absolute bottom-10 -left-4 animate-bounce delay-700 bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
            <Coffee className="text-orange-400" size={24} />
          </div>
        </div>
      </main>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10"></div>

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20"
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Terminal className="text-purple-500" /> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div
                className={`mb-4 ${tech.color} p-3 rounded-xl bg-gray-950 w-fit group-hover:scale-110 transition-transform`}
              >
                {tech.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${tech.color}`}>
                {tech.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Feats />

      <section id="projetos" className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Code2 className="text-blue-500" /> Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/30 transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="flex gap-2 flex-wrap max-w-[90%]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ExternalLink
                    size={20}
                    className="text-gray-500 group-hover:text-white transition-colors shrink-0 w-5 h-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors max-w-[90%]">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  Ver projeto <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contato"
        className="border-t border-gray-800 bg-black/50 mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:flex items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Tem um projeto em mente?
            </h2>
            <p className="text-gray-400">
              Sempre aberto a novas oportunidades e desafios em backend.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={iam.linkedin}
              className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href={iam.github}
              className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={`mailto:${iam.email}`}
              className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-green-600 transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="text-center py-6 text-gray-600 text-sm border-t border-gray-900">
          © 2025 João Pedro Aveiro. Desenvolvido com Next.js & Tailwind.
        </div>
      </footer>
    </div>
  );
}
