import { ProjectType } from "@/types";
import { Github } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import GridSection from "../global/grid-section";
import Tag from "../global/tag";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { LinkPreview } from "../ui/link-preview";

export function Project({ projects, className }: { projects: ProjectType[]; className?: string }) {
  return (
    <GridSection>
      <div className={className}>
        <div className="section-title mb-3">Projects</div>
        <Accordion type="multiple" defaultValue={[projects[0].id.toString()]}>
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </Accordion>
      </div>
    </GridSection>
  );
}

const SingleProject = ({ project }: { project: ProjectType }) => {
  return (
    <AccordionItem value={project.id.toString()} className="border-slate-200 dark:border-slate-800 relative">
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-4">
          <div className="brand-border size-10 grid place-items-center rounded-md dark:bg-white">
            <Image src={project.favicon} alt={project.title} width={32} height={32} className="size-7" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1.5">
              <h2 className="font-medium text-base leading-none">{project.title}</h2>
            </div>
            <p className="font-light font-mono">{project.category}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="md:ml-14 flex text-sm flex-col gap-4 font-mono">
        <div className="font-mono text-zinc-600 dark:text-zinc-400">{project.description}</div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>

        <div className="flex gap-6 items-center">
          {project.sourceCode && (
            <Link href={project.sourceCode} target="_blank" className="flex items-center gap-1 no-underline">
              <HugeiconsIcon icon={Github} className="size-4" />
              Source code
            </Link>
          )}
          {project.liveDemo && (
            <LinkPreview url={project.liveDemo}>
              <div className="flex items-center gap-2 no-underline">
                <div className="size-1 bg-emerald-600 animate-ping rounded-full" />
                Live demo
              </div>
            </LinkPreview>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
