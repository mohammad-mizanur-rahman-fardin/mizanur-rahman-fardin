"use client";

import React from "react";
import { motion } from "framer-motion";
import { timelineData, TimelineItem } from "../data/experience";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;

  // Alternating slide direction for desktop, unified slide for mobile
  const variants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative flex flex-col md:flex-row md:justify-between items-stretch mb-12 md:mb-16 group">
      {/* Visual Circle Indicator */}
      <div className="absolute left-6 md:left-1/2 top-4 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-glow transition-all duration-300 group-hover:scale-125 z-10 -translate-x-3" />

      {/* Left side spacer/item (Desktop alternate) */}
      <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:text-right" : "md:order-last md:text-left"}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="glass-panel p-6 rounded-2xl border border-border-custom bg-card/35 hover:border-primary/20 transition-all duration-300"
        >
          {/* Timeline header */}
          <div className={`flex flex-wrap gap-2 items-center mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              {item.type === "work" ? (
                <Briefcase className="w-3 h-3" />
              ) : (
                <GraduationCap className="w-3 h-3" />
              )}
              <span>{item.type}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-text bg-foreground/5 px-2 py-0.5 rounded border border-border-custom/50">
              <Calendar className="w-3 h-3 text-secondary" />
              <span>{item.period}</span>
            </span>
          </div>

          {/* Role / Title */}
          <h3 className="text-lg font-bold tracking-tight text-foreground">{item.role}</h3>
          
          {/* Company / Location */}
          <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-text mt-1.5 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            <span className="font-semibold text-foreground/80">{item.company}</span>
            <span className="flex items-center gap-1 select-none text-muted-text/50">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </span>
          </div>

          {/* Description Bullets */}
          <ul className={`text-xs text-muted-text space-y-2 list-none mb-4 pl-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
            {item.description.map((desc, idx) => (
              <li key={idx} className={`flex gap-2 items-start leading-relaxed ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <span className="text-primary mt-1">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {/* Related Tech Badges */}
          {item.skills && item.skills.length > 0 && (
            <div className={`flex flex-wrap gap-1.5 pt-3 border-t border-border-custom/60 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-foreground/5 border border-border-custom text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Right side spacer for desktop symmetry */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Title */}
      <div className="text-center mb-20">
        <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">// My Timeline</span>
        <h2 className="text-4xl font-extrabold tracking-tight">Experience &amp; Education</h2>
      </div>

      {/* Timeline wrapper */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line (Scroll animation handled with simple scaleY on view) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary origin-top -translate-x-[1px]"
        />

        {/* Timeline Nodes */}
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineNode key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
