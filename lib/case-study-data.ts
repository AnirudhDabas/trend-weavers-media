export interface CaseStudy {
  id: string;
  category: string;
  client: string;
  challenge: string;
  result: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "lifestyle-brand-social",
    category: "Social Media Management",
    client: "Delhi-based lifestyle brand",
    challenge:
      "Struggling to grow beyond 2,000 followers with inconsistent posting.",
    result: "Grew from 2K to 18K followers in 4 months",
    description:
      "A complete content strategy overhaul: new formats, optimized posting cadence, and community engagement protocols that turned passive followers into active brand advocates.",
  },
  {
    id: "saas-seo",
    category: "SEO Strategy",
    client: "B2B SaaS startup",
    challenge: "Zero organic search presence after 18 months of operation.",
    result: "300% increase in organic traffic in 6 months",
    description:
      "Starting from a full technical audit, we rebuilt their keyword strategy, fixed 40+ on-page issues, and launched a targeted content program that now drives qualified leads daily.",
  },
  {
    id: "d2c-paid-ads",
    category: "Paid Advertising",
    client: "D2C fashion brand",
    challenge:
      "High ad spend with inconsistent returns and no testing framework.",
    result: "3.2x ROAS on Meta campaigns within 60 days",
    description:
      "We restructured their campaign architecture, built a creative testing system, and shifted the targeting strategy to let the algorithm work properly. It resulted in their best-performing quarter.",
  },
];
