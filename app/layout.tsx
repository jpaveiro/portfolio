import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "João Pedro Aveiro | Desenvolvedor Full Stack",
  description:
    "Estudante de Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes.",
  openGraph: {
    siteName: "João Pedro Aveiro | Desenvolvedor Full Stack",
    title: "João Pedro Aveiro | Desenvolvedor Full Stack",
    description:
      "Estudante de Desenvolvimento de Sistemas, transformando ideias em código e aprendendo todos os dias a criar soluções digitais inteligentes.",
    images: {
      url: "https://github.com/jpaveiro.png",
      width: 460,
      height: 460,
    },
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
