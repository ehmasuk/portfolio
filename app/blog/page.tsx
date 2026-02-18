import { BlogCard } from "@/components/blog/blog-card";
import GridSection from "@/components/global/grid-section";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { getAllBlogs } from "@/lib/get-all-blogs";
import { BlogCardType } from "@/types";
import { Search } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const allBlogs: BlogCardType[] = getAllBlogs();

function page() {
  return (
    <GridSection className="border-x-[0.01rem] border-gray-200 dark:border-white/5">
      <p className="section-title mb-2">Blogs</p>
      <p className="text-muted-foreground mb-6">A collection of articles on development, design, and ideas</p>
      <InputGroup className="rounded-md h-10 border-gray-300 dark:border-white/5">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <HugeiconsIcon icon={Search} />
        </InputGroupAddon>
      </InputGroup>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {allBlogs.map((blog: BlogCardType) => (
          <BlogCard key={blog.slug} title={blog.title} description={blog.description} date={blog.date} readingTime={blog.readingTime} tags={blog.tags} image={blog.image} slug={blog.slug} isPublished={blog.isPublished} />
        ))}
      </div>
    </GridSection>
  );
}

export default page;
