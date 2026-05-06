import { Metadata } from "next";
import Header from "@/components/blog/header";
import GridSection from "@/components/global/grid-section";
import { getAllBlogs } from "@/lib/get-all-blogs";
import { getSingleBlog } from "@/lib/get-single-blog";
import { BlogType } from "@/types";
import rehypeHighlight from "@shikijs/rehype";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getSingleBlog(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
      images: [
        {
          url: blog.image || "/og.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image || "/og.png"],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs
    .filter((blog) => blog.category === "blog")
    .map((blog) => ({
      slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog: BlogType | null = getSingleBlog(slug);

  if (!blog) {
    return notFound();
  }

  const mdxStyle = "prose dark:prose-invert prose-ul:space-y-2 prose-ul:pl-0 prose-li:list-none prose-li:pl-5";

  return (
    <article>
      {/* mdx header */}
      <Header image={blog.image} title={blog.title} description={blog.description} date={blog.date} readingTime={blog.readingTime} tags={blog.tags} category={blog.category} />

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
