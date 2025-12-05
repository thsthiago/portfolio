"use client";
import logo from "@/assets/logo.svg";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const MotionSection = motion.section;

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1 * i,
    },
  }),
};

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <MotionSection
      id="hero"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-[100vh] flex items-center justify-center px-4 py-16 bg-[#07011a]"
    >
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Image
          src={logo}
          alt="Logo"
          width={130}
          height={130}
          className="max-h-30"
        />
      </motion.div>
      <motion.div className="relative flex flex-col items-center justify-center max-w-3xl text-center pt-30">
        <motion.p
          className="text-[0.7rem] tracking-[0.3em] uppercase text-slate-400"
          initial="hidden"
          animate="show"
          variants={item}
          custom={0}
        >
          Desenvolvedor Full-Stack
        </motion.p>
        <motion.h1
          className="mt-3 text-2xl md:text-5xl font-bold text-slate-50"
          variants={item}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Construindo sistemas escaláveis e integrações que impulsionam
          negócios.
        </motion.h1>
        <motion.p
          className="mt-4 text-[0.9rem] md:text-lg text-slate-400"
          variants={item}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Full-stack com foco em interfaces, arquitetura, automação e entrega de
          produto.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mt-20"
          variants={item}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <motion.a
            variants={item}
            custom={4}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-slate-100 text-sm font-medium hover:bg-indigo-500/10 bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
            href="https://github.com/thsthiago"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            Github
          </motion.a>

          <motion.button
            variants={item}
            custom={5}
            initial="hidden"
            animate="show"
            className="px-5 py-2.5 rounded-full border border-indigo-500/70 text-slate-100 text-sm font-medium hover:bg-indigo-500/10 cursor-pointer"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </MotionSection>
  );
};
