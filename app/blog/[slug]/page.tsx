import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost, type BlogSection } from "@/lib/blog-data";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Trend Weavers Media`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://trendweavers.in/blog/${post.slug}`,
      siteName: "Trend Weavers Media",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

function renderSection(section: BlogSection, index: number) {
  if (section.type === "heading") {
    return (
      <h2
        key={index}
        className="text-xl lg:text-2xl font-bold text-foreground mt-8 mb-3"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {section.content as string}
      </h2>
    );
  }
  if (section.type === "list") {
    const items = section.content as string[];
    return (
      <ul key={index} className="flex flex-col gap-2 my-4 pl-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-foreground/80 leading-[1.7]">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 mt-1 shrink-0">
              <circle cx="10" cy="10" r="9" fill="#00C4CC" fillOpacity="0.15" />
              <path d="M6 10l3 3 5-5" stroke="#00C4CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={index} className="text-base text-foreground/80 leading-[1.8] my-4">
      {section.content as string}
    </p>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      {/* Article header */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-teal hover:text-teal/80 transition-colors mb-8"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center h-6 px-3 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-wide">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h1
              className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {post.title}
            </h1>
            <p className="text-base text-muted-foreground leading-[1.7]">{post.excerpt}</p>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <div className="prose-custom">
              {post.content.map((section, i) => renderSection(section, i))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* More posts */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-base font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
              More from the blog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex-1 max-w-xs text-left bg-background rounded-xl border border-border p-5 hover:border-teal transition-colors group"
                  >
                    <span className="text-xs text-teal font-semibold">{p.category}</span>
                    <p className="text-sm font-semibold text-foreground mt-1 leading-snug group-hover:text-teal transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {p.title}
                    </p>
                  </Link>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
