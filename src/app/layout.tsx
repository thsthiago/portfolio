import Header from "@/components/Header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiago Cabral - Desenvolvedor Full Stack",
  description: "Portfólio de projetos e experiências profissionais",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "Thiago Cabral - Desenvolvedor Full Stack",
    description: "Portfólio de projetos e experiências profissionais",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Thiago Cabral - Desenvolvedor Full Stack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <Header />

        <main className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 min-h-[100vh] max-h-[100vh] bg-[radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.45),rgba(56,189,248,0.15),transparent_80%)] blur-lg opacity-90 z-1" />
          {children}
        </main>
      </body>
    </html>
  );
}
