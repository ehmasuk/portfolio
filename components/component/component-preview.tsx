import { componentRegistry, ComponentRegistryKey } from "@/data/component-registry";
import { SourceCodeIcon, ViewIcon } from "@hugeicons/core-free-icons";
import fs from "fs";
import path from "path";
import { CodeBlock } from "../global/code-block";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";

type Props = {
  name: ComponentRegistryKey;
};

async function ComponentPreview({ name }: Props) {
  const Component = componentRegistry[name];

  if (!Component) {
    return <div>Something went wrong</div>;
  }

  const filePath = path.join(process.cwd(), `data/ui/${name}.tsx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <Tabs defaultValue="preview">
      <TabsList
        indicatorColor="#fff"
        className="max-w-[200px] not-prose"
        items={[
          { id: "preview", label: "Preview", icon: ViewIcon },
          { id: "code", label: "Code", icon: SourceCodeIcon },
        ]}
      />
      <div className="mt-4  not-prose">
        <TabsContent value="preview" className="rounded-md brand-border grid place-items-center p-6">
          <Component />
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock language="tsx" filename={`${name}.tsx`} code={fileContent} />
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default ComponentPreview;
