import { cn } from "@/lib/utils";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function GridSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("sm:p-6 p-4 gridder-section", className)}>
      {children}


      {/* grid lines */}
      <div>
        <div
          className={cn(
            "absolute sm:-left-3 -left-2 sm:-top-3 -top-2",
            "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:left-0 after:w-[3000px] after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",

            "before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-[22px] before:h-[3000px] before:w-[0.01em] before:bg-gray-200 dark:before:bg-white/5 before:-z-1",
          )}
        >
          <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-slate-800 bg-white dark:bg-background" />
        </div>
        <div
          className={cn(
            "absolute sm:-right-3 -right-2 sm:-top-3 -top-2",
            "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-0 after:w-[3000px] after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",

            "before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-[22px] before:h-[3000px] before:w-[0.01em] before:bg-gray-200 dark:before:bg-white/5 before:-z-1",
          )}
        >
          <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-slate-800 bg-white dark:bg-background" />
        </div>
      </div>
    </div>
  );
}

export default GridSection;
