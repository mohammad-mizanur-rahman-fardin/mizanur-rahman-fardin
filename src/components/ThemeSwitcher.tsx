"use client";

import React, { useState } from "react";
import { useTheme, ThemeType } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, Sun, Sparkles, Check } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeType; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
    {
      id: "dark-neon",
      label: "Dark Neon",
      icon: <Zap className="w-4 h-4" />,
      color: "from-emerald-500 to-cyan-500",
      desc: "Cyberpunk dark with neon highlights",
    },
    {
      id: "light-minimal",
      label: "Light Minimal",
      icon: <Sun className="w-4 h-4" />,
      color: "from-slate-700 to-slate-400",
      desc: "Clean, high-contrast minimal light layout",
    },
    {
      id: "cyber-gradient",
      label: "Cyber Gradient",
      icon: <Sparkles className="w-4 h-4" />,
      color: "from-pink-500 to-blue-500",
      desc: "Futuristic purple-cyan visual experience",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 p-3 rounded-2xl glass-panel shadow-2xl flex flex-col gap-2 w-64 mr-1 border border-border-custom"
          >
            <p className="text-xs font-semibold text-muted-text px-2 pb-1 border-b border-border-custom">
              CHOOSE A THEME
            </p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-sm transition-all duration-200 ${
                  theme === t.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-foreground/5 text-foreground/80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${t.color} text-white`}>
                    {t.icon}
                  </div>
                  <div className="flex flex-col">
                    <span>{t.label}</span>
                    <span className="text-[10px] text-muted-text/80 font-normal leading-none mt-0.5">
                      {t.desc}
                    </span>
                  </div>
                </div>
                {theme === t.id && (
                  <motion.div layoutId="active-theme-check">
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-primary text-background shadow-lg shadow-glow flex items-center justify-center cursor-pointer transition-shadow duration-300"
        aria-label="Toggle Theme Customization"
      >
        <Palette className="w-5 h-5 animate-pulse" />
      </motion.button>
    </div>
  );
}
