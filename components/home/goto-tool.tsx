import { ReactNode } from "react";
import GridSection from "../global/grid-section";
import { DockerIcon, ExpressIcon, JestIcon, MongooseIcon, NextjsIcon, NodejsIcon, NotionIcon, PostgresIcon, PostmanIcon, ReactIcon, TailwindcssIcon, TypescriptIcon } from "../global/svg-icons";
import MagnetBackground from "../ui/magnet-background";

type BrandList = {
  name: string;
  icon: ReactNode;
};

export function GotoTool() {
  const brandListTop: BrandList[] = [
    {
      name: "Typescript",
      icon: <TypescriptIcon className="size-8 dark:text-white/90 text-black" />,
    },

    {
      name: "Nextjs",
      icon: <NextjsIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "React",
      icon: <ReactIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "NodeJs",
      icon: <NodejsIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "Tailwindcss",
      icon: <TailwindcssIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "Jest",
      icon: <JestIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "Mongoose",
      icon: <MongooseIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "ExpressJs",
      icon: <ExpressIcon className="size-8 dark:text-white/90" />,
    },
    {
      name: "PostgresSQL",
      icon: <PostgresIcon className="size-8 dark:text-white/90 text-black" />,
    },

    {
      name: "Docker",
      icon: <DockerIcon className="size-8 dark:text-white/90 text-black" />,
    },
    {
      name: "Notion",
      icon: <NotionIcon className="size-8 dark:text-white/90 text-black" />,
    },

    {
      name: "Postman",
      icon: <PostmanIcon className="size-8 dark:text-white/90 text-black" />,
    },
  ];

  return (
    <GridSection>
      <div className="section-title mb-5">Goto Tools</div>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
        <MagnetBackground
          className="bg-zinc-100 dark:bg-white/5 rounded-lg"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {brandListTop.map((brand, index) => (
            <div key={index} data-id={`card-${index}`} className="flex flex-col items-center justify-center gap-2 rounded-lg border px-3 py-4 text-center">
              <div className="flex justify-center mb-2">{brand.icon}</div>
              <span className="text-sm text-slate-700 dark:text-slate-300 text-mono">{brand.name}</span>
            </div>
          ))}
        </MagnetBackground>
      </div>
    </GridSection>
  );
}
