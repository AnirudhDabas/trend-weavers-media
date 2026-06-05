import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About | Trend Weavers Media",
  description:
    "Trend Weavers Media was built from zero by two students who figured out what actually drives growth online. Meet the team.",
  openGraph: {
    title: "About | Trend Weavers Media",
    description: "Built by students. Trusted by brands.",
    url: "https://trendweavers.in/about",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const milestones = [
  { year: "2023", label: "Founded" },
  { year: "2023", label: "First 5 clients" },
  { year: "2024", label: "Team grew to 10" },
  { year: "2024", label: "$85K+ client revenue" },
  { year: "2025", label: "Expanding to paid media" },
];

const values = [
  {
    title: "Data First",
    body: "We don't post for likes. We post for results. Every decision we make is tied back to a metric that matters to your business.",
  },
  {
    title: "Custom Always",
    body: "Cookie-cutter strategies don't work. We build every plan from scratch, because every brand is different. You'll never get a recycled playbook.",
  },
  {
    title: "Radical Transparency",
    body: "You'll always know exactly what we're doing, why we're doing it, and how it's performing. No surprises, no fluff, no mystery.",
  },
];

const founders = [
  {
    initials: "NN",
    name: "Naman Nakra",
    title: "Co-Founder",
    bio: "Naman shapes the strategy behind Trend Weavers. He connects market insight, brand positioning, and performance thinking to help clients turn strong creative into stronger business results.",
    linkedin: "https://linkedin.com/in/namanvnakra",
  },
  {
    initials: "AD",
    name: "Anirudh Dabas",
    title: "Co-Founder",
    bio: "Anirudh sits at the intersection of engineering, growth, and analytics. He builds the tools and systems that help Trend Weavers move faster, measure better, and deliver real business outcomes.",
    linkedin: "https://linkedin.com/in/anirudh-dabas-ab3998229",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">Our Story</p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Built by students. Trusted by brands.
            </h1>
            <p className="text-base text-muted-foreground leading-[1.7] max-w-xl">
              We started Trend Weavers Media with a simple belief: good marketing should be measurable. We built it from zero, figured out what actually works, and turned that into a system that delivers results for brands worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story — 2-col */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="flex flex-col gap-5 text-base text-muted-foreground leading-[1.8]">
              <p>
                Trend Weavers Media didn&apos;t start in a boardroom. It started with a spreadsheet, a few clients willing to take a chance on two students, and an obsession with figuring out what actually drives growth online.
              </p>
              <p>
                We built the agency from the ground up. No funding, no fancy office, no playbook. Just a team that cared about results and worked until we got them.
              </p>
              <p>
                Today, TWM is a team of 10 content creators, strategists, and analysts who have delivered real, measurable results across social media, SEO, paid advertising, and brand strategy for brands worldwide.
              </p>
              <p>
                We&apos;re still driven by the same thing that got us started: the belief that marketing should move the needle, not just fill a calendar.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={0.15}>
            <div className="relative flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start pb-8 relative">
                  {/* Vertical line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border" />
                  )}
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-teal shrink-0 mt-0.5 z-10" />
                  <div>
                    <p
                      className="text-sm font-mono text-teal font-bold"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {m.year}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Values</p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What We Stand For
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-border rounded-2xl p-8 border-l-4 border-l-teal flex flex-col gap-3">
                  <h3
                    className="text-xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">The Team</p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Meet the Founders
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-background rounded-2xl p-8 border border-border flex flex-col gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg, #00C4CC 0%, #00D4DC 100%)",
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    {f.initials}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {f.name}
                    </h3>
                    <p className="text-sm text-teal font-medium mt-0.5">{f.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{f.bio}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team line */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-[1.7]">
              Behind every campaign is a team of 10 content creators, strategists, and analysts who treat your brand like their own.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
