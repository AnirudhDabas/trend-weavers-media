"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Before working with TWM, we were posting consistently but seeing zero growth. Three months in, our reach had doubled and we were actually getting DMs from potential customers. The strategy shift they recommended was exactly what we needed.",
    name: "Priya S.",
    role: "Founder",
    company: "Lifestyle Brand",
    taller: false,
  },
  {
    quote:
      "They took our ad spend and turned it into an actual system. We went from guessing which creatives work to having a clear testing framework. Our ROAS improved by 3x in the first campaign cycle.",
    name: "Rahul M.",
    role: "Marketing Head",
    company: "D2C Startup",
    taller: true,
  },
  {
    quote:
      "The SEO audit alone was worth it. They found issues we didn't know existed and fixed them methodically. Organic traffic has been climbing every month since.",
    name: "Ananya K.",
    role: "CEO",
    company: "SaaS Company",
    taller: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="#00C4CC" className="w-4 h-4">
          <path d="M8 1l1.9 3.8L14 5.7l-3 2.9.7 4.1L8 10.8l-3.7 1.9.7-4.1-3-2.9 4.1-.9z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
          ref={ref}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Social Proof</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            What clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-surface rounded-2xl p-8 border border-border flex flex-col gap-4 ${t.taller ? "md:mt-6" : ""}`}
            >
              <Stars />
              <p className="text-base text-foreground leading-[1.7] italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
