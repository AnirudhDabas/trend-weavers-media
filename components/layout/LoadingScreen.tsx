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
      setAppReady(true);   // ungate page animations
      setVisible(false);   // start exit fade
    }, 2000);
    return () => clearTimeout(t);
  }, [setAppReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#0D1B2A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Image
              src="/Digital Marketing Agency Modern Logo.png"
              width={120}
              height={120}
              alt="Trend Weavers Media"
              className="rounded-2xl"
              priority
            />
          </motion.div>

          {/* Wordmark */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Trend Weavers Media
          </motion.p>

          {/* Progress bar */}
          <motion.div className="absolute bottom-0 left-0 h-[2px] bg-[#FFD166]/30 w-full">
            <motion.div
              className="h-full bg-[#FFD166]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
