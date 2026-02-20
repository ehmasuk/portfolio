"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const LayoutAnimation = () => {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const layouts = ["grid-cols-2 grid-rows-2", "grid-cols-3 grid-rows-1", "grid-cols-1 grid-rows-3"];

  return (
    <div className="h-full p-2 flex items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} gap-3 w-full max-w-[200px]`} layout transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-primary/20 rounded-md min-h-[30px] border border-primary/10 dark:bg-primary/20 dark:border-primary/10"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export function Layout() {
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
        <LayoutAnimation />
      </div>
      <div className="mt-6 flex flex-col">
        <h3 className="font-semibold text-lg text-black dark:text-white">Smart Grids</h3>
        <p className="text-muted-foreground text-sm">Intelligence-driven layouts that fluidly adapt to any screen environment.</p>
      </div>
    </motion.div>
  );
}
