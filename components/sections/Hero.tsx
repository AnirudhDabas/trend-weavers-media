"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAppReady } from "@/context/appReady";

function WeavingSVG() {
  return (
    <motion.svg
      viewBox="0 0 440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-h-[440px]"
      aria-hidden="true"
    >
      {/* Background faint grid */}
      {[0, 80, 160, 240, 320, 400].map((y) => (
        <motion.line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2="440"
          y2={y}
          stroke="#00C4CC"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      ))}
      {[0, 80, 160, 240, 320, 400, 440].map((x) => (
        <motion.line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="400"
          stroke="#00C4CC"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      ))}

      {/* Main wave paths */}
      <motion.path
        d="M0,80 C55,40 110,120 165,80 S275,40 330,80 S385,120 440,80"
        stroke="#00C4CC"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,160 C55,120 110,200 165,160 S275,120 330,160 S385,200 440,160"
        stroke="#00C4CC"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,240 C55,200 110,280 165,240 S275,200 330,240 S385,280 440,240"
        stroke="#00C4CC"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,320 C55,280 110,360 165,320 S275,280 330,320 S385,360 440,320"
        stroke="#00C4CC"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
      />

      {/* Vertical weave lines */}
      <motion.path
        d="M110,0 C70,50 150,130 110,200 C70,270 150,330 110,400"
        stroke="#00C4CC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeOpacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M220,0 C180,50 260,130 220,200 C180,270 260,330 220,400"
        stroke="#00C4CC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeOpacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 1.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M330,0 C290,50 370,130 330,200 C290,270 370,330 330,400"
        stroke="#00C4CC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeOpacity="0.7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Intersection dots */}
      {[
        [110, 80], [220, 80], [330, 80],
        [110, 160], [220, 160], [330, 160],
        [110, 240], [220, 240], [330, 240],
        [110, 320], [220, 320], [330, 320],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={cx}
          cy={cy}
          r="4"
          fill="#00C4CC"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.3, delay: 1.6 + i * 0.04 }}
        />
      ))}

      {/* Accent shapes */}
      <motion.rect
        x="30"
        y="30"
        width="50"
        height="50"
        rx="6"
        stroke="#00C4CC"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      />
      <motion.rect
        x="360"
        y="320"
        width="40"
        height="40"
        rx="6"
        stroke="#00C4CC"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      />
    </motion.svg>
  );
}

const lineEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const marqueeItems = [
  "Lifestyle Brands",
  "SaaS Startups",
  "D2C Fashion",
  "F&B",
  "Real Estate",
  "Ed-Tech",
  "Healthcare",
];

export function Hero() {
  const { appReady } = useAppReady();

  return (
    <section className="lg:min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Main hero */}
      <div className="flex-1 max-w-[1280px] mx-auto px-6 flex items-start lg:items-center w-full pt-12 pb-14 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 w-full">
          {/* Left */}
          <div className="flex flex-col justify-center gap-6">
            {/* Yellow eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={appReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={appReady ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="inline-block h-px w-8 origin-left"
                style={{ background: "var(--yellow)" }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "var(--yellow)" }}
              >
                Digital Marketing Agency
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={appReady ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="inline-block h-px w-8 origin-left"
                style={{ background: "var(--yellow)" }}
              />
            </motion.div>

            <div className="flex flex-col gap-1">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={appReady ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: lineEase }}
                className="text-[40px] sm:text-[52px] lg:text-[68px] xl:text-[76px] font-light leading-[1.05] tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We don&apos;t chase
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={appReady ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: lineEase }}
                className="text-[40px] sm:text-[52px] lg:text-[68px] xl:text-[76px] font-extrabold leading-[1.05] tracking-tight"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  background: "linear-gradient(90deg, #00C4CC 0%, #00D4DC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                trends.
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={appReady ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: lineEase }}
                className="text-[40px] sm:text-[52px] lg:text-[68px] xl:text-[76px] font-light leading-[1.05] tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                We build them.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={appReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-muted-foreground leading-[1.7] max-w-[500px]"
            >
              Trend Weavers Media is a data-driven digital marketing agency helping brands across India grow their presence, leads, and revenue online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={appReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center h-11 px-7 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-all hover:scale-[1.03] active:scale-[0.97]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center h-11 px-7 rounded-full border border-foreground/20 text-foreground font-semibold text-sm hover:border-teal hover:text-teal transition-all hover:scale-[1.03] active:scale-[0.97]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right — SVG illustration (only mount after ready so paths draw fresh) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={appReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            {appReady && <WeavingSVG />}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-border overflow-hidden py-4 bg-surface">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm text-muted-foreground font-medium tracking-wide"
            >
              {item}
              <span className="mx-4" style={{ color: "var(--yellow)" }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
