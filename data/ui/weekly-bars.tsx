"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const Bar = ({ height, label, delay }: { height: number; label: string; delay: number }) => (
  <div className="flex flex-col items-center gap-2 h-full justify-end group flex-1">
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: `${height}%`, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: delay * 0.1,
      }}
      className="w-8 relative bg-gray-200 dark:bg-gray-900 rounded-tl rounded-tr duration-300 cursor-pointer"
    >
      <div className="absolute -top-7 left-1/2 -translate-x-1/2">
        <motion.span key={height} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-semibold text-gray-500 dark:text-white/70">
          {Math.round(height)}%
        </motion.span>
      </div>
    </motion.div>
    <span className="text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mt-1">{label}</span>
  </div>
);

const ChartAnimation = () => {
  const [data, setData] = useState([45, 75, 50, 85, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(data.map(() => 35 + Math.random() * 60));
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="relative size-full pt-12 px-2 flex items-end justify-between gap-3 h-[180px]">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between px-1 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full border-t border-black/5 dark:border-white/5" />
        ))}
      </div>

      {/* Insight Popup */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute bottom-[95%] right-0 px-2 py-1 rounded bg-gray-50 dark:bg-blue-950/40 border flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
          <span className="text-xs font-medium text-muted-foreground">+14.2% Growth</span>
        </motion.div>
      </AnimatePresence>

      {/* Bars */}
      {data.map((height, i) => (
        <Bar key={i} height={height} label={labels[i]} delay={i} />
      ))}
    </div>
  );
};

export function WeeklyBars() {
  return (
    <motion.div
      className="bg-white/50 dark:bg-black/40 rounded-md p-8 border border-gray-200/50 dark:border-white/10 min-h-[300px] flex flex-col shadow-[inset_-12px_-8px_40px_#46464620] max-w-[400px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "circOut" }}
    >
      <div className="flex-1">
        <ChartAnimation />
      </div>
      <div className="mt-6 flex flex-col">
        <h3 className="font-semibold text-lg text-black dark:text-white">Weekly market trends</h3>
        <p className="text-muted-foreground text-sm">Track market trends and make informed decisions.</p>
      </div>
    </motion.div>
  );
}

export default WeeklyBars;
