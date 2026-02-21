"use client";

import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { CodeBlock } from "./code-block";

export type InstallationBlockProps = {
  packages: string;
};

export const InstallationBlock = ({ packages }: InstallationBlockProps) => {
  const tabs = [
    {
      id: "npm",
      label: "npm",
      command: `npm install ${packages}`,
    },
    {
      id: "pnpm",
      label: "pnpm",
      command: `pnpm add ${packages}`,
    },
    {
      id: "yarn",
      label: "yarn",
      command: `yarn add ${packages}`,
    },
  ];

  return (
    <div className="w-full not-prose">
      <Tabs defaultValue="npm" size="sm">
        <TabsList indicatorColor="#fff" className="max-w-[200px]" items={tabs} />
        <div className="mt-2">
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <CodeBlock language="bash" filename={tab.id} code={tab.command} showLineNumbers={false} expanded />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
