import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

type SkillGroup = {
  name: string;
  highlight?: string;
  items: string[];
};

type SkillGroupCardProps = {
  group: SkillGroup;
  index: number;
};

export const SkillGroupCard = ({ group, index }: SkillGroupCardProps) => {
  return (
    <MotionCard
      className="
        relative flex h-full flex-col min-h-[250px]
        overflow-hidden
        border border-slate-800/80
        bg-[#050018]/95
        shadow-[0_18px_35px_rgba(0,0,0,0.65)]
        backdrop-blur
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-400/70
        hover:shadow-[0_0_40px_rgba(124,58,237,0.35)]
      "
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.05,
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-18 h-30 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.45),transparent_60%)] opacity-70" />

      <CardHeader className="relative pb-2">
        <CardTitle className="text-sm font-semibold text-slate-50">
          {group.name}
        </CardTitle>
        {group.highlight && (
          <p className="mt-1 text-xs text-slate-400">{group.highlight}</p>
        )}
      </CardHeader>

      <CardContent className="relative pb-4">
        <div className="flex flex-wrap gap-1.5">
          {group.items.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border border-slate-700/70
                bg-slate-900/50
                px-2.5 py-1
                text-xs
                text-slate-200
                transition
                hover:-translate-y-[1px]
                hover:border-violet-400/70
                hover:bg-violet-500/10
              "
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </MotionCard>
  );
};
