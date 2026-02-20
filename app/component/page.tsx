import ComponentCard from "@/components/component/component-card";
import GridSection from "@/components/global/grid-section";
import { getAllComponents } from "@/lib/get-all-components";
import { ComponentCardType } from "@/types";
import { Metadata } from "next";

const allComponents: ComponentCardType[] = getAllComponents();

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of beautiful and reusable UI components",
};

function page() {
  return (
    <GridSection className="border-x-[0.01rem] border-gray-200 dark:border-white/5">
      <p className="section-title mb-2">Components</p>
      <p className="text-muted-foreground mb-6">A collection of beautiful and reusable UI components</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {allComponents.map((component: ComponentCardType) => (
          <ComponentCard key={component.slug} title={component.title} description={component.description} image={component.image} slug={component.slug} />
        ))}
      </div>
    </GridSection>
  );
}

export default page;
