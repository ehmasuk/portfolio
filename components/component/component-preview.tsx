import { componentRegistry, ComponentRegistryKey } from "@/data/component-registry";
import { SourceCodeIcon, ViewIcon } from "@hugeicons/core-free-icons";
import fs from "fs";
import path from "path";
import { CodeBlock } from "../global/code-block";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";

type Props = {
  componentName: ComponentRegistryKey;
  filename: string;
  onlyCode?: boolean;
};

async function ComponentPreview({ componentName, filename, onlyCode = false }: Props) {
  const Component = componentRegistry[componentName];

  if (!Component) {
    return <div>Something went wrong</div>;
  }

  const filePath = path.join(process.cwd(), `data/ui/${filename}.tsx`);
  const code = fs.readFileSync(filePath, "utf8");

  return (
    <div className="not-prose">
      {onlyCode ? (
        <CodeBlock language="tsx" filename={`${filename}.tsx`} code={code} />
      ) : (
        <Tabs defaultValue="preview">
          <TabsList
            indicatorColor="#fff"
            className="max-w-[200px]"
            items={[
              { id: "preview", label: "Preview", icon: ViewIcon },
              { id: "code", label: "Code", icon: SourceCodeIcon },
            ]}
          />
          <div className="mt-2">
            <TabsContent value="preview" className="rounded-md brand-border grid place-items-center p-6">
              <Component />
            </TabsContent>
            <TabsContent value="code">
              <CodeBlock filename={`${filename}.tsx`} code={code} />
            </TabsContent>
          </div>
        </Tabs>
      )}
    </div>
  );
}

export default ComponentPreview;
