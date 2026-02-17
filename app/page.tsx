import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import { GotoTool } from "@/components/goto-tool/goto-tool";
import { Hero } from "@/components/hero/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Project } from "@/components/project/project";
import { resume } from "@/data/resume";
import { LayoutGroup } from "motion/react";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4">

      <Header />
      <Hero />
      <About />
      <Experience experiences={resume.experience} />
      <Project projects={resume.projects} />
      <GotoTool />
      <Footer />
    </div>
  );
}
