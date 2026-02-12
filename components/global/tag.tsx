import { cn } from "@/lib/utils";

function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("inline-block px-2 py-0.5 text-[12px] font-mono text-slate-900 dark:text-slate-300 bg-gray-50 dark:bg-background/90 brand-border rounded", className)}>{children}</div>;
}

export default Tag;
