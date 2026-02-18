"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GridSection from "../global/grid-section";
import { ThemeToggler } from "../global/theme-toggler";

function Header() {
  const pathname = usePathname();

  return (
    <GridSection className="sm:p-0 p-0 -mt-4">
      <motion.div className="relative w-full mx-auto border-b border-gray-100 dark:border-white/5 flex gap-4 items-center justify-end py-10 px-6">
        <Link href="/" className={cn("font-mono font-medium hover:text-primary", pathname !== "/" && "text-muted-foreground")}>
          Profile
        </Link>
        <Link href="/blog" className={cn("font-mono font-medium hover:text-primary", !pathname.startsWith("/blog") && "text-muted-foreground")}>
          Blogs
        </Link>
        {/* <Link href="/" className={cn("font-mono hover:text-primary", pathname !== "/components" && "text-muted-foreground")}>
          Components
        </Link> */}
        <ThemeToggler />

        {/* background */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(330deg,#25252526_0px_1px,transparent_1px_10px)] dark:bg-[repeating-linear-gradient(330deg,#ffffff21_0px_1px,transparent_1px_10px)] -z-10"></div>
      </motion.div>
    </GridSection>
  );
}

export default Header;
