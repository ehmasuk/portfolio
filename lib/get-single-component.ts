import { ComponentType } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogDirectory = path.join(process.cwd(), "data/mdx-docs");

export function getSingleComponent(slug: string): ComponentType | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContent);

  const result: ComponentType = {
    title: data.title,
    slug: data.slug,
    date: data.date,
    description: data.description,
    tags: data.tags,
    image: data.image,
    category: data.category,
    content,
  };

  if (result.category !== "component") {
    return null;
  }

  return result;
}
