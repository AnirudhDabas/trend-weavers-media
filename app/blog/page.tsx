import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Trend Weavers Media",
  description:
    "Marketing insights, tactics, and takes from the team building brands online.",
  openGraph: {
    title: "Blog | Trend Weavers Media",
    description: "Trends, tactics, and takes from the Trend Weavers team.",
    url: "https://trendweavers.in/blog",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">Insights</p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Trends, tactics, and takes.
            </h1>
            <p className="text-base text-muted-foreground leading-[1.7] max-w-lg">
              Marketing insights from the team building brands online.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-surface rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:border-teal transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,196,204,0.2)]">
                    <div className="p-8 flex flex-col gap-4 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center h-6 px-3 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-wide">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h2
                        className="text-lg font-bold text-foreground leading-snug group-hover:text-teal transition-colors"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="px-8 pb-7">
                      <span className="text-sm font-semibold text-teal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
