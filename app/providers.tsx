"use client";

import { ThemeProvider } from "next-themes";
import { AppReadyProvider } from "@/context/appReady";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppReadyProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
      </ThemeProvider>
    </AppReadyProvider>
  );
}
