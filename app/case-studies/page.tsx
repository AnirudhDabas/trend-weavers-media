import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";
import { caseStudies } from "@/lib/case-study-data";

export const metadata: Metadata = {
  title: "Case Studies | Trend Weavers Media",
  description:
    "Real results for real brands. See how Trend Weavers Media drives growth across social media, SEO, and paid advertising.",
  openGraph: {
    title: "Case Studies | Trend Weavers Media",
    description: "Real brands. Real results. Every number here is earned, not estimated.",
    url: "https://trendweavers.in/case-studies",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">Results</p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Real brands. Real results.
            </h1>
            <p className="text-base text-muted-foreground leading-[1.7] max-w-lg">
              Every number here is earned, not estimated.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-6 pb-24 lg:pb-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.id} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-teal hover:shadow-[0_8px_30px_-4px_rgba(0,196,204,0.2)] transition-all duration-300 group">
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <span className="inline-flex items-center h-6 px-3 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-wide w-fit">
                      {cs.category}
                    </span>
                    <p className="text-xs text-muted-foreground">{cs.client}</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;{cs.challenge}&rdquo;</p>
                    <div
                      className="text-3xl font-bold text-teal leading-tight mt-auto"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {cs.result}
                    </div>
                    <p className="text-sm text-muted-foreground leading-[1.7]">{cs.description}</p>
                  </div>
                  <div className="px-8 pb-7">
                    <button className="text-sm font-semibold text-teal hover:text-teal/80 transition-colors group-hover:gap-2 inline-flex items-center gap-1">
                      Read the story →
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-sm text-muted-foreground italic mt-10 text-center max-w-xl mx-auto">
              Client names are kept confidential by default. Want to see results specific to your industry?{" "}
              <a href="/contact" className="text-teal hover:underline">
                Reach out
              </a>{" "}
              and we can walk you through relevant examples.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
