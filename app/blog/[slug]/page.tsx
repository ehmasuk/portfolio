import Header from "@/components/blog/header";
import GridSection from "@/components/global/grid-section";
import { getAllBlogs } from "@/lib/get-all-blogs";
import { getSingleBlog } from "@/lib/get-single-blog";
import { BlogType } from "@/types";
import rehypeHighlight from "@shikijs/rehype";
import { MDXRemote } from "next-mdx-remote/rsc";




export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog: BlogType = getSingleBlog(slug);

  const mdxStyle = "prose dark:prose-invert prose-ul:space-y-2 prose-ul:pl-0 prose-li:list-none prose-li:pl-5";

  return (
    <article>

      {/* mdx header */}
      <Header image={blog.image} title={blog.title} description={blog.description} date={blog.date} readingTime={blog.readingTime} tags={blog.tags} />

      {/* mdx content */}
      <GridSection>
        <div className={mdxStyle}>
          <MDXRemote
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
            source={blog.content}
          />
        </div>
      </GridSection>
    </article>
  );
}
