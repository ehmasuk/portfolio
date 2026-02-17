"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { setTheme, theme } = useTheme();

  if (!mounted) return null;

  return (
    <>
      <Button variant="ghost" size="icon-sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} name="theme">
        <Icon isDark={theme === "dark"} />
      </Button>
    </>
  );
}

const sunPath =
  "M11.578 3.512a6.307 6.307 0 0 0 8.91 8.91a.45.45 0 0 1 .466-.095c.176.067.29.24.275.428A9.255 9.255 0 1 1 5.461 5.45a9.22 9.22 0 0 1 5.784-2.68a.42.42 0 0 1 .428.275c.06.16.02.34-.095.466Z";

const moonPath = "M12 5V3m0 18v-2m4.95-11.95l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2m11.95 4.95l1.414 1.414M5.636 5.636L7.05 7.05";

const Icon = ({ isDark }: { isDark: boolean }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className={cn(isDark ? "size-5" : "size-4")} viewBox="0 0 24 24">
        <motion.g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={false}
          animate={{
            rotate: isDark ? 0 : 360,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {isDark && <motion.circle cx={12} cy={12} r={3.5} />}
          <motion.path strokeLinecap="round" d={isDark ? moonPath : sunPath} />
        </motion.g>
      </svg>
    </>
  );
};
