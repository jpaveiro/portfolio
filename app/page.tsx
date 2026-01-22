import Feats from "@/components/feats";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icon";
import {
  Mail,
  Terminal,
  Database,
  Shield,
  Code2,
  Layers,
  Cloud,
  Coffee,
  Computer,
  Files,
  Gauge
} from "lucide-react";
import Image from "next/image";

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
      name: "Arquitetura & Design",
      icon: <Layers size={24} />,
      color: "text-purple-400",
      desc: "SOLID, Clean Architecture, RESTful APIs, Microsserviços, Web Design UX/UI.",
    },
    {
      name: "Performance & Escalabilidade",
      icon: <Gauge size={24}/>,
      color: "text-orange-400",
      desc: "Uso de cache utilizando Redis e sistemas de filas utilizando RabbitMQ."
    },
    { 
      name: "Docker & Cloud",
      icon: <Cloud size={24} />,
      color: "text-cyan-400",
      desc: "Docker & Docker Compose, Containerização, GCP e DigitalOcean."
    }
  ];

  const projects = [
    {
      title: "Velo: Aplicativo para Ciclistas (2025)",
      tags: [
        "Java",
        "Spring Boot",
        "Golang",
        "Gin",
        "TypeScript",
        "Angular",
        "Swift",
        "Mobile",
        "UI",
        "API",
        "Microsserviços",
        "REST",
        "gRPC"
      ],
      desc: "Plataforma social para ciclistas com arquitetura de microsserviços. Criação de rotas personalizadas, interação entre ciclistas por meio de comunidades e eventos, foco em segurança durante os trajetos.",
      link: "https://github.com/velo-project/",
    },
    {
      title: "BasicT-NG: WebApp PDV (2024)",
      tags: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "Angular",
        "Monólito",
        "UI",
        "API",
        "REST",
      ],
      desc: "WebApp Ponto de Venda com funções de venda, controle de estoque e cadastro de usuários.",
      link: "https://github.com/jpaveiro/BasicT-NG",
    },
    {
      title: "Backend Challenge Itaú Unibanco (2025)",
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
    <div className="flex-1 bg-[#0a0a0a]">
      <Navbar iam={iam}/>
      <div className="h-screen bg-[#0a0a0a] text-gray-100 selection:bg-purple-500/30 flex flex-col pt-20 md:pt-0">
        <main
          id="início"
          className="flex-1 max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 "
        >
          <section className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute rounded-full bg-blue-400 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
              </div>
              On-line
            </div> 

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              👋 Olá! Eu sou<br/>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                João Pedro Aveiro
              </span>
            </h1>

            <p className="text-xl text-gray-300/80 font-light mx-auto lg:mx-0 leading-relaxed tracking-wide">
              {iam.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center md:justify-start">
              <a
                href={iam.github}
                className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 font-mono text-sm tracking-wide overflow-hidden"
              >
                <GithubIcon size={20} /> GitHub
              </a>
              <a
                href={iam.linkedin}
                className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 font-mono text-sm tracking-wide overflow-hidden"
              >
                <LinkedinIcon size={20} /> LinkedIn
              </a>
            </div>
          </section>

          <div className="relative group w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-2xl">
              <Image
                width={500}
                height={500}
                src={`${iam.github}.png`}
                alt={iam.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 animate-bounce delay-700 bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
              <Computer className="text-purple-400" size={24} />
            </div>
            <div className="absolute bottom-10 -left-4 animate-bounce delay-700 bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
              <Coffee className="text-orange-400" size={24} />
            </div>
          </div>
        </main>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800 to-transparent my-10 animate-pulse"></div> 
      </div>

      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20"
      >
        <h2 className="text-white text-3xl font-bold mb-12 flex items-center gap-3">
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
      <h2 className="text-white text-3xl font-bold mb-12 flex items-center gap-3">
        <Files className="text-blue-500" /> Projetos em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            iam={iam}
          />
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
