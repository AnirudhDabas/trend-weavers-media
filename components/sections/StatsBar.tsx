"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatProps {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  accent?: boolean;
}

function AnimatedStat({ prefix = "", value, suffix, label, accent = false }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <div
        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
        style={{ fontFamily: "var(--font-jetbrains)", letterSpacing: "-1px", color: accent ? "var(--yellow)" : "#ffffff" }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-white/60 tracking-wide uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-[#0D1B2A] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-6">
          <AnimatedStat prefix="$" value={85} suffix="K+" label="Revenue Generated" accent />
          <AnimatedStat value={15} suffix="+" label="Clients Served" />
          <AnimatedStat value={40} suffix="%" label="Avg. Outreach Growth" />
          <AnimatedStat value={10} suffix="" label="Team Members" />
        </div>
      </div>
    </section>
  );
}
