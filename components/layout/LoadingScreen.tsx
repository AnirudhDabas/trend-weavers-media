"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAppReady } from "@/context/appReady";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const { setAppReady } = useAppReady();

  useEffect(() => {
    const t = setTimeout(() => {
      setAppReady(true);
      setVisible(false);
    }, 2600);
    return () => clearTimeout(t);
  }, [setAppReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0C1A28" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {/* Radial ambient glow — warm teal behind logo */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, rgba(0,196,204,0.07) 0%, rgba(255,209,102,0.04) 35%, transparent 70%)",
            }}
          />

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] origin-left"
            style={{ background: "linear-gradient(90deg, #00C4CC, #FFD166 60%, transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo + wordmark */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Logo with glow */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.34, 1.4, 0.64, 1] }}
              style={{
                filter:
                  "drop-shadow(0 0 32px rgba(255,209,102,0.25)) drop-shadow(0 0 72px rgba(0,196,204,0.12))",
              }}
            >
              <Image
                src="/Digital Marketing Agency Modern Logo.png"
                width={200}
                height={200}
                alt="Trend Weavers Media"
                className="rounded-[36px]"
                priority
              />
            </motion.div>

            {/* Wordmark — word by word */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                {["TREND", "WEAVERS", "MEDIA"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.72 + i * 0.1, ease: "easeOut" }}
                    className="text-[11px] font-semibold tracking-[0.32em]"
                    style={{
                      color: "rgba(255,255,255,0.32)",
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Teal dot separator row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="flex items-center gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.25, delay: 1.15 + i * 0.07, ease: "backOut" }}
                    className="block w-1 h-1 rounded-full"
                    style={{ background: "#00C4CC", opacity: 0.5 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom progress bar — gradient teal→yellow */}
          <div
            className="absolute bottom-0 left-0 h-[3px] w-full"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <motion.div
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #00C4CC 0%, #FFD166 100%)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
