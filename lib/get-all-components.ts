import { ComponentCardType } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "data/mdx-docs");

export function getAllComponents(): ComponentCardType[] {
  const files = fs.readdirSync(blogsDirectory);

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const fullPath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      const result: ComponentCardType = {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image,
        category: data.category,
      };

      return result;
    })
    .filter((post) => post.category === "component")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
