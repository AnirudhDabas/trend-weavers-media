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
    }, 2200);
    return () => clearTimeout(t);
  }, [setAppReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D1B2A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-7">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.78, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Image
                src="/Digital Marketing Agency Modern Logo.png"
                width={176}
                height={176}
                alt="Trend Weavers Media"
                className="rounded-[32px]"
                priority
              />
            </motion.div>

            {/* Yellow rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
              className="h-px w-10 origin-center"
              style={{ background: "#FFD166" }}
            />

            {/* Wordmark */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[10px] font-semibold tracking-[0.42em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-jakarta)" }}
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
