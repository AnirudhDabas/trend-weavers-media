import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Trend Weavers Media",
  description:
    "Ready to grow your brand online? Get in touch with Trend Weavers Media.",
  openGraph: {
    title: "Contact | Trend Weavers Media",
    description: "Let's talk growth.",
    url: "https://trendweavers.in/contact",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactPage() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-8 lg:sticky lg:top-28">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                  Contact
                </p>
                <h1
                  className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Let&apos;s talk growth.
                </h1>
                <p className="text-base text-muted-foreground leading-[1.7]">
                  Whether you have a brief ready or just a rough idea, we would
                  love to hear from you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:trendweaversmedia@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-teal transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#00C4CC"
                      strokeWidth="1.6"
                      className="w-4 h-4"
                    >
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                      <path d="M2 6l8 5 8-5" />
                    </svg>
                  </div>
                  trendweaversmedia@gmail.com
                </a>
                <a
                  href="https://instagram.com/trendweaversmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-teal transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C4CC"
                      strokeWidth="1.8"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="0.5"
                        fill="#00C4CC"
                        stroke="none"
                      />
                    </svg>
                  </div>
                  @trendweaversmedia
                </a>
                <a
                  href="https://linkedin.com/company/trend-weavers-media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-teal transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C4CC"
                      strokeWidth="1.8"
                      className="w-4 h-4"
                    >
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  Trend Weavers Media
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <div className="bg-surface rounded-2xl border border-border p-8 lg:p-10">
              <h2
                className="text-xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
