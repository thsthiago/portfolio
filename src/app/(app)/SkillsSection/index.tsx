"use client";

import { SKILL_GROUPS } from "@/constants";
import { SkillGroupCard } from "./SkillGroupCard";

export const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
            Skills & Stack
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-4xl">
            Da interface ao servidor, do problema à solução.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
            Atuo no desenvolvimento completo de aplicações, passando por
            interfaces, experiência do usuário, APIs, arquitetura de serviços,
            integrações e banco de dados. Aqui está um panorama das principais
            tecnologias e ferramentas que utilizo no dia a dia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <SkillGroupCard key={group.name} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
