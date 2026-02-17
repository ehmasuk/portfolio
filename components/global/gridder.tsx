"use client";

import { cn } from "@/lib/utils";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Gridder() {
  return (
    <div>
      <div
        className={cn(
          "absolute -left-[10px] -top-[10px] ",
          "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:left-0 after:w-[3000px] after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",

          "before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-[22px] before:h-[3000px] before:w-[0.01em] before:bg-gray-200 dark:before:bg-white/5 before:-z-1",
        )}
      >
        <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-slate-800 bg-white dark:bg-background" />
      </div>
      <div
        className={cn(
          "absolute -right-[10px] -top-[10px] ",
          "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-0 after:w-[3000px] after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",

          "before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-[22px] before:h-[3000px] before:w-[0.01em] before:bg-gray-200 dark:before:bg-white/5 before:-z-1",
        )}
      >
        <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-slate-800 bg-white dark:bg-background" />
      </div>
    </div>
  );
}
