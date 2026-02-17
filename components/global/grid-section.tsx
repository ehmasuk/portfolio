import { cn } from "@/lib/utils";
import React from "react";
import { Gridder } from "./gridder";

function GridSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("sm:p-6 p-4 gridder-section", className)}>
      {children}
      <Gridder />
    </div>
  );
}

export default GridSection;
