import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import { GotoTool } from "@/components/home/goto-tool";
import { Header } from "@/components/home/header";
import { Project } from "@/components/home/project";
import Footer from "@/components/layout/footer";
import { resume } from "@/data/resume";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header />
      <About />
      <Experience experiences={resume.experience} />
      <GotoTool />
      <Project projects={resume.projects} />
      <Footer />
    </div>
  );
}
