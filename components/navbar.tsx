'use client'
import { Menu, Terminal, X } from "lucide-react";
import { useState } from "react";
import { Props } from "./types/props";


export default function Navbar({iam}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Terminal size={20} className="text-purple-500 flex-shrink-0" />
              <h1 className="text-xl font-bold tracking-tighter hover:text-purple-400 transition-colors cursor-pointer">
                {iam.name}
              </h1>
            </div>
            
            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 rounded-lg hover:bg-white/10 transition-all duration-200 ml-auto"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-400 hover:text-white" />
              ) : (
                <Menu size={24} className="text-gray-400 hover:text-white" />
              )}
            </button>

            <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-400 ml-8">
              {["Início", "Tecnologias", "Conquistas", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="flex flex-col gap-2 px-1 pb-4 pt-2 text-sm font-medium text-gray-100">
              {["Início", "Tecnologias", "Conquistas", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-all hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      );
}