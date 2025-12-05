"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type HighlightCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  index: number;
};

export const HighlightCard = ({
  icon: Icon,
  title,
  description,
  index,
}: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn("min-w-80", index % 2 === 0 ? "ml-auto" : "mr-auto")}
    >
      <Card
        className="
        relative overflow-hidden
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
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-30 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.45),transparent_60%)] opacity-70" />

        <CardHeader className="relative flex flex-row items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/40">
            <Icon className="h-4 w-4 text-violet-300" />
          </div>

          <div>
            <CardTitle className="text-sm font-semibold text-slate-50">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-1 text-xs text-slate-400">
                {description}
              </CardDescription>
            )}
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
