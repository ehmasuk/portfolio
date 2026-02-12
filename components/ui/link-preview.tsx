"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { encode } from "qss";
import React from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  colorScheme?: "light" | "dark";
  delay?: number;
} & ({ isStatic: true; imageSrc: string } | { isStatic?: false; imageSrc?: never });

export const LinkPreview = ({ children, url, className, width = 200, height = 125, isStatic = false, imageSrc = "", colorScheme = "dark", delay = 3000 }: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme,
      waitForTimeout: delay,
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": 1200,
      "viewport.height": 800,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <img src={src} width={width} height={height} alt="hidden image" onLoad={() => setIsLoaded(true)} />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger onMouseMove={handleMouseMove} className={cn("text-black dark:text-white", className)} href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content className="origin-(--radix-hover-card-content-transform-origin)" side="top" align="center" sideOffset={10}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl overflow-hidden"
                style={{
                  x: translateX,
                }}
              >
                <div className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800" style={{ fontSize: 0 }}>
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      width: width,
                      height: height,
                    }}
                  >
                    {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" style={{ width, height }} />}
                    <img
                      src={isStatic ? imageSrc : src}
                      width={width}
                      height={height}
                      className={cn("rounded-lg transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0")}
                      alt="preview image"
                      onLoad={() => setIsLoaded(true)}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
