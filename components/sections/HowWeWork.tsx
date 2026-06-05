"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    body: "We start by learning your brand, audience, and goals inside out. No assumptions, no templates.",
  },
  {
    number: "02",
    title: "Strategize",
    body: "We build a custom roadmap. Every channel, every tactic, every timeline is built specifically for you.",
  },
  {
    number: "03",
    title: "Execute",
    body: "We ship, measure, and iterate. The work doesn't stop until the numbers move.",
  },
];

export function HowWeWork() {
  const lineRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Our Process</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            The Method
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[56px] left-[calc(16.6%+16px)] right-[calc(16.6%+16px)] h-[2px] bg-border overflow-hidden">
            <motion.div
              className="h-full bg-teal origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative flex flex-col gap-5"
              >
                {/* Step number circle */}
                <div className="relative w-14 h-14 rounded-full border-2 border-teal flex items-center justify-center bg-surface z-10">
                  <span
                    className="text-teal font-bold text-sm"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Ghost number */}
                <div
                  className="absolute -top-4 -left-3 text-[100px] font-black text-teal/5 leading-none select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {step.number}
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3
                    className="text-xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
