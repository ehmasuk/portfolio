"use client";
import ExperienceCard from "@/components/ExperienceCard";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.1;

let delayCounter = 0;
const nextDelay = (step = 1) => {
  delayCounter += step * BLUR_FADE_DELAY;
  return delayCounter;
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col relative flex flex-1 space-y-1.5 mt-5">
              <BlurFadeText delay={0} className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none" yOffset={8} text="Hey, I'm Eh Masuk" />
              <BlurFadeText className="max-w-[600px] text-2xl text-gray-700 dark:text-zinc-300" delay={0.5} text={DATA.description} />
              <BlurFade delay={1} className="hidden absolute right-[-35px] top-[-25px] md:block">
                <svg width="250" height="68" viewBox="0 0 236 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    strokeDasharray="50 1000"
                    animate={{ strokeDashoffset: [0, -2020] }}
                    transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
                    stroke="url(#paint0_linear)"
                  ></motion.path>
                  <defs>
                    <linearGradient id="paint0_linear" x1="100%" y1="0%" x2="0%" y2="0%" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stop-color="#9E00FF" stop-opacity="0" />
                      <stop offset="50%" stop-color="#2EB9DF" />
                      <stop offset="100%" stop-color="#2EB9DF" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </BlurFade>
            </div>

            <BlurFade delay={1.5}>
              <div className="relative">
                <Avatar className="size-24">
                  <AvatarImage className="rounded border-gray-600" alt={DATA.name} src={DATA.avatarUrl} />
                </Avatar>

                <div className="w-full h-10 relative">
                  {/* Gradients */}
                  <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                  <div className="absolute right-8 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute right-3 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                  {/* Core component */}
                  <SparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={2200} className="w-full h-full" />

                  {/* Radial Gradient to prevent sharp edges */}
                  <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>

                <div className="z-0">
                  <div className="absolute left-0 md:right-[-100px] right-0 top-[-10px] h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-[-10px] md:top-[-80px] top-0 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute top-[-25px] right-10 -mb-px flex h-4 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0ea5e959_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0ea5e959_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="!mt-2">
        <BlurFade delay={nextDelay()}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={nextDelay()}>
          <Markdown className="text-gray-700 dark:text-zinc-300">{DATA.summary}</Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <BlurFade delay={nextDelay()}>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="relative mt-5">
          <BlurFade
            delay={nextDelay()}
            className="absolute left-1 top-0 bottom-0 w-0.5 
                bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent 
                dark:from-zinc-700 dark:via-zinc-800 dark:to-transparent 
                hidden md:block"
          >
            <div></div>
          </BlurFade>

          {DATA.work.map((workerData, index) => {
            return (
              <BlurFade key={index} delay={nextDelay()}>
                <ExperienceCard company={workerData.company} title={workerData.title} start={workerData.start} end={workerData.end} description={workerData.description} skills={workerData.skills} />
              </BlurFade>
            );
          })}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={nextDelay()}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill) => (
              <BlurFade key={skill.name} delay={nextDelay()}>
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
          <BlurFade delay={nextDelay()}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My projects</h2>

              <Link href="/projects">
                <PrimaryButton>See all</PrimaryButton>
              </Link>
            </div>
          </BlurFade>
          <BlurFade delay={nextDelay()}>
            <Markdown className="text-gray-700 dark:text-zinc-300">
              I&apos;ve worked on projects for clients and companies, and also created pet projects to explore new ideas and learn new skills. Here are some of the projects I’ve built and contributed
              to:
            </Markdown>
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
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={nextDelay()}>
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
