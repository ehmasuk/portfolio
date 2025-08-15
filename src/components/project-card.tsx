import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, link, image, links, className }: Props) {
  return (
    <Card className={"flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full"}>
      <Link href={href || "#"} className={cn("block cursor-pointer", className)}>
        {image && <Image src={image} alt={title} width={500} height={300} className="h-40 w-full overflow-hidden object-cover object-top" />}
      </Link>
      <CardHeader className="px-3">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <Markdown className="text-gray-700 dark:text-zinc-300 text-sm">{description}</Markdown>
        </div>
      </CardHeader>

      <CardFooter className="px-3 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="bg-[#18181B] text-white dark:text-[#18181B] dark:bg-gray-100 text-xs">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
