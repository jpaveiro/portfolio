import { School, Target, Trophy } from "lucide-react";

export default function Feats() {
  const feats = [
    {
      title: "Bootcamp CDB Java | Educ360° & Foursys",
      highlight: "Fourcamp",
      desc: "Bootcamp 2024 com projeto destaque. Indicado para processo seletivo Fourcamp (programa trainee Foursys).",
      icon: <Trophy size={22} />,
      color: "text-yellow-400",
      badge: "Destaque",
    },
    {
      title: "ETEC Prof. Horácio Augusto da Silveira",
      highlight: "Destaque acadêmico",
      desc: "Destaque acadêmico em Desenvolvimento de Sistemas com excelência em projetos práticos e notas máximas em matérias relacionadas ao curso.",
      icon: <School size={22} />,
      color: "text-blue-400",
      badge: "Acadêmica",
    },
    {
      title: "Hackathons & Competições",
      highlight: "Em breve",
      desc: "Participação em hackathons e maratonas de programação focadas em backend e segurança para resolver desafios reais em equipe.",
      icon: <Target size={22} />,
      color: "text-red-400",
      badge: "Em breve",
    },
  ];

  return (
    <section id="conquistas" className="max-w-7xl mx-auto px-6 md:px-8 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <Trophy className="text-yellow-400" />
        Conquistas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feats.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-yellow-400/40 hover:bg-gray-800/60 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 transition-opacity" />

            <div className="relative p-6 space-y-3">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-950 border border-gray-800 text-xs font-semibold uppercase tracking-wide ${item.color}`}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/60">
                  {item.icon}
                </span>
                {item.badge}
              </div>

              <h3
                className={`text-lg font-bold ${item.color} group-hover:translate-x-1 transition-transform`}
              >
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 font-semibold">
                {item.highlight}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
