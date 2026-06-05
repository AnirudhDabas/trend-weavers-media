"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <rect x="3" y="3" width="11" height="11" rx="2" />
        <rect x="18" y="3" width="11" height="11" rx="2" />
        <rect x="3" y="18" width="11" height="11" rx="2" />
        <rect x="18" y="18" width="11" height="11" rx="2" />
      </svg>
    ),
    name: "Social Media Management",
    desc: "Full-service management from calendar to community.",
    size: "large",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M4 6h24M4 12h16M4 18h20M4 24h12" strokeLinecap="round" />
      </svg>
    ),
    name: "Content Marketing",
    desc: "Content that ranks, resonates, and converts.",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <circle cx="14" cy="14" r="9" />
        <path d="M21 21l7 7" strokeLinecap="round" />
      </svg>
    ),
    name: "SEO Strategy",
    desc: "Get found by the people who are already looking.",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M4 24V14l8-8 8 8V24" />
        <path d="M12 24v-8h8v8" />
        <path d="M28 24H4" strokeLinecap="round" />
      </svg>
    ),
    name: "Paid Ad Campaigns",
    desc: "Every rupee tracked, tested, and optimized.",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <polygon points="16,3 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12" />
      </svg>
    ),
    name: "Brand Strategy & Identity",
    desc: "Define what you stand for before you say a word.",
    size: "small",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="#00C4CC" strokeWidth="1.8">
        <path d="M4 26V18l8-10 8 10v8" />
        <path d="M28 26V14l-8-6" />
        <path d="M4 26h24" strokeLinecap="round" />
      </svg>
    ),
    name: "Analytics & Reporting",
    desc: "No vanity metrics. Just the numbers that matter.",
    size: "large",
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
      whileHover={{ y: -6 }}
      className="group relative bg-surface rounded-2xl p-7 border border-border
        hover:border-teal hover:shadow-[0_8px_30px_-4px_rgba(0,196,204,0.25)]
        transition-all duration-300 cursor-default flex flex-col gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
        {service.icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-lg font-semibold text-foreground leading-tight"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
      </div>
      <Link
        href="/services"
        className="text-sm font-medium text-teal hover:text-teal/80 transition-colors mt-auto inline-flex items-center gap-1 group-hover:gap-2"
      >
        Learn more
        <span className="transition-all">→</span>
      </Link>
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={ref} className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">What We Do</p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What We Weave
            </h2>
            <p className="text-base text-muted-foreground">
              Six disciplines. One team. Zero guesswork.
            </p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <motion.div
          className="md:hidden -mx-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-none w-[72vw] snap-start bg-surface rounded-2xl p-5 border border-border flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ fontFamily: "var(--font-jetbrains)", color: "rgba(0,196,204,0.4)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3
                    className="text-base font-semibold text-foreground leading-snug"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
                <Link
                  href="/services"
                  className="text-sm font-medium text-teal inline-flex items-center gap-1 mt-auto"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          {/* Scroll hint */}
          <p className="text-[11px] text-muted-foreground/50 text-right px-6 -mt-1">
            swipe for more
          </p>
        </motion.div>

        {/* Desktop: asymmetric bento grid */}
        <div className="hidden md:grid grid-cols-4 gap-5">
          <div className="md:col-span-2">
            <ServiceCard service={services[0]} index={0} />
          </div>
          <div>
            <ServiceCard service={services[1]} index={1} />
          </div>
          <div>
            <ServiceCard service={services[2]} index={2} />
          </div>
          <div>
            <ServiceCard service={services[3]} index={3} />
          </div>
          <div>
            <ServiceCard service={services[4]} index={4} />
          </div>
          <div className="md:col-span-2">
            <ServiceCard service={services[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
