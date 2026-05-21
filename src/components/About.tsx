"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: "700+", label: "CP Problems Solved" },
    { value: "1176", label: "Max Codechef Rating" },
    { value: "941", label: "Max Codeforces Rating" },
    { value: "3.00+", label: "Academic CGPA" },
  ];

  const profileLinks = [
    { name: "Codeforces", url: "https://codeforces.com/profile/Mizanur_Rahman_Fardin", handle: "Mizanur_Rahman_Fardin" },
    { name: "CodeChef", url: "https://www.codechef.com/users/mizanur_fardin", handle: "mizanur_fardin" },
    { name: "GitHub", url: "https://github.com/mohammad-mizanur-rahman-fardin", handle: "mohammad-mizanur-rahman-fardin" },
  ];

  return (
    <section id="about" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Scroll Reveal Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Title (Mobile view header) */}
        <div className="lg:hidden mb-2 text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">// Who I Am</h2>
          <h3 className="text-3xl font-extrabold tracking-tight">About Me</h3>
        </div>

        {/* Left Column - Mock Code Terminal + Profile Photo */}
        <div className="lg:col-span-5 w-full flex flex-col gap-6">
          {/* Profile Photo */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-panel border border-border-custom shadow-2xl">
            <Image
              src="/profile-photo.jpg"
              alt="Mohammad Mizanur Rahman Fardin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Code Terminal */}
          <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-border-custom bg-card/40">
            {/* Terminal Header */}
            <div className="h-10 px-4 flex items-center justify-between border-b border-border-custom bg-background/40">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[11px] font-mono text-muted-text/70 select-none">mizanur_fardin.json</span>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto text-muted-text bg-background/20 select-text">
              <span className="text-primary font-bold">const</span> developer = &#123;
              <div className="pl-4 mt-1">
                <span>fullName:</span> <span className="text-secondary">&quot;Mohammad Mizanur Rahman Fardin&quot;</span>,
              </div>
              <div className="pl-4">
                <span>nickname:</span> <span className="text-secondary">&quot;Fardin&quot;</span>,
              </div>
              <div className="pl-4">
                <span>location:</span> <span className="text-secondary">&quot;Mugda, Dhaka, Bangladesh&quot;</span>,
              </div>
              <div className="pl-4">
                <span>education:</span> <span className="text-secondary">&quot;B.Sc. CSE @ UIU (Jan 2023)&quot;</span>,
              </div>
              <div className="pl-4">
                <span>domain:</span> <span className="text-secondary">&quot;AI &amp; Data Science (NLP &amp; LLM)&quot;</span>,
              </div>
              <div className="pl-4">
                <span>focus:</span> <span className="text-secondary">[&quot;Web Dev&quot;, &quot;Competitive Programming&quot;, &quot;LLM/NLP&quot;]</span>,
              </div>
              <div className="pl-4">
                <span>hobbies:</span> <span className="text-secondary">[&quot;Gym&quot;, &quot;Food&quot;, &quot;Travel&quot;, &quot;Building with Tech&quot;]</span>,
              </div>
              <div className="pl-4">
                <span>handles:</span> &#123;
                <div className="pl-4">
                  <span>codeforces:</span> <span className="text-secondary">&quot;Mizanur_Rahman_Fardin&quot;</span>,
                </div>
                <div className="pl-4">
                  <span>codechef:</span> <span className="text-secondary">&quot;mizanur_fardin&quot;</span>,
                </div>
                <div className="pl-4">
                  <span>github:</span> <span className="text-secondary">&quot;mohammad-mizanur-rahman-fardin&quot;</span>
                </div>
                <span>&#125;</span>
              </div>
              <span>&#125;;</span>
            </div>
          </div>
        </div>

        {/* Right Column - Text & Stats */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="hidden lg:block mb-6">
            <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">// Who I Am</span>
            <h2 className="text-4xl font-extrabold tracking-tight">About Me</h2>
          </div>

          <div className="space-y-6 text-base text-muted-text leading-relaxed">
            <p>
              I am a <strong className="text-foreground">Computer Science &amp; Engineering student</strong> at United International University (UIU) admitted in January 2023, currently specializing in the domain of <strong className="text-foreground">AI &amp; Data Science</strong>, with an focus on <strong className="text-foreground">Natural Language Processing (NLP)</strong> and <strong className="text-foreground">Large Language Models (LLMs)</strong>.
            </p>
            <p>
              Beyond AI modeling, I have a deep love for building robust web systems using frameworks like <strong className="text-foreground">Laravel</strong> and <strong className="text-foreground">Next.js</strong>. I am also an active competitive programmer and problem solver, having solved over <strong className="text-foreground">450 problems on Codeforces</strong> (max rating 941) and over <strong className="text-foreground">250 problems on Codechef</strong> (max rating 1176).
            </p>
            <p>
              When I step away from the compiler, I love doing heavy workouts in the gym, exploring local delicacies, traveling to scenic places, and learning about emerging technologies. Dhaka is my home, born and raised in the Mugda area.
            </p>
          </div>

          {/* Core Values / Focus Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-foreground/5 transition-colors duration-200">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">AI &amp; NLP Practitioner</h4>
                <p className="text-xs text-muted-text mt-0.5">Developing specialized models and tokenizers for text processing tasks.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-foreground/5 transition-colors duration-200">
              <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Competitive Programmer</h4>
                <p className="text-xs text-muted-text mt-0.5">Solving algorithmic puzzles and building optimized data structures.</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border-custom">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold text-muted-text/80 uppercase tracking-wider mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
