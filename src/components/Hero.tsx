"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Code, Terminal, ChevronDown } from "lucide-react";
import Image from "next/image";

// Custom Magnetic Button Component
function MagneticButton({
  children,
  className,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Limit displacement to maximum 15px
    const x = Math.max(-15, Math.min(15, (clientX - centerX) * 0.3));
    const y = Math.max(-15, Math.min(15, (clientY - centerY) * 0.3));
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["AI & Data Science Enthusiast", "Full Stack Developer", "Competitive Programmer", "NLP & LLM Specialist"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax scroll effect for Hero elements
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  // Typing effect hook
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(45);

        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20"
    >
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="w-full max-w-4xl flex flex-col items-center text-center z-10"
      >
        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs tracking-wider font-semibold uppercase text-primary border-primary/20 mb-8"
        >
          <Code className="w-3.5 h-3.5" />
          <span>Available for Freelance & Full-time Roles</span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight select-none"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient text-transparent bg-clip-text">Fardin</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-muted-text/75 tracking-wide font-mono mb-2"
        >
          Mohammad Mizanur Rahman Fardin
        </motion.p>

        {/* Dynamic Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 md:h-12 flex items-center justify-center mb-8"
        >
          <div className="text-xl sm:text-3xl font-light text-foreground/95 flex items-center tracking-wide font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span>{typedText}</span>
            <span className="w-1.5 h-6 ml-1.5 bg-primary animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-muted-text max-w-2xl leading-relaxed mb-12"
        >
          BSc in Computer Science &amp; Engineering @ UIU. Building full-stack web systems with modern tech. 
          Passionate about AI, NLP, and competitive programming. 400+ problems solved on Codeforces.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-background font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-shadow duration-300 cursor-pointer"
            ariaLabel="View my portfolio projects"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300 cursor-pointer border-border-custom"
            ariaLabel="Navigate to contact form"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </MagneticButton>
        </motion.div>

        {/* Profile Photo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 relative w-48 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden glass-panel border-2 border-primary/20 shadow-2xl"
        >
          <Image
            src="/profile-photo.jpg"
            alt="Mohammad Mizanur Rahman Fardin"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating terminal visual background wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-24 max-w-3xl w-full hidden md:block border border-border-custom rounded-t-xl bg-card pointer-events-none"
      >
        <div className="h-8 border-b border-border-custom px-4 flex items-center gap-1.5 bg-background/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="text-[10px] font-mono text-muted-text/60 ml-2">bash - portfolio-server</div>
        </div>
        <div className="p-4 font-mono text-xs text-muted-text space-y-1">
          <div className="flex gap-2">
            <span className="text-primary">fardin@developer:~$</span>
            <span>npm run dev</span>
          </div>
          <div className="text-secondary/70">✓ Ready in 600ms</div>
          <div className="text-secondary/70">○ compiled client and server successfully (38 modules)</div>
          <div className="flex gap-2">
            <span className="text-primary">fardin@developer:~$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 cursor-pointer text-muted-text hover:text-primary transition-colors"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-xs font-mono tracking-wider">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
