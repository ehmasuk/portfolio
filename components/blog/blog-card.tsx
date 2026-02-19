"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BlogCardType } from "@/types";
import { BookOpen01Icon, Calendar04Icon, Clock01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../global/tag";

export function BlogCard({ title = "", image = "", description = "", date = "", readingTime = "", tags = [], slug, className }: BlogCardType & { className?: string }) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={cn("w-full max-w-[400px]", className)}>
        <Card className="group relative h-full overflow-hidden rounded-md bg-background backdrop-blur-md transition-all duration-300 hover:border-primary/50 p-0 gap-0">
          {/* Image Section */}
          <motion.div layoutId={image} className="relative aspect-video overflow-hidden">
            <Image fill src={image} alt={title} title={title} className="h-full border-b w-full object-cover transition-transform duration-500 group-hover:scale-110" />

            {/* Hover Overlay Action */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 cursor-pointer">
                <HugeiconsIcon icon={BookOpen01Icon} />
                Read
              </button>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col gap-4 p-4">
            <div className="space-y-2">
              <h3 title={title} className="font-semibold text-lg transition-colors group-hover:text-primary line-clamp-2 min-h-14">
                {title}
              </h3>
              <p title={description} className="text-sm text-muted-foreground line-clamp-2 font-mono ">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags?.slice(0, 2).map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
                {tags && tags.length > 2 && <Tag>+{tags.length - 2} more</Tag>}
              </div>
            </div>

            <div className="flex items-center text-sm font-mono justify-between border-t border-gray-200 dark:border-white/5 pt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={Calendar04Icon} className="size-4" />
                <span>{date}</span>
              </div>

              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={Clock01FreeIcons} className="size-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
