import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import { GotoTool } from "@/components/home/goto-tool";
import { Hero } from "@/components/home/hero";
import { Project } from "@/components/home/project";
import { resume } from "@/data/resume";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience experiences={resume.experience} />
      <Project projects={resume.projects} />
      <GotoTool />
    </>
  );
}
