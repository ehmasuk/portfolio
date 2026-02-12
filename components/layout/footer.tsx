"use client";

import { NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github, Linkedin } from "lucide-react";
import GridSection from "../global/grid-section";

function Footer() {
  return (
    <GridSection>
      <footer className="flex items-center justify-between">
        <p className="text-sm font-mono text-muted-foreground">Copyright © 2026. All rights reserved.</p>
        <div className="flex items-center justify-center gap-5">
          <a href="#" target="_blank">
            <HugeiconsIcon icon={NewTwitterIcon} className="size-4.5 text-muted-foreground hover:text-slate-900 dark:text-white/90" />
          </a>
          <a href="#" target="_blank">
            <Linkedin className="size-4.5 text-muted-foreground hover:text-slate-900 dark:text-white/90" />
          </a>
          <a href="#" target="_blank">
            <Github className="size-4.5 text-muted-foreground hover:text-slate-900 dark:text-white/90" />
          </a>
        </div>
      </footer>
    </GridSection>
  );
}

export default Footer;
