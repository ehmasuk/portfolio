import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/ProjectCard";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

let delayCounter = 0;
const nextDelay = (step = 1) => {
  delayCounter += step * BLUR_FADE_DELAY;
  return delayCounter;
};

function projects() {
  return (
    <div>
      <section className="mb-10">
        <BlurFade delay={nextDelay()}>
          <h2 className="text-2xl md:text-5xl mb-3 font-bold">Projects</h2>
        </BlurFade>
        <BlurFade delay={nextDelay()}>
          <Markdown className="text-gray-700 dark:text-zinc-300">
            I’ve developed commercial projects as well as hobby projects. All projects are included (along with course related projects) here.
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-3 w-full">
          <BlurFade delay={nextDelay()}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My projects</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={nextDelay()}>
                <ProjectCard
                  sourceLink={project.sourceLink}
                  liveLink={project.liveLink}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default projects;
