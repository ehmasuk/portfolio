import { BlogCard } from "@/components/blog/blog-card";
import GridSection from "@/components/global/grid-section";
import { getAllBlogs } from "@/lib/get-all-blogs";
import { BlogCardType } from "@/types";
import { Metadata } from "next";

const allBlogs: BlogCardType[] = getAllBlogs();

export const metadata: Metadata = {
  title: "Blogs",
  description: "A collection of articles on development, design, and ideas",
};

function page() {
  return (
    <GridSection className="border-x-[0.01rem] border-gray-200 dark:border-white/5">
      <p className="section-title mb-2">Blogs</p>
      <p className="text-muted-foreground mb-6">A collection of articles on development, design, and ideas</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {allBlogs.map((blog: BlogCardType) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            readingTime={blog.readingTime}
            tags={blog.tags}
            image={blog.image}
            slug={blog.slug}
            category={blog.category}
          />
        ))}
      </div>
    </GridSection>
  );
}

export default page;
