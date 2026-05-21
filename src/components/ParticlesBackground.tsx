"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Track mouse position for subtle interactive parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check accessibility settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        if (!reducedMotion) {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
      }

      draw(c: CanvasRenderingContext2D, color: string) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = color;
        c.globalAlpha = this.alpha;
        c.fill();
        c.globalAlpha = 1;
      }
    }

    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const getColors = () => {
      switch (theme) {
        case "light-minimal":
          return {
            particle: "#64748b",
            line: "rgba(100, 116, 139, 0.08)",
          };
        case "cyber-gradient":
          return {
            particle: "#a78bfa",
            line: "rgba(167, 139, 250, 0.1)",
          };
        case "dark-neon":
        default:
          return {
            particle: "#10b981",
            line: "rgba(16, 185, 129, 0.08)",
          };
      }
    };

    const run = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = getColors();

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx, colors.particle);
      });

      // Draw interactive connections
      if (!reducedMotion) {
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(run);
    };

    run();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme, reducedMotion]);

  // Determine glow orb styles depending on the theme
  const getOrbStyles = () => {
    switch (theme) {
      case "light-minimal":
        return [
          { bg: "bg-slate-300/20", size: "w-[400px] h-[400px]", top: "20%", left: "10%", transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` },
          { bg: "bg-slate-400/10", size: "w-[500px] h-[500px]", bottom: "10%", right: "10%", transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` },
        ];
      case "cyber-gradient":
        return [
          { bg: "bg-pink-500/15", size: "w-[450px] h-[450px]", top: "15%", left: "15%", transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` },
          { bg: "bg-blue-500/15", size: "w-[550px] h-[550px]", bottom: "15%", right: "15%", transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)` },
          { bg: "bg-purple-600/10", size: "w-[300px] h-[300px]", top: "50%", left: "50%", transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` },
        ];
      case "dark-neon":
      default:
        return [
          { bg: "bg-emerald-500/10", size: "w-[500px] h-[500px]", top: "10%", left: "10%", transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)` },
          { bg: "bg-cyan-500/10", size: "w-[550px] h-[550px]", bottom: "15%", right: "10%", transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` },
        ];
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Orbs */}
      {getOrbStyles().map((orb, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-[100px] transition-transform duration-500 ease-out ${orb.bg} ${orb.size}`}
          style={{
            top: orb.top,
            left: orb.left,
            bottom: orb.bottom,
            right: orb.right,
            transform: !reducedMotion ? orb.transform : "none",
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === "light-minimal" 
            ? "radial-gradient(rgba(100, 116, 139, 0.04) 1.5px, transparent 1.5px)" 
            : "radial-gradient(rgba(243, 244, 246, 0.02) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}
