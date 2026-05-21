import React from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <div className="relative flex-grow w-full min-h-screen">
        {/* Background Animation & Grids */}
        <ParticlesBackground />

        {/* Portfolio Sections */}
        <div className="relative z-10 w-full flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>

      {/* Footer Content */}
      <Footer />

      {/* Floating Theme Selection Panel */}
      <ThemeSwitcher />
    </>
  );
}
