"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Props {
  title: string;
  description: string;
  dates: string;
  image: string;
}

export function ProjectCard({ title, description, dates, image }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#222225] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-md p-6 border">
        <CardItem translateZ="50" className="text-md font-medium text-black dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-gray-700 dark:text-zinc-300 text-sm text-justify leading-relaxed mt-1">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2">
          <img src={image} height="1000" width="1000" className="h-30 w-full object-cover rounded-md group-hover/card:shadow-xl" alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="a" href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Live demo →
          </CardItem>
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Source code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
