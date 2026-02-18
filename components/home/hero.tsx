"use client";

import { resume } from "@/data/resume";
import { Calendar04Icon, File01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AvatarSvg } from "../global/avatar-svg";
import { IconButton } from "../global/icon-button";
import { TextLoop } from "../ui/text-loop";

import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="sm:px-6 px-4 sm:pb-6 pb-4 -mt-8">
      {/* Profile */}
      <div className="relative mb-6 sm:mb-4">
        <div className="flex items-end gap-4 sm:gap-6">
          <motion.div layoutId="header-avatar" className="size-24 z-60 bg-white sm:size-32 grid place-items-center overflow-hidden rounded-full border border-gray-200">
            <AvatarSvg className="md:size-28" />
          </motion.div>

          {/* Name & Text Loop */}
          <div className="mb-1 sm:mb-2 space-y-0.5 sm:space-y-1 flex-1">
            <div className="flex items-center gap-2 justify-between">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight md:text-3xl">{resume.name}</h1>
              {/* font size */}
            </div>

            <TextLoop interval={5} className="text-sm sm:text-base font-mono text-muted-foreground">
              <span>Full Stack Developer</span>
              <span>MERN Stack developer</span>
              <span>Passionate programmer</span>
              <span>Continuously learning</span>
            </TextLoop>
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
                <HugeiconsIcon icon={Location01Icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{resume.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HugeiconsIcon icon={Calendar04Icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Born on Jan 26,1999</span>
              </div>
            </div>

            <div className="flex gap-2 text-sm sm:text-base">
              {resume.socials.map((social) => (
                <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                  <IconButton name={social.name} icon={social.icon} />
                </a>
              ))}
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
  );
}
