import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from ".";

type ProjectPopupProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectPopup = ({ project, onClose }: ProjectPopupProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.images ?? [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const hasImages = images.length > 0;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        layoutId={`project-card-${project.id}`}
        className="relative z-50 w-[95%] max-w-4xl rounded-2xl border border-slate-800/80 bg-[#050018]/95 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        initial={{ scale: 0.96, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 10, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-slate-300 hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid gap-0 md:grid-cols-[2fr,1.5fr]">
          <div className="relative h-[380px] md:h-[500px] bg-slate-900/60">
            {hasImages ? (
              <>
                <Image
                  src={images[currentImage]}
                  alt={`${project.title} preview ${currentImage + 1}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-slate-100 hover:bg-black/80"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-slate-100 hover:bg-black/80"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-1.5 w-1.5 rounded-full ${
                            idx === currentImage
                              ? "bg-violet-400"
                              : "bg-slate-500/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col h-full items-center justify-center text-xs text-slate-500">
                <p className="text-sm font-semibold">Projeto interno</p>
                <p className="text-xs text-slate-400">
                  Sem permissão para compartilhar imagens
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-200">
                {project.type}
              </span>

              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                {project.techs.slice(0, 3).join(" • ")}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 md:text-sm">
                {project.longDescription ?? project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-[10px] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.github && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="h-8 border-slate-700/80 bg-slate-900/60 text-xs text-slate-100 hover:border-violet-500/80 hover:bg-violet-500/10"
                >
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Código
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button
                  asChild
                  size="sm"
                  className="h-8 bg-violet-500 text-xs text-slate-50 hover:bg-violet-400"
                >
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Live demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
