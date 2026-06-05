"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/90 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/Digital Marketing Agency Modern Logo.png"
              width={36}
              height={36}
              alt="Trend Weavers Media"
              className="rounded-lg"
              priority
            />
            <span
              className="font-bold text-[17px] text-foreground tracking-tight hidden sm:block"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Trend Weavers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal",
                  pathname === link.href
                    ? "text-teal"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-teal text-white text-sm font-semibold hover:bg-teal/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Work With Us
            </Link>
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-foreground"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-surface flex flex-col pt-20 px-6 pb-10"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-xl font-semibold border-b border-border transition-colors hover:text-teal",
                      pathname === link.href ? "text-teal" : "text-foreground"
                    )}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full h-12 rounded-full bg-teal text-white text-base font-semibold"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Work With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-16" />
    </>
  );
}
