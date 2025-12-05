import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from ".";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
  variants: Variants;
};

export const ProjectCard = ({
  project,
  onOpen,
  variants,
}: ProjectCardProps) => {
  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      variants={variants}
      onClick={onOpen}
      className="h-full cursor-pointer"
      transition={{ layout: { duration: 0.28, ease: "easeOut" } }}
    >
      <Card
        className="
          relative flex h-full flex-col
          border border-slate-800/80
          bg-[#050018]/95
          shadow-[0_18px_35px_rgba(0,0,0,0.65)]
          backdrop-blur
          transition-all duration-300
          hover:-translate-y-1
          hover:border-violet-400/70
          hover:shadow-[0_0_40px_rgba(124,58,237,0.35)]
        "
      >
        <CardHeader className="relative space-y-2 p-5 pt-3 pb-3">
          <div className="flex items-center justify-between gap-2">
            <Badge
              variant="outline"
              className="border-violet-500/40 bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-200"
            >
              {project.type}
            </Badge>

            <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {project.techs.slice(0, 2).join(" • ")}
            </span>
          </div>

          <CardTitle className="text-base font-semibold text-slate-50 md:text-lg">
            {project.title}
          </CardTitle>
          <CardDescription className="text-xs text-slate-400 md:text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 p-5 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-slate-700/70
                  bg-slate-900/40 px-2.5 py-1
                  text-[11px] text-slate-200
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.github && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 border-slate-700/80 bg-slate-900/60 text-xs text-slate-100 hover:border-violet-500/80 hover:bg-violet-500/10"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
