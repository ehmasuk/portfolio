import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;
function projects() {
  return (
    <div>
      <section className="mb-10">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl md:text-5xl mb-3 font-bold">Projects</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="text-gray-700 dark:text-zinc-300">I’ve developed commercial projects as well as hobby projects. All projects are included (along with course related projects) here.</Markdown>
        </BlurFade>
      </section>
      <div className="space-y-3 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">All my projects</h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
