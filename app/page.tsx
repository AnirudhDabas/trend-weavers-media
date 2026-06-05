import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Trend Weavers Media | Digital Marketing Agency",
  description:
    "Data-driven digital marketing agency helping brands grow their presence, leads, and client revenue online.",
  openGraph: {
    title: "Trend Weavers Media | Digital Marketing Agency",
    description:
      "Data-driven digital marketing agency helping brands grow online.",
    url: "https://trendweavers.in",
    siteName: "Trend Weavers Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowWeWork />
      <CaseStudyTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
