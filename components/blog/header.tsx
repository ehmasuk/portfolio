"use client";

import GridSection from "@/components/global/grid-section";
import Tag from "@/components/global/tag";
import { Button } from "@/components/ui/button";
import { BlogType } from "@/types";
import { ArrowLeft02Icon, Calendar04Icon, Clock01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type Props = Pick<BlogType, "image" | "title" | "description" | "date" | "readingTime" | "tags" | "category">;

function Header({ image, title, description, date, readingTime, tags, category }: Props) {
  return (
    <header>
      <GridSection>
        <div className="flex flex-col gap-4">
          <Link href={`/${category}`} className="inline-block w-fit">
            <Button variant="ghost" className="flex items-center font-medium text-muted-foreground font-mono">
              <HugeiconsIcon icon={ArrowLeft02Icon} />
              {category === "blog" ? "Back to Blogs" : "Back to Components"}
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl text-black dark:text-white font-bold leading-tight">{title}</h1>
          <p className="md:text-lg">{description}</p>

          <div className="flex flex-wrap items-center text-muted-foreground font-mono text-sm gap-4">
            <div className="flex items-center gap-1.5 font-mono">
              <HugeiconsIcon icon={Calendar04Icon} className="size-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <HugeiconsIcon icon={Clock01FreeIcons} className="size-3" />
              <span>{readingTime} read</span>
            </div>
          </div>

          <motion.div layoutId={image} className="relative aspect-video w-full overflow-hidden rounded-xl brand-border">
            <Image src={image} alt={title} fill className="object-cover" priority />
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </GridSection>
    </header>
  );
}

export default Header;
