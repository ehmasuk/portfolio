"use client";

import { resume } from "@/data/resume";
import { HugeiconsIcon } from "@hugeicons/react";
import GridSection from "../global/grid-section";

function Footer() {
  return (
    <GridSection>
      <footer className="flex items-center md:justify-between justify-center flex-col md:flex-row gap-5">
        <p className="text-sm font-mono text-muted-foreground">
          Created by <b>ehmasuk</b>
        </p>
        <div className="flex items-center justify-center gap-5">
          {resume.socials.map((social) => (
            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
              <HugeiconsIcon icon={social.icon} strokeWidth={2} className="size-4.5 text-muted-foreground hover:text-slate-900 dark:text-white/90" />
            </a>
          ))}
        </div>
      </footer>
    </GridSection>
  );
}

export default Footer;
