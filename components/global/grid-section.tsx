import { cn } from "@/lib/utils";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function GridSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("sm:p-6 p-4 gridder-section border-x-[0.01rem] border-gray-200 dark:border-white/5 bg-background", className)}>
      {children}

      {/* grid lines */}
      <div>
        <div
          className={cn(
            "absolute sm:-left-3 -left-2 sm:-bottom-3 -bottom-2",
            "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:left-0 after:w-screen after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",


          )}
        >
          <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-white/25 bg-white dark:bg-background" />
        </div>
        <div
          className={cn(
            "absolute sm:-right-3 -right-2 sm:-bottom-3 -bottom-2",
            "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-0 after:w-screen after:h-[0.01em] after:bg-gray-200 dark:after:bg-white/5 after:-z-1",

          )}
        >
          <HugeiconsIcon icon={Add01Icon} className="text-gray-300 sm:size-6 size-4 dark:text-white/25 bg-white dark:bg-background" />
        </div>
      </div>
    </div>
  );
}

export default GridSection;
