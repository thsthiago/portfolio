"use client";
import { PROJECTS } from "@/constants";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectPopup } from "./ProjectPopup";

export type Project = {
  id: string;
  type: "Front-end" | "Full-stack" | "Back-end";
  title: string;
  description: string;
  longDescription?: string;
  techs: string[];
  images?: string[];
  github?: string;
  demo?: string;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
            Projetos
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Projetos que conectam front-end, back-end e produto.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
            Uma seleção de trabalhos em que atuei como desenvolvedor full-stack,
            unindo experiência de usuário, arquitetura e integrações em
            produção.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActiveProject(project)}
              variants={cardVariants}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectPopup
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};
