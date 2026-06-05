"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function BarChart() {
  const bars = [
    { height: 30, delay: 0.2 },
    { height: 50, delay: 0.35 },
    { height: 45, delay: 0.5 },
    { height: 65, delay: 0.65 },
    { height: 55, delay: 0.8 },
    { height: 80, delay: 0.95 },
    { height: 70, delay: 1.1 },
    { height: 95, delay: 1.25 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-end gap-3 h-36 px-4">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm bg-teal/80"
          initial={{ scaleY: 0, originY: 1 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.5, delay: bar.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ height: `${bar.height}%`, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

export function CaseStudyTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0D1B2A] rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — content */}
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col gap-6 justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal">
                Featured Result
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                40% increase in organic reach in 8 weeks
              </h2>
              <p className="text-sm text-white/60">A Delhi-based lifestyle brand</p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-teal text-teal text-sm font-semibold h-10 px-6 rounded-full hover:bg-teal hover:text-white transition-all w-fit"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                View all case studies →
              </Link>
            </div>

            {/* Right — chart */}
            <div className="flex items-end justify-center p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="w-full max-w-[280px]">
                <BarChart />
                <div className="flex justify-between mt-3 px-4">
                  <span className="text-xs text-white/30">Week 1</span>
                  <span className="text-xs text-white/30">Week 8</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
