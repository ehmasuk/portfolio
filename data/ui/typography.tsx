"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const characters = [
  { char: "Aa", font: "font-serif" },
  { char: "Gg", font: "font-sans" },
  { char: "Rr", font: "font-serif" },
  { char: "Tt", font: "font-mono" },
];

function TypeTester() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % characters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full min-h-[160px]">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col items-center gap-2"
      >
        <span className={cn(characters[index].font, "text-7xl md:text-8xl text-black dark:text-white tracking-tighter")}>{characters[index].char}</span>
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "easeInOut" }} className="h-px bg-primary/20 w-full" />
      </motion.div>
    </div>
  );
}

export function Typography() {
  return (
    <motion.div
      className="bg-white/50 dark:bg-black/40 rounded-md p-8 border border-gray-200/50 dark:border-white/10 min-h-[300px] flex flex-col shadow-[inset_-12px_-8px_40px_#46464620] max-w-[400px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "circOut" }}
      data-clickable
    >
      <div className="flex-1">
        <TypeTester />
      </div>
      <div className="mt-6 flex flex-col">
        <h3 className="font-semibold text-lg text-black dark:text-white">Typography</h3>
        <p className="text-muted-foreground text-sm">Responsive and beautiful type systems that scale perfectly across all viewports.</p>
      </div>
    </motion.div>
  );
}
