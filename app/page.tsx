export default function Home() {
  return (
    <div className="wrapper">
      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors cursor-pointer">João Pedro Aveiro</h1>
        <ul className="flex mr-10 gap-6 text-sm font-medium text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Projeto</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
        </ul>
      </nav>
      <main className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold text-blue-500">
          Hello World!
        </h1>
      </main>
    </div>
  );
}