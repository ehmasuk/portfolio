"use client";

import { resume } from "@/data/resume";
import { File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { AvatarSvg } from "../global/avatar-svg";
import GridSection from "../global/grid-section";
import { IconButton } from "../global/icon-button";
import { ThemeToggler } from "../global/theme-toggler";
import { TextLoop } from "../ui/text-loop";
export function Header() {
  return (
    <GridSection className="sm:p-0 p-0">
      {/* Cover Image*/}
      <div className="relative h-20 md:h-28 w-[calc(100%-4px)] mx-auto -mt-[15px] border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#25252526_0px_1px,transparent_1px_10px)] dark:bg-[repeating-linear-gradient(45deg,#ffffff0d_0px_1px,transparent_1px_10px)]"></div>
      </div>

      <div className="sm:px-6 px-4 sm:pb-6 pb-4">
        {/* Profile Header */}
        <div className="relative -mt-8 sm:-mt-8 mb-6 sm:mb-4 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-4 sm:gap-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="relative">
              <div className="size-24 bg-white sm:size-32 overflow-hidden rounded-full border border-gray-200">
                <AvatarSvg />
              </div>
            </motion.div>

            <div className="mb-1 sm:mb-2 space-y-0.5 sm:space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight md:text-3xl">{resume.name}</h1>

              <TextLoop interval={5} className="text-sm sm:text-base font-mono text-muted-foreground">
                <span>Full Stack Developer</span>
                <span>MERN Stack developer</span>
                <span>Passionate programmer</span>
                <span>Continuously learning</span>
              </TextLoop>
            </div>
          </div>

          <div className="flex w-full gap-2 sm:gap-3 md:w-auto md:mb-2 -mt-8 sm:-mt-8 items-center">
            {/* <Link href="/" className="font-mono font-medium">
              Portfolio
            </Link>
            <Link href="/" className="font-mono font-medium text-muted-foreground">
              Components
            </Link> */}
            <div className="md:block hidden">
              <ThemeToggler />
            </div>
          </div>
        </div>

        {/* Bio & Stats */}
        <section aria-label="Emdadul haque's bio" className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-mono">{resume.description}</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  <span>{resume.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  <span>Born on Jan 26,1999</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-2 text-sm sm:text-base">
                  {resume.socials.map((social) => (
                    <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                      <IconButton name={social.name} icon={social.icon} />
                    </a>
                  ))}
                </div>

                <a
                  href={resume.resumeUrl}
                  target="_blank"
                  className="flex items-center gap-1 border dark:border-2 hover:bg-gray-900/5 group duration-500 cursor-pointer rounded-lg border-slate-900/20 dark:border-white/20 justify-center dark:hover:bg-white/10 dark:hover:text-white h-8 px-2 py-1 text-black/90 hover:text-black dark:text-white/90"
                >
                  <HugeiconsIcon icon={File01Icon} className="md:size-4.5 size-4" />
                  Resume / CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GridSection>
  );
}
