import { cn } from "@/lib/utils";

export function DotBackground() {
  return (
    <div className="flex w-full items-center justify-center absolute inset-0 -z-1 opacity-50">
      <div className={cn("absolute inset-0", "bg-size-[20px_20px]", "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]", "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]")} />
    </div>
  );
}
