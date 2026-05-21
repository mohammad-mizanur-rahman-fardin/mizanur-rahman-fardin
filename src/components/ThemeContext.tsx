"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "dark-neon" | "light-minimal" | "cyber-gradient";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("dark-neon");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeType;
    if (savedTheme && ["dark-neon", "light-minimal", "cyber-gradient"].includes(savedTheme)) {
      setThemeState(savedTheme);
      updateThemeClass(savedTheme);
    } else {
      updateThemeClass("dark-neon");
    }
    setMounted(true);
  }, []);

  const updateThemeClass = (newTheme: ThemeType) => {
    const root = document.documentElement;
    root.classList.remove("theme-dark-neon", "theme-light-minimal", "theme-cyber-gradient");
    root.classList.add(`theme-${newTheme}`);
    // Also add dark class for tailwind standard selectors if needed
    if (newTheme !== "light-minimal") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    updateThemeClass(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Set visibility on mounted to avoid layout shifts/hydration mismatch */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }} className="w-full min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
