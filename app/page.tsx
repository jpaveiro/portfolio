export default function Home() {
  const defaultGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500";
  const hover = (color: string): string => `hover:${color} transition-colors`;
  const iam = {
    "name": "João Pedro Aveiro",
    "photoUrl": "https://github.com/jpaveiro.png",
    "function": "Desenvolvedor Full Stack",
    "description": "Estudante de Ciência da Computação focado em Java, Spring e Cibersegurança."
  }

  return (
    <div className="wrapper min-h-screen">
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-tight hover:text-purple-400 transition-colors cursor-pointer mb-4 md:mb-0">
          {iam.name}
        </h1> 
        <ul className="flex gap-4 md:gap-6 text-sm font-medium text-gray-400 md:mr-10">
          <li><a href="#" className={`${hover("text-foreground")}`}>Início</a></li>
          <li><a href="#" className={`${hover("text-foreground")}`}>Sobre</a></li>
          <li><a href="#" className={`${hover("text-foreground")}`}>Projeto</a></li>
          <li><a href="#" className={`${hover("text-foreground")}`}>Contato</a></li>
        </ul>
      </nav>
      <main className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-30 px-6 md:px-0 md:ml-40 md:mr-40 gap-10">
        <section className="flex-1">
          <h2 className="text-xl md:text-2xl font-lighter">👋 Olá, eu sou</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
            {iam.name}<br/>
            <span className={`${defaultGradient} bg-clip-text text-transparent animate-shine`}>
              {iam.function}
            </span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg">
            {iam.description}
          </p>
        </section>
        <div className="hidden md:block max-w-sm h-64 md:h-80 flex-1 relative w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse">
             <img src={iam.photoUrl} className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-0 animate-bounce delay-100 bg-gray-900 p-2 rounded-full border border-gray-700 w-12 h-12 flex items-center justify-center">
             <span className="text-xl">🧑‍💻</span>
          </div>
          <div className="absolute bottom-10 right-0 animate-bounce delay-300 bg-gray-900 p-2 rounded-full border border-gray-700 w-14 h-14 flex items-center justify-center">
             <span className="text-xl">🔒</span>
          </div>
          <div className="absolute bottom-0 left-10 animate-bounce delay-700 bg-gray-900 p-2 rounded-full border border-gray-700 w-10 h-10 flex items-center justify-center">
             <span className="text-xl">☕</span>
          </div>
        </div>
      </main>
    </div>
  );
}
