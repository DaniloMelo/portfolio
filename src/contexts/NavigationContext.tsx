"use client";

import { createContext, useContext, useState } from "react";

interface NavigationContextData {
  activeSection: string;
  setActiveSection(section: string): void;
}

const NavigationContext = createContext<NavigationContextData | null>(null);

interface NavigationProviderProps {
  children: React.ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used inside NavigationProvider");
  }

  return context;
}
