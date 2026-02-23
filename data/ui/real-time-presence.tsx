"use client";

import { cn } from "@/lib/utils";
import { Cursor02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const images = [
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg",
  "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611722.jpg",
  "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611759.jpg",
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg",
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671120.jpg",
  "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg",
];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Box = ({ position }: { position: number }) => {
  const imagePositons = [2, 3, 5, 6, 8, 10, 11];

  const [scope, animate] = useAnimate();

  const animateImages = () => {
    animate("#avatar", { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.1, delay: getRandom(0, 10), repeat: Infinity, repeatDelay: 10, repeatType: "mirror" });
  };

  useEffect(() => {
    animateImages();
  }, []);

  return (
    <motion.div
      ref={scope}
      className={cn(
        "rounded-lg size-10 ring ring-inset ring-black/10 dark:ring-white/10 overflow-hidden p-[3px] bg-background",
        (position === 1 || position === 12) && "col-span-2 w-auto",
        (position === 4 || position === 7) && "row-span-2 h-auto",
        imagePositons.includes(position) && "outline outline-black/5 dark:outline-white/5",
        position === 9 && "outline outline-black/5 dark:outline-white/5 bg-gray-100 dark:bg-white/5 duration-300",
      )}
    >
      <motion.div id="avatar" initial={{ opacity: 0 }} className="grid place-items-center h-full w-full">
        {imagePositons.includes(position) && <img src={images[imagePositons.indexOf(position)]} key={position} alt="Avatar" className="object-cover rounded-md " />}
        {position === 9 && <div className="w-full h-full bg-blue-600 text-[10px] grid place-items-center font-medium rounded-md text-white">EH</div>}
      </motion.div>
    </motion.div>
  );
};

export const RealTimePresence = () => {
  return (
    <div className="relative group overflow-hidden max-w-[400px] mx-auto rounded-md p-8 bg-white/50 dark:bg-zinc-950/50 border border-black/5 dark:border-white/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0_0_1px_1px_rgba(255,255,255,0.1)] grid place-items-center">
      {/* The Grid */}
      <div className="grid grid-cols-4 grid-rows-4 gap-1 relative mx-auto z-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <Box key={index} position={index + 1} />
        ))}

        {/* --- Cursor --- */}
        <motion.data initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div
            initial={{ x: 100, y: 80 }}
            animate={{ y: [100, 85, 100] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-1/2 top-7 flex flex-col items-start justify-center"
          >
            <HugeiconsIcon icon={Cursor02Icon} className="size-4 fill-white dark:fill-black text-black/60 dark:text-white/60" />
            <div className="ring ring-inset ring-black/20 dark:ring-white/20 bg-white dark:bg-black/10 text-[10px] px-2 rounded-lg ml-4 text-black dark:text-white py-0.5">Bento</div>
          </motion.div>
        </motion.data>
      </div>

      <div className="mt-6 flex flex-col">
        <h3 className="font-semibold text-lg text-black dark:text-white">Real-time Presence</h3>
        <p className="text-muted-foreground text-sm">Dynamic avatar animations and cursor that bring your workspace to life.</p>
      </div>

      {/* background */}
      {/* background */}
      <div
        className="absolute inset-0 rounded-md -z-10 [--grid-line:rgba(0,0,0,0.1)] dark:[--grid-line:rgba(255,255,255,0.1)]"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      />
    </div>
  );
};
