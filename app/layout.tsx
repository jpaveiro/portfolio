import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "João Pedro Aveiro | Desenvolvedor Full Stack",
  description: "Estudante de Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes.",
  openGraph: {
    siteName: "João Pedro Aveiro | Desenvolvedor Full Stack",
    title: "João Pedro Aveiro | Desenvolvedor Full Stack",
    description: "Estudante de Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes.",
    images: {
      url: "https://github.com/jpaveiro.png",
      width: 460,
      height: 460
    },
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
