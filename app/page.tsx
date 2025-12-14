import { 
  Mail, 
  Terminal, 
  Database, 
  Cloud, 
  Shield, 
  Server, 
  Code2, 
  Cpu, 
  ExternalLink,
  Lock
} from 'lucide-react';

/* TODO: Componentização*/

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {  
    const iam = {
    name: "João Pedro Aveiro",
    email: "jpaveiros@gmail.com",
    github: "https://github.com/jpaveiro",
    linkedin: "https://www.linkedin.com/in/jpaveiro/",
    description: "Estudante de Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes."
  };

  const techStack = [
    { name: "Desenvolvimento Backend", icon: <Server size={24} />, color: "text-red-500", desc: "Java & Spring Boot, .NET C#, APIs RESTful, Microsserviços." },
    { name: "Cibersegurança", icon: <Shield size={24} />, color: "text-green-500", desc: "Redes de computadores, boas práticas e fundamentos da segurança cibernética." },
    { name: "Banco de Dados", icon: <Database size={24} />, color: "text-blue-400", desc: "Modelagem de dados relacionais e não relacionais e otimização de queries." },
    { name: "Docker & Cloud", icon: <Cloud size={24} />, color: "text-cyan-500", desc: "Containerização e deploy escalável." },
    { name: "Desenvolvendo Frontend", icon: <Code2 size={24} />, color: "text-pink-600", desc: "Frontend reativo e integração com APIs utilizando TypeScript junto à frameworks como Angular e Next.js." },
    { name: "Computer Science", icon: <Cpu size={24} />, color: "text-yellow-500", desc: "Fundamentos sólidos de algoritmos e estrutura de dados." },
  ];

  const projects = [
    {
      title: "Velo",
      tags: ["Java", "Spring Boot", "Golang", "Gin", "TypeScript", "Angular", "Swift", "Microsserviços", "gRPC"],
      desc: "Plataforma social para ciclistas com arquitetura de microsserviços. Criação de rotas personalizadas, interação entre ciclistas por meio de comunidades e eventos, foco em segurança durante os trajetos.",
      link: "https://github.com/velo-project/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-purple-500/30 overflow-x-hidden">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:px-8">
          <h1 className="text-xl font-bold tracking-tighter hover:text-purple-400 transition-colors cursor-pointer mb-2 md:mb-0 flex items-center gap-2">
            <Terminal size={20} className="text-purple-500" /> {iam.name}
          </h1> 
          <ul className="flex gap-6 text-sm font-medium text-gray-400">
            {['Início', 'Tecnologias', 'Projetos', 'Contato'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="início" className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-24 px-6 md:px-8 gap-12 mb-32">
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
            <br/>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Criatividade & Inovação
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            {iam.description}
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              <GithubIcon size={20}/> GitHub
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all font-semibold flex items-center justify-center gap-2">
              <LinkedinIcon size={20}/> LinkedIn
            </button>
          </div>
        </section>

        <div className="relative group w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-2xl">
             <img src={`${iam.github}.png`} alt={iam.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-0 right-0 animate-bounce bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
             <Lock className="text-green-400" size={24} />
          </div>
          <div className="absolute bottom-10 -left-4 animate-bounce delay-700 bg-black/80 backdrop-blur p-3 rounded-2xl border border-gray-800 shadow-xl">
             <Database className="text-blue-400" size={24} />
          </div>
        </div>
      </main>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10"></div>

      <section id="tecnologias" className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Terminal className="text-purple-500" /> Hard Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300">
              <div className={`mb-4 ${tech.color} p-3 rounded-xl bg-gray-950 w-fit group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${tech.color}`}>{tech.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Code2 className="text-blue-500" /> Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/30 transition-all">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
                <a href={project.link} className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                  Ver código fonte <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contato" className="border-t border-gray-800 bg-black/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 md:flex items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Vamos construir algo seguro?</h2>
            <p className="text-gray-400">Sempre aberto a novas oportunidades e desafios em backend.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jpaveiro/" className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <LinkedinIcon size={24} />
            </a>
            <a href={`${iam.github}`} className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-purple-600 transition-all">
              <GithubIcon size={24} />
            </a>
            <a href={`mailto:${iam.email}`} className="p-3 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-green-600 transition-all">
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
