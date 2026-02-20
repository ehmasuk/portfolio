"use client";

import GridSection from "@/components/global/grid-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96],
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};



const ghostVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 15,
    rotate: -5,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  hover: {
    scale: 1.1,
    y: -10,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      rotate: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
  floating: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
};

export default function NotFound() {
  return (
    <GridSection className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            <motion.span className="text-[80px] md:text-[120px] font-bold">
              4
            </motion.span>
            <motion.div variants={ghostVariants} whileHover="hover" animate={["visible", "floating"]}>
              <Image src="/ghost.png" alt="Ghost" width={120} height={120} className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain select-none" draggable="false" priority />
            </motion.div>
            <motion.span className="text-[80px] md:text-[120px] font-bold">
              4
            </motion.span>
          </div>

          <motion.h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" variants={itemVariants}>
            Boo! Page missing!
          </motion.h1>

          <motion.p className="text-lg md:text-xl mb-8 md:mb-12 opacity-50 font-mono" variants={itemVariants}>
            Whoops! This page must be a ghost - it&apos;s not here!
          </motion.p>

          <Link href="/">
            <Button size="lg">
              <HugeiconsIcon icon={ArrowLeft01FreeIcons} />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </AnimatePresence>
    </GridSection>
  );
}
