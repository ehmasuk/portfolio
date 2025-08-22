import { SpotlightCard } from "@/components/ui/spotlightcard";
import { Badge } from "./ui/badge";
import { GlowingEffect } from "./ui/glowing-effect";

type Props = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  skills: readonly string[];
};

function ExperienceCard({ company, title, start, end, description, skills }: Props) {
  return (
    <div className="mb-8">
      <div className="relative">
        <div className="absolute left-[-3px] top-6 w-4 h-4 bg-gradient-to-r from-zinc-800 to-zinc-600 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg hidden md:block" />
        <div className="text-card-foreground flex flex-col gap-6 rounded-md ml-0 md:ml-8 group transition-all duration-300 border bg-white/80 dark:bg-zinc-800/70 backdrop-blur-sm">
          <SpotlightCard spotlightColor="34, 211, 238" spotlightOpacity={0.07}>
            <div className="p-6 relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-zinc-800 dark:group-hover:text-zinc-100 transition-colors">{company}</h3>
                  </div>
                  <p className="font-medium text-zinc-700 dark:text-zinc-300 text-sm mb-3">{title}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">
                  {start} - {end}
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((name, idx) => {
                  return (
                    <Badge className="text-xs" key={idx}>
                      {name}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </SpotlightCard>
          <GlowingEffect className="rounded-md" spread={10} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
