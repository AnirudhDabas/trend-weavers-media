import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services | Trend Weavers Media",
  description:
    "Six digital marketing disciplines, one focused team. Social media, SEO, paid ads, content, brand strategy, and analytics.",
  openGraph: {
    title: "Services | Trend Weavers Media",
    description: "Everything your brand needs to grow online.",
    url: "https://trendweavers.in/services",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    id: "social-media",
    name: "Social Media Management",
    description:
      "We handle everything from content calendar planning to daily posting, community management, and performance analysis. Your social channels stop being a chore and start being a growth engine. We manage the work so you can focus on running your business.",
    deliverables: [
      "Monthly content calendar",
      "Daily posting across platforms",
      "Community engagement and DM management",
      "Monthly analytics report",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <rect x="6" y="6" width="22" height="22" rx="4" />
        <rect x="36" y="6" width="22" height="22" rx="4" />
        <rect x="6" y="36" width="22" height="22" rx="4" />
        <rect x="36" y="36" width="22" height="22" rx="4" />
      </svg>
    ),
  },
  {
    id: "content-marketing",
    name: "Content Marketing & Creation",
    description:
      "Content that ranks in search, resonates with your audience, and converts browsers into buyers. We produce blog posts, video scripts, carousels, infographics, and more, all mapped to your brand voice and audience intent.",
    deliverables: [
      "SEO-optimized blog posts",
      "Short-form video scripts",
      "Carousel and infographic content",
      "Brand voice guide",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M8 12h48M8 24h32M8 36h40M8 48h24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seo",
    name: "SEO Strategy",
    description:
      "Getting found online is non-negotiable. We run deep technical audits, build your keyword strategy from scratch, and execute link-building campaigns that move you up the rankings. No black-hat tactics, no shortcuts.",
    deliverables: [
      "Technical SEO audit",
      "Keyword and competitor research",
      "On-page and off-page optimization",
      "Monthly rankings and traffic report",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <circle cx="28" cy="28" r="18" />
        <path d="M42 42l14 14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "paid-ads",
    name: "Paid Ad Campaigns",
    description:
      "We plan, build, and manage ad campaigns across Google, Meta, and more. Every rupee of ad spend is tracked, tested, and optimized. We don't just run ads. We build a system that keeps improving.",
    deliverables: [
      "Campaign strategy and setup",
      "Ad creative development",
      "A/B testing framework",
      "Weekly performance reports",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M8 48V32l16-16 16 16V48" />
        <path d="M56 48V28l-16-12" />
        <path d="M8 48h48" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "brand-strategy",
    name: "Brand Strategy & Identity",
    description:
      "Before anyone sees your content, they see your brand. We help you define what you stand for, what you sound like, and how you show up everywhere, from your Instagram bio to your pitch deck.",
    deliverables: [
      "Brand audit and positioning strategy",
      "Visual identity guidelines",
      "Messaging and tone-of-voice framework",
      "Competitor landscape analysis",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <polygon points="32,6 40,24 60,24 44,36 50,56 32,44 14,56 20,36 4,24 24,24" />
      </svg>
    ),
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    description:
      "No vanity metrics. We set up proper tracking infrastructure, build dashboards you will actually use, and report on what matters: organic reach, lead generation, and revenue attribution. You'll always know what's working.",
    deliverables: [
      "GA4 and Meta Pixel setup",
      "Custom reporting dashboard",
      "Monthly performance report",
      "Quarterly strategy review",
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-16 sm:h-16" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M8 52V36l16-20 16 20v16" />
        <path d="M56 52V28l-16-12" />
        <path d="M8 52h48" strokeLinecap="round" />
        <path d="M24 52V40h16v12" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">What We Do</p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Everything your brand needs to grow online.
            </h1>
            <p className="text-base text-muted-foreground leading-[1.7] max-w-lg">
              Six disciplines. One focused team. Zero guesswork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services alternating */}
      <section className="bg-surface">
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`border-t border-border ${i % 2 === 0 ? "bg-surface" : "bg-background"}`}
          >
            <div className="max-w-[1280px] mx-auto px-6 py-20 lg:py-24">
              <FadeIn>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                    i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ direction: i % 2 !== 0 ? "rtl" : "ltr" }}
                >
                  <div className="flex justify-center" style={{ direction: "ltr" }}>
                    <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl bg-teal/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-5" style={{ direction: "ltr" }}>
                    <h2
                      className="text-3xl lg:text-4xl font-bold text-foreground"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {service.name}
                    </h2>
                    <p className="text-base text-muted-foreground leading-[1.7]">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2.5 mt-1">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 mt-0.5 shrink-0">
                            <circle cx="10" cy="10" r="9" fill="#00C4CC" fillOpacity="0.15" />
                            <path d="M6 10l3 3 5-5" stroke="#00C4CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal/80 transition-colors mt-2"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom note CTA */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-base text-muted-foreground mb-5">
              Not sure which service fits your goals? Let&apos;s figure it out together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center h-11 px-7 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-all hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Talk to Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
