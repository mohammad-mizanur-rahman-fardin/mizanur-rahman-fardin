"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories, Skill } from "../data/skills";
import { Cpu } from "lucide-react";

// Dictionary of beautiful inline SVGs for developer tech logos to make it look premium
function TechIcon({ name }: { name: string }) {
  switch (name.toLowerCase()) {
    case "html5":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.7H6.2l.4 4h11.4l-.4 4.5-5.6 1.8-5.6-1.8-.3-3.2h2.4l.2 1.6 3.3 1 3.3-1 .3-3.6H6.9l-.7-7.7h12.5v.5z" />
        </svg>
      );
    case "css3":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.7 5.6H5.4l.7 7.7h8.7l-.3 3.6-2.5.8-2.5-.8-.1-1.6H7l.2 3.1 4.8 1.6 4.8-1.6.7-7.8H8.8l-.2-2.4h8.3v-.6z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm20 18.2c0-1.2-.7-2-2-2.4-1.2-.4-2-.6-2-1.2 0-.4.3-.6.8-.6.6 0 1 .3 1.2.9h2.2c-.3-1.8-1.5-2.7-3.4-2.7-2 0-3.3 1.1-3.3 2.7 0 1.3.8 2 2.3 2.5 1.2.4 1.7.6 1.7 1.1 0 .5-.4.8-1 .8-.8 0-1.3-.4-1.6-1h-2.3c.3 2 1.7 2.8 3.8 2.8 2.2 0 3.7-1.1 3.7-3zM10.8 12h2.2v8h-2.2v-8z" />
        </svg>
      );
    case "typescript":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm21.4 18.2c-.3-1.8-1.5-2.7-3.4-2.7-2 0-3.3 1.1-3.3 2.7 0 1.3.8 2 2.3 2.5 1.2.4 1.7.6 1.7 1.1 0 .5-.4.8-1 .8-.8 0-1.3-.4-1.6-1h-2.3c.3 2 1.7 2.8 3.8 2.8 2.2 0 3.7-1.1 3.7-3 0-1.2-.7-2-2-2.4-1.2-.4-2-.6-2-1.2 0-.4.3-.6.8-.6.6 0 1 .3 1.2.9h2.2v-.2zm-8.6-6.2h-3.4v8H7.2v-8H3.8V10h9v2z" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "next.js":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.7 17.5l-5.4-7.5v6.5H10.5V7.5h1.2l5.2 7.2V7.5h1.8v10h-1z" />
        </svg>
      );
    case "tailwind css":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6.5c-2.3 0-3.8 1.2-4.5 3.5 1-.7 2.2-1 3.5-1 2.3 0 3.8 1.2 4.5 3.5-1-.7-2.2-1-3.5-1m-4.5 3.5C5.2 15 3.7 16.2 3 18.5c1-.7 2.2-1 3.5-1 2.3 0 3.8 1.2 4.5 3.5-1-.7-2.2-1-3.5-1" />
        </svg>
      );
    case "php":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-3 16h-1.5l1.1-5.5H7.1L6 16H4.5l2.2-11h1.5l-1.1 5.5h1.5L10.8 5h1.5L10.1 16zm6.5-6.5c0 .7-.1 1.3-.4 1.8-.3.5-.7.8-1.2 1h-1.4l-.8 3.7h-1.5l2.2-11H15c.8 0 1.4.2 1.8.6.4.4.6.9.6 1.4v2.5zM14 9.5h-1.1l-.5 2.5h1.1c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.5-.4-.8-.7-.8z" />
        </svg>
      );
    case "laravel":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.3 0h13.4C20.2 0 21 1 21 2.2v19.6C21 23 20.2 24 18.7 24H5.3C3.8 24 3 23 3 21.8V2.2C3 1 3.8 0 5.3 0zm5 18l4.4-2.5V11L10.3 8.5v9.5zm2.2-11.8l2.2-1.3-2.2-1.2-2.2 1.2 2.2 1.3z" />
        </svg>
      );
    case "node.js":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L2.3 5.6v12.8L12 24l9.7-5.6V5.6L12 0zm7.5 17L12 21.3 4.5 17V7l7.5-4.3 7.5 4.3v10zm-6-8.5H15V13c0 .8-.2 1.4-.7 1.8-.5.4-1.2.6-2 .6s-1.5-.2-2-.6c-.5-.4-.7-1-.7-1.8v-4.5h1.5V13c0 .6.3.9.9.9s.9-.3.9-.9V8.5z" />
        </svg>
      );
    case "mysql":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.3 16.5c-.3.4-.8.7-1.3.8-.5.2-1 .3-1.6.3H9v-8h3c.8 0 1.5.2 2 .6.5.4.8 1 .8 1.7 0 .8-.3 1.4-.8 1.8.8.3 1.3 1 1.3 2.1v.7zm-2.8-5.3c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3h-1v2.5h1c.4 0 .7-.1.9-.3.2-.2.3-.5.3-1v-.2zm.5 3.3c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-1-.3h-1.2v2.5h1.2c.4 0 .7-.1.9-.3.2-.2.4-.5.4-1v-.2z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3 17.5h-1.5l1.1-5.5h-1.8L11.7 16H10.2l2.2-11h1.5l-1.1 5.5h1.8l-1.1 5.5h1.5z" />
        </svg>
      );
    case "supabase":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.2h-7.6l4.2-9.4c.2-.5-.1-1-.7-1.1-.3 0-.6.1-.8.3L3.4 12.2c-.4.4-.3 1.1.2 1.3.2.1.4.1.6.1h7.6L7.6 23c-.2.5.1 1 .7 1.1.3 0 .6-.1.8-.3L21.8 13c.4-.4.3-1.1-.2-1.4-.2-.2-.4-.4-.6-.4z" />
        </svg>
      );
    case "git":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.3 11.4L12.6.7c-.9-.9-2.4-.9-3.3 0L7 3 9.4 5.4c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.4 2.4c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.2-.4-1.8L10.5 8.7c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L6.5 6.3 1.4 11.4c-.9.9-.9 2.4 0 3.3l10.7 10.7c.9.9 2.4.9 3.3 0l8.1-8.1c.8-.8.8-2.3-.2-3.2z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "vs code":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.986 6.568L18.507.233a1.442 1.442 0 00-1.782-.24L7.522 5.09 2.502 1.328A.89.89 0 001 2.022v19.956c0 .324.175.622.46.78a.885.885 0 00.916-.046l5.146-3.818 9.203 5.098c.552.284 1.23.187 1.68-.246l5.54-6.046a1.442 1.442 0 00.04-1.92l-.001-.002zm-18.06 7.644l-2.616-1.95L3.31 9.948l2.616 1.949v2.315zM17.433 12l-5.69 4.23V7.77L17.433 12z" />
        </svg>
      );
    case "vercel":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.745z" />
        </svg>
      );
    case "antigravity":
    default:
      return <Cpu className="w-6 h-6" />;
  }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">// What I Use</span>
        <h2 className="text-4xl font-extrabold tracking-tight">Skills &amp; Technologies</h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="glass-panel p-8 rounded-2xl border border-border-custom bg-card/45 shadow-xl hover:shadow-glow/5 hover:border-primary/20 transition-all duration-300 group"
          >
            <h3 className="text-lg font-bold tracking-wide text-foreground mb-6 pb-2 border-b border-border-custom flex justify-between items-center group-hover:border-primary/20 transition-colors duration-300">
              <span>{category.title}</span>
              <span className="text-xs font-mono text-muted-text/60">0{catIdx + 1}</span>
            </h3>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill: Skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl glass-panel border-border-custom/50 bg-background/20 text-center transition-all duration-300 cursor-default ${skill.colorClass} group/skill hover:border-primary/30`}
                >
                  <div className="mb-2.5 text-muted-text group-hover/skill:text-inherit transition-colors duration-300">
                    <TechIcon name={skill.name} />
                  </div>
                  <span className="text-xs font-semibold text-foreground/90 group-hover/skill:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
