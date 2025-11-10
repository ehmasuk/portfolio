"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string | JSX.Element;
  sourceLink: string;
  liveLink: string;
  image: string;
  technologies: readonly string[];
}

const gradients = [
  // Vibrant
  "from-blue-400 via-purple-400 to-pink-400",
  "from-yellow-400 via-orange-400 to-red-400",
  "from-pink-400 via-fuchsia-400 to-purple-400",
  "from-indigo-400 via-blue-400 to-cyan-400",

  // Bright
  "from-sky-300 via-cyan-400 to-blue-400",
  "from-rose-400 via-pink-500 to-red-400",
  "from-orange-300 via-amber-400 to-yellow-400",

  // Soft / pastel
  "from-pink-200 via-purple-200 to-indigo-300",
  "from-blue-200 via-sky-300 to-cyan-300",
  "from-green-200 via-emerald-300 to-teal-300",
  "from-yellow-200 via-orange-300 to-red-300",
  "from-fuchsia-200 via-pink-300 to-rose-300",
];
export function ProjectCard({ title, description, sourceLink, image, liveLink, technologies }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#222225] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-md p-6 border">
        <CardItem translateZ="50" className="text-md font-semibold line-clamp-2 text-black dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed mt-1">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full my-2">
          <div className={`w-full h-36 relative overflow-hidden rounded-md bg-gradient-to-br ${gradients[(Math.random() * gradients.length) | 0]}`}>
            <Image src={image} alt={title} fill className="object-contain p-3" />
          </div>
        </CardItem>

        <div>
          {technologies.map((name, id) => {
            return (
              <Badge key={id} className="text-[10px] mr-1">
                {name}
              </Badge>
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-5">
          {sourceLink !== "" ? (
            <CardItem translateZ={20} as="a" target="_blank" href={sourceLink} className="px-2 py-1 rounded bg-[#222225] dark:bg-white dark:text-black text-white text-xs font-medium">
              Source code
            </CardItem>
          ) : (
            <div></div>
          )}

          {liveLink !== "" ? (
            <CardItem translateZ={20} as="a" target="_blank" href={liveLink} className="py-2 inline-flex items-center gap-2 rounded text-xs font-normal dark:text-white">
              <span className="size-1 block rounded-full bg-green-600 animate-ping"></span>
              Live demo →
            </CardItem>
          ) : (
            <div></div>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
