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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070D16]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* TW — slides up from below the overflow clip */}
            <div className="overflow-hidden pb-2">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                className="block text-[108px] sm:text-[128px] font-extrabold leading-none tracking-[-0.04em]"
                style={{ color: "#00C4CC", fontFamily: "var(--font-jakarta)" }}
              >
                TW
              </motion.span>
            </div>

            {/* Yellow rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="h-px w-12 origin-center"
              style={{ background: "#FFD166" }}
            />

            {/* Wordmark */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-[10px] font-semibold tracking-[0.42em] uppercase"
              style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-jakarta)" }}
            >
              Trend Weavers Media
            </motion.p>
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-full"
            style={{ background: "rgba(255,209,102,0.1)" }}
          >
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
