"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";
import { ExternalLink, Code2, ShieldAlert, Award, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

// Reusable Tilt Card Component for Projects
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotion);
    return () => mediaQuery.removeEventListener("change", handleMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xc = width / 2;
    const yc = height / 2;
    // Limit rotation to max 8 degrees
    const rotateX = Math.max(-8, Math.min(8, (yc - y) / 15));
    const rotateY = Math.max(-8, Math.min(8, (x - xc) / 15));
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.2 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="group relative flex flex-col h-full rounded-2xl glass-panel border border-border-custom bg-card/35 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-glow/5">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 group-hover:from-primary group-hover:via-secondary group-hover:to-primary transition-all duration-500" />
      
      {/* Content Wrapper */}
      <div className="p-8 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
        {/* Card Header Info */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 text-muted-text text-[10px] font-semibold uppercase tracking-wider border border-border-custom/50">
            <Award className="w-3 h-3 text-primary" />
            <span>{project.role || "Developer"}</span>
          </div>
          
          {/* Decorative code icon */}
          <Code2 className="w-5 h-5 text-muted-text/30 group-hover:text-primary/40 transition-colors duration-300" />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 flex items-center gap-1.5 group-hover:text-primary transition-colors duration-200">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </h3>

        {/* Short Description */}
        <p className="text-sm text-muted-text leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Project Deliverable Bullet Points */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-2">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-muted-text/70 uppercase">Key Contributions:</span>
            <ul className="text-xs text-muted-text/90 space-y-1.5 pl-2 list-none">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-2 items-start leading-snug">
                  <span className="text-primary mt-1 select-none">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-border-custom/60" style={{ transform: "translateZ(10px)" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-muted-text hover:text-foreground transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-primary hover:underline transition-all"
              aria-label={`Open live demonstration of ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">// My Portfolio</span>
        <h2 className="text-4xl font-extrabold tracking-tight">Recent Work &amp; Projects</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
