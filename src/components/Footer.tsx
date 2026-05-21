"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/fardinfahim", icon: <GithubIcon className="w-4 h-4" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/fardinfahim", icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: "Email", href: "mailto:fardin.fahim.dev@gmail.com", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="relative bg-background border-t border-border-custom z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <span className="text-sm font-bold tracking-wider">
            MIZANUR RAHMAN<span className="text-primary font-light"> FARDIN</span>
          </span>
          <p className="text-xs text-muted-text/80">
            &copy; {new Date().getFullYear()} Mohammad Mizanur Rahman Fardin. All rights reserved.
          </p>
        </div>

        {/* Center: Heart visual */}
        <div className="flex items-center gap-1.5 text-xs text-muted-text/75 order-last md:order-none select-none">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span>using Next.js &amp; Tailwind CSS</span>
        </div>

        {/* Right Side: Quick Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border-custom hover:border-primary/30 hover:text-primary transition-all duration-300 bg-card/20 text-muted-text hover:shadow-glow/5"
              aria-label={`Visit my ${s.name}`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Back-To-Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 p-3.5 rounded-full bg-card hover:bg-primary/10 border border-border-custom hover:border-primary text-primary shadow-lg cursor-pointer transition-colors duration-300 z-40 hover:shadow-glow"
            aria-label="Scroll Back To Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
