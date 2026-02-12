"use client";

import { cn } from "@/lib/utils";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { HTMLAttributes } from "react";

type Props = {
  name: string;
  description?: string;
  icon: IconSvgElement;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const IconButton = ({ className, name, description, icon, ...props }: Props) => {
  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  return (
    <div className={cn("group relative flex items-center justify-center -space-x-2", className)} {...props}>
      <motion.div
        style={{ translateX, rotate }}
        className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 flex-col items-center rounded-md bg-slate-900 dark:bg-white px-3 py-1 text-xs group-hover:flex"
      >
        <p className="whitespace-nowrap text-sm text-white dark:text-slate-900">{name}</p>
        {description && <p className="whitespace-nowrap text-xs text-white/50 dark:text-slate-900/50">{description}</p>}
      </motion.div>
      <div
        className="border dark:border-2 hover:bg-gray-900/5 group duration-500 cursor-pointer rounded-lg border-slate-900/20 dark:border-white/20 size-8 grid place-items-center dark:hover:bg-white/10 dark:hover:text-white"
        onMouseMove={(e) => x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)}
      >
        <HugeiconsIcon icon={icon} strokeWidth={2} className="md:size-4.5 size-4 text-black/90 group-hover:text-black dark:text-white/90 dark:group-hover:text-white" />
      </div>
    </div>
  );
};
