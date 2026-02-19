"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggler } from "../global/theme-toggler";

function Header() {
  const pathname = usePathname();

  return (
    <div className="relative w-full mx-auto border-x-[0.01rem] overflow-hidden rounded border-gray-200 dark:border-white/5 flex gap-4 items-center justify-end py-14 px-6">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="flex gap-4 items-center bg-background px-2 rounded border-[0.01rem] border-gray-200 dark:border-white/5 text-sm"
      >
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
      </motion.div>

      {/* background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(330deg,#25252526_0px_1px,transparent_1px_10px)] dark:bg-[repeating-linear-gradient(330deg,#ffffff21_0px_1px,transparent_1px_10px)] -z-10"></div>
    </div>
  );
}

export default Header;
