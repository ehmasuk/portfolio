"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggler } from "../global/theme-toggler";
function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <div className={cn("flex gap-4 items-center bg-background px-2 border-t-[0.01rem] md:border-b-0 border-b-[0.01rem] border-l-[0.01rem] py-1 border-gray-100 z-20 dark:border-white/5 text-sm absolute md:bottom-0 md:top-auto top-6 right-0", className)}>
      <Link href="/" className={cn("font-mono text-black dark:text-white hover:text-primary", pathname !== "/" && "text-muted-foreground")}>
        Profile
      </Link>
      <Link href="/blog" className={cn("font-mono text-black dark:text-white hover:text-primary", !pathname.startsWith("/blog") && "text-muted-foreground")}>
        Blogs
      </Link>
      <Link href="/" className={cn("font-mono text-black dark:text-white hover:text-primary", !pathname.startsWith("/components") && "text-muted-foreground")}>
        Components
      </Link>
      <ThemeToggler />
    </div>
  );
}

export default Navigation;
