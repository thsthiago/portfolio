"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Form } from "./Form";

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

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
          <motion.div variants={childVariants} className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
              Contato
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Vamos conversar?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
              Estou aberto a oportunidades e boas conversas sobre front-end,
              arquitetura full-stack e produto. Se quiser falar comigo, pode
              usar o formulário ao lado ou qualquer um dos canais abaixo.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <a
                href="mailto:thiagocabral477@gmail.com"
                className="group flex items-center gap-2 text-slate-200 hover:text-violet-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15">
                  <Mail className="h-4 w-4" />
                </span>
                <span>thiagocabral477@gmail.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
              </a>

              <a
                href="https://www.linkedin.com/in/thsthiago-cabral"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-slate-200 hover:text-violet-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span>linkedin.com/in/thsthiago-cabral</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
              </a>

              <a
                href="https://github.com/thsthiago"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-slate-200 hover:text-violet-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15">
                  <Github className="h-4 w-4" />
                </span>
                <span>github.com/thsthiago</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={childVariants}>
            <Form />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
