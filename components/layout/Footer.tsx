import Link from "next/link";
import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const services = [
  { label: "Social Media Management", href: "/services" },
  { label: "Content Marketing", href: "/services" },
  { label: "SEO Strategy", href: "/services" },
  { label: "Paid Ad Campaigns", href: "/services" },
  { label: "Brand Strategy & Identity", href: "/services" },
  { label: "Analytics & Reporting", href: "/services" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/Digital Marketing Agency Modern Logo.png"
                width={40}
                height={40}
                alt="Trend Weavers Media"
                className="rounded-lg"
              />
              <span className="font-bold text-[17px] text-foreground" style={{ fontFamily: "var(--font-jakarta)" }}>
                Trend Weavers
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              Weaving tomorrow&apos;s trends today.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://instagram.com/trendweaversmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com/company/trend-weavers-media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-muted-foreground hover:text-teal transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-muted-foreground hover:text-teal transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:trendweaversmedia@gmail.com" className="text-sm text-muted-foreground hover:text-teal transition-colors">
                  trendweaversmedia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/trendweaversmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-teal transition-colors"
                >
                  @trendweaversmedia
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/trend-weavers-media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-teal transition-colors"
                >
                  Trend Weavers Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2025 Trend Weavers Media</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <span>Built with Next.js + Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
