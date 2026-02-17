import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import { GotoTool } from "@/components/goto-tool/goto-tool";
import { Header } from "@/components/hero/header";
import { Project } from "@/components/project/project";
import Footer from "@/components/layout/footer";
import { resume } from "@/data/resume";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header />
      <About />
      <Experience experiences={resume.experience} />
      <Project projects={resume.projects} />
      <GotoTool />
      <Footer />
    </div>
  );
}
