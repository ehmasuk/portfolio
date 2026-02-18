import { BlogType } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogDirectory = path.join(process.cwd(), "data/blog");

export function getSingleBlog(slug: string): BlogType {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContent);

  const result: BlogType = {
    title: data.title,
    slug: data.slug,
    date: data.date,
    description: data.description,
    content: content,
    readingTime: data.readingTime,
    tags: data.tags,
    image: data.image,
    isPublished: data.isPublished,
  };

  return result;
}
