"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppReady } from "@/context/appReady";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const { setAppReady } = useAppReady();

  useEffect(() => {
    const t = setTimeout(() => {
      setAppReady(true);
      setVisible(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [setAppReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[#080E18]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* TW monogram — strokes draw in sequence */}
          <motion.svg
            viewBox="0 0 165 115"
            width="200"
            height="139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.01 }}
          >
            {/* T — crossbar */}
            <motion.line
              x1="6" y1="32" x2="58" y2="32"
              stroke="#00C4CC"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            />
            {/* T — stem */}
            <motion.line
              x1="32" y1="32" x2="32" y2="108"
              stroke="#00C4CC"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.42, delay: 0.32, ease: "easeOut" }}
            />
            {/* W + arrow shaft (single continuous path) */}
            <motion.path
              d="M 72,32 L 72,102 L 93,60 L 114,102 L 140,8"
              stroke="#00C4CC"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.88, delay: 0.62, ease: "easeInOut" }}
            />
            {/* Arrowhead */}
            <motion.path
              d="M 128,16 L 140,8 L 150,20"
              stroke="#00C4CC"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.22, delay: 1.46, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Wordmark */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.55 }}
            className="text-[10px] font-semibold tracking-[0.38em] uppercase"
            style={{ color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-jakarta)" }}
          >
            Trend Weavers Media
          </motion.p>

          {/* Yellow progress bar */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full" style={{ background: "rgba(255,209,102,0.12)" }}>
            <motion.div
              className="h-full"
              style={{ background: "#FFD166" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
