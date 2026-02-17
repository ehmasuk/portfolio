import { cn } from "@/lib/utils";
import { ExperienceType } from "@/types";
import { Building03Icon, Invoice01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import GridSection from "../global/grid-section";
import { VerticalLineIcon } from "../global/svg-icons";
import Tag from "../global/tag";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

function Experience({ experiences, className }: { experiences: ExperienceType[]; className?: string }) {
  return (
    <GridSection>
      <div className={className}>
        <div className="section-title mb-5">Experience</div>
        <Accordion type="multiple" defaultValue={[experiences[0].id.toString()]}>
          {experiences.map((experience, index, array) => (
            <SingleExperience key={experience.id} experience={experience} index={index} array={array} />
          ))}
        </Accordion>
      </div>
    </GridSection>
  );
}

const SingleExperience = ({ experience, index, array }: { experience: ExperienceType; index: number; array: ExperienceType[] }) => {
  return (
    <AccordionItem value={experience.id.toString()} className="border-slate-200 dark:border-slate-800 pl-10 relative not-last:border-b-0 overflow-hidden not-last:pb-2">
      <AccordionTrigger className="hover:no-underline pt-0">
        <div>
          <div className="flex items-center gap-1 mb-1.5">
            <h2 className="font-medium text-base leading-none">{experience.companyName}</h2>
            <VerticalLineIcon className="size-3 dark:text-white/90! text-black/10! md:block hidden" />
            <p className="text-muted-foreground text-xs font-mono leading-none md:block hidden">{experience.workingPeriod}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-light font-mono">{experience.position}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li className="font-mono" key={index}>
              {responsibility}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-2 mb-2 flex-wrap">
          {experience.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>
      </AccordionContent>

      <div
        className={cn(
          "grid place-items-center rounded-md brand-border size-7 absolute left-0 top-0 bg-gray-50 dark:bg-background",
          index !== array.length - 1 &&
            "after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 z-20 after:z-10 after:bg-slate-300 after:h-[400px] after:w-px dark:after:bg-white/30",
        )}
      >
        <HugeiconsIcon icon={Building03Icon} className="size-4 text-slate-800 dark:text-white/90" />
      </div>
    </AccordionItem>
  );
};

export default Experience;
