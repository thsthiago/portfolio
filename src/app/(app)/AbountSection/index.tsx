"use client";
import { motion } from "framer-motion";

import { HIGHLIGHTS } from "@/constants";
import { HighlightCard } from "./HighlightCard";

const MotionSection = motion.section;

export const AboutSection = () => (
  <MotionSection
    id="about"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="
      relative px-4 py-16 bg-[var(--bg-main)] absolute inset-0 mt-30
      before:content-[''] 
      before:absolute 
      before:-top-40 
      before:left-0 
      before:w-full 
      before:h-40 
      before:bg-gradient-to-t 
      before:from-[var(--bg-main)] 
      before:to-transparent
    "
  >
    <div className="mx-auto flex flex-col max-w-7xl gap-10 md:flex-row md:items-start">
      <div className="md:w-2/3">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
          Sobre
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
          Desenvolvedor Full-Stack.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
          Atualmente sou Desenvolvedor Senior Full-stack na Frexco, atuando
          tanto no front-end quanto no back-end para construir experiências
          completas — da interface ao servidor. Trabalho com criação de UIs,
          APIs, integrações, mensageria e automações, sempre buscando soluções
          robustas e escaláveis.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
          Tenho facilidade em entender o problema de negócio, desenhar a
          arquitetura da solução e acompanhar sua entrega até a produção,
          medindo impacto e evoluindo continuamente.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
          Meu foco é equilibrar experiência de usuário, qualidade técnica e
          resultado para o produto.
        </p>
      </div>

      <div className="md:w-1/2">
        <div className="grid gap-4 sm:grid-cols-1">
          {HIGHLIGHTS.map((item, index) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  </MotionSection>
);
