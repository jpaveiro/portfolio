'use client'
import { Files, Home, Menu, Phone, Terminal, Trophy, X } from "lucide-react";
import { useState } from "react";
import { IamProps } from "./types/props";

// TODO: Melhora do código
export default function Navbar({iam}: IamProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarButtons = 
    [
      { 
        name: "Início",
        icon: <Home size={14}/>
      },
      {
        name: "Skills",
        icon: <Terminal size={14}/>
      },
      {
        name: "Conquistas",
        icon: <Trophy size={14}/>

      },
      {
        name: "Projetos",
        icon: <Files size={14}/>

      },
      {
        name: "Contato",
        icon: <Phone size={14}/>

      }
    ]
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 background-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Terminal size={20} className="text-purple-500 flex-shrink-0" />
              <h1 className="text-xl text-white font-bold tracking-tighter hover:text-purple-400 transition-colors cursor-pointer">
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
              {navbarButtons.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="flex flex-col gap-2 px-1 pb-4 pt-2 text-sm font-medium text-gray-100">
              {navbarButtons.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all hover:text-white"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      );
}