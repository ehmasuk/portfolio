"use client";

import { Edit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function TypewriterEffect() {
  const textToType = "Building something beautiful together...";

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < textToType.length) {
            setCurrentText(textToType.slice(0, currentText.length + 1));
          } else {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 30 : 70 + Math.random() * 30,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textToType]);

  return (
    <div className="relative w-full max-w-[280px] bg-white/40 dark:bg-black/20 rounded-xl border border-black/5 dark:border-white/5 p-4 min-h-[140px] shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-3 border-b border-black/5 dark:border-white/5 pb-2">
        <HugeiconsIcon icon={Edit02Icon} size={12} className="text-muted-foreground" />
        <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Draft</span>
      </div>

      <div className="relative text-sm leading-relaxed text-black/80 dark:text-white/80 wrap-break-word">
        <span className="inline-block">
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-0.5 inline-block h-[1em] w-[2px] bg-violet-500 align-middle"
          />
        </span>
      </div>
    </div>
  );
}

export function Typewriter() {
  return (
    <motion.div
      className="bg-white/50 dark:bg-black/40 rounded-md p-8 border border-gray-200/50 dark:border-white/10 min-h-[300px] flex flex-col shadow-[inset_-12px_-8px_40px_#46464620] max-w-[400px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "circOut" }}
      data-clickable
    >
      <div className="flex-1 flex items-center justify-center">
        <TypewriterEffect />
      </div>
      <div className="mt-6 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-lg text-black dark:text-white">Write your dreams</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-snug">Writing is the best way to express your thoughts</p>
      </div>
    </motion.div>
  );
}

export default Typewriter;
