import { Mail } from "lucide-react";
import { Iam } from "./types/iam";
import { GithubIcon, LinkedinIcon } from "./ui/icon";

interface FooterProps {
    iam: Iam
}

export default function Footer({iam} : FooterProps) {
    return (
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
                © 2025 {iam.name}. Desenvolvido com Next.js & Tailwind.
            </div>
        </footer>
    );
}