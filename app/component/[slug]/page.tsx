import GridSection from "@/components/global/grid-section";
import { getAllComponents } from "@/lib/get-all-components";
import { getSingleComponent } from "@/lib/get-single-component";
import { ComponentType } from "@/types";
import rehypeHighlight from "@shikijs/rehype";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import ComponentPreview from "@/components/component/component-preview";
import Tag from "@/components/global/tag";
import { Button } from "@/components/ui/button";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((component) => ({
    slug: component.slug,
  }));
}

const components = {
  ComponentPreview,
};

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const component: ComponentType | null = getSingleComponent(slug);

  if (!component) {
    return notFound();
  }

  const mdxStyle = "prose dark:prose-invert prose-ul:space-y-2 prose-ul:pl-0 prose-li:list-none prose-li:pl-5";

  return (
    <article>
      <header>
        <GridSection>
          <div className="flex flex-col gap-4">
            <Link href={`/component`} className="inline-block w-fit">
              <Button variant="ghost" className="flex items-center font-medium text-muted-foreground font-mono">
                <HugeiconsIcon icon={ArrowLeft02Icon} />
                Back to Components
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl text-black dark:text-white font-bold leading-tight">{component.title}</h1>
            <p className="md:text-lg">{component.description}</p>

            <div className="flex flex-wrap gap-2">
              {component.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </GridSection>
      </header>

      {/* mdx content */}
      <GridSection>
        <div className={mdxStyle}>
          <MDXRemote
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypeHighlight,
                    {
                      theme: "github-dark",
                    },
                  ],
                ],
              },
            }}
            source={component.content}
          />
        </div>
      </GridSection>
    </article>
  );
}
