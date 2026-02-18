import { BlogCardType } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "data/blog");

export function getAllBlogs(): BlogCardType[] {
  const files = fs.readdirSync(blogsDirectory);

  // get all .mdx files in data/blog directory then use gray-matter to convert the blogs to a formated array and return all blogs like an API

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(blogsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContent);

    const result: BlogCardType = {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      readingTime: data.readingTime,
      tags: data.tags,
      image: data.image,
      isPublished: data.isPublished,
    };

    return result;
  });
}
