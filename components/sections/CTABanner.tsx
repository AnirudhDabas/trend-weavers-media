"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-teal py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Ready to get on trend?
          </h2>
          <p className="text-base text-white/80 max-w-md">
            Let&apos;s talk about what growth looks like for your brand.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center h-12 px-8 rounded-full bg-[#FFD166] text-[#0D1B2A] font-semibold text-sm hover:bg-[#f5c842] transition-colors mt-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
