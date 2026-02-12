"use client";

import { Avatar } from "@/components/ui/avatar";
import { resume } from "@/data/resume";
import { File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { AvatarSvg } from "../global/avatar-svg";
import { IconButton } from "../global/icon-button";
import { ThemeToggler } from "../global/theme-toggler";
import { TextLoop } from "../ui/text-loop";
export function Header() {
  return (
    <div>
      {/* Cover Image with Gradient Animation */}
      <div className="relative h-16 md:h-24 w-full rounded-b-2xl " role="img" aria-label="Profile cover background">
        <motion.div
          className="absolute inset-0 border-x border-gray-200 dark:border-white/5"
          animate={{
            background: [
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
              "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
              "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/70" />
      </div>

      <div className="px-4 sm:px-6 pb-6 gridder-section border-x border-gray-200 dark:border-white/5">
        {/* Profile Header */}
        <div className="relative -mt-8 sm:-mt-8 mb-6 sm:mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-4 sm:gap-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="relative">
              <div className="size-24 shadow bg-white dark:bg-slate-300 sm:size-32 overflow-hidden rounded-full border-4 border-background ">
                <Avatar className="h-full w-full">
                  <AvatarSvg />
                </Avatar>
              </div>
              <div
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-2xl border-4 border-background bg-emerald-500"
                aria-label="Online status: Active"
                role="status"
              />
            </motion.div>

            <div className="mb-1 sm:mb-2 space-y-0.5 sm:space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight md:text-3xl">{resume.name}</h1>

              <TextLoop interval={5} className="text-sm sm:text-base font-mono text-muted-foreground">
                <span>Full Stack Developer</span>
                <span>MERN Stack developer</span>
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
        <section aria-label="User bio and statistics" className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-mono">{resume.description}</p>
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
    </div>
  );
}
