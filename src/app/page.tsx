import ExperienceCard from "@/components/ExperienceCard";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5 mt-5">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none" yOffset={8} text="Hey, I'm Eh Masuk" />
              <BlurFadeText className="max-w-[600px] text-2xl text-gray-700 dark:text-zinc-300" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <Avatar className="size-24 pr-3 pt-3">
                  <AvatarImage className="rounded shadow-lg" alt={DATA.name} src={DATA.avatarUrl} />
                </Avatar>

                <div className="z-0">
                  <div className="absolute left-0 right-0 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

                  <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="text-gray-700 dark:text-zinc-300">{DATA.summary}</Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="relative mt-5">
          <div
            className="absolute left-1 top-0 bottom-0 w-0.5 
                bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent 
                dark:from-zinc-700 dark:via-zinc-800 dark:to-transparent 
                hidden md:block"
          ></div>

          {DATA.work.map((workerData, index) => {
            return (
              <BlurFade key={index} delay={BLUR_FADE_DELAY * 7 + index}>
                <ExperienceCard company={workerData.company} title={workerData.title} start={workerData.start} end={workerData.end} description={workerData.description} skills={workerData.skills} />
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>
                  {skill.icon}
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-3 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My projects</h2>

              <Link href="/projects">
                <PrimaryButton>See all</PrimaryButton>
              </Link>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Markdown className="text-gray-700 dark:text-zinc-300">
              I&apos;ve worked on projects for clients and companies, and also created pet projects to explore new ideas and learn new skills. Here are some of the projects I’ve built and contributed
              to:
            </Markdown>
          </BlurFade>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
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
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link href={DATA.contact.social.Whtasapp.url} className="text-blue-500 hover:underline">
                  with a direct question on whatsapp
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
