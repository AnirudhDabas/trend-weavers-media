"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AppReadyContextType {
  appReady: boolean;
  setAppReady: (v: boolean) => void;
}

export const AppReadyContext = createContext<AppReadyContextType>({
  appReady: false,
  setAppReady: () => {},
});

export const useAppReady = () => useContext(AppReadyContext);

export function AppReadyProvider({ children }: { children: ReactNode }) {
  const [appReady, setAppReady] = useState(false);
  return (
    <AppReadyContext.Provider value={{ appReady, setAppReady }}>
      {children}
    </AppReadyContext.Provider>
  );
}
