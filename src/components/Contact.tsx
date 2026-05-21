"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (form.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
      
      // Auto-dismiss success popup after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Email",
      value: "fardin.fahim.dev@gmail.com",
      href: "mailto:fardin.fahim.dev@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      colorClass: "hover:text-primary hover:border-primary/30",
    },
    {
      name: "GitHub",
      value: "github.com/fardinfahim",
      href: "https://github.com/fardinfahim",
      icon: <GithubIcon className="w-5 h-5" />,
      colorClass: "hover:text-foreground hover:border-foreground/30",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/fardinfahim",
      href: "https://linkedin.com/in/fardinfahim",
      icon: <LinkedinIcon className="w-5 h-5" />,
      colorClass: "hover:text-secondary hover:border-secondary/30",
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">// Get In Touch</span>
        <h2 className="text-4xl font-extrabold tracking-tight">Contact Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Let&apos;s build something amazing together</h3>
            <p className="text-sm text-muted-text leading-relaxed max-w-sm mb-6">
              I am open to freelance work, full-time positions, or simply networking with fellow developers. Drop me a line!
            </p>
          </div>

          <div className="space-y-4 my-auto">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-4 items-center p-4 rounded-xl glass-panel bg-card/25 border-border-custom hover:bg-foreground/5 hover:shadow-glow/5 transition-all duration-300 group ${link.colorClass}`}
              >
                <div className="p-3 rounded-lg bg-foreground/5 text-muted-text group-hover:text-inherit group-hover:bg-foreground/10 transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono font-semibold text-muted-text/60 uppercase">{link.name}</span>
                  <span className="text-sm font-semibold text-foreground">{link.value}</span>
                </div>
              </a>
            ))}
            
            {/* Location Card */}
            <div className="flex gap-4 items-center p-4 rounded-xl glass-panel bg-card/25 border border-border-custom cursor-default">
              <div className="p-3 rounded-lg bg-foreground/5 text-muted-text">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-semibold text-muted-text/60 uppercase">Location</span>
                <span className="text-sm font-semibold text-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-text/60 font-mono hidden lg:block">
            <span>// Active response window: 9 AM - 6 PM GMT+6</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-2xl border border-border-custom bg-card/45 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-mono font-semibold text-muted-text mb-2 uppercase">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-background/30 border text-sm text-foreground placeholder:text-muted-text/40 transition-all duration-300 outline-none ${
                      errors.name 
                        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" 
                        : "border-border-custom focus:border-primary focus:shadow-glow/10 focus:ring-2 focus:ring-primary/10"
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 font-semibold mt-1.5 ml-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-mono font-semibold text-muted-text mb-2 uppercase">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-background/30 border text-sm text-foreground placeholder:text-muted-text/40 transition-all duration-300 outline-none ${
                      errors.email 
                        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" 
                        : "border-border-custom focus:border-primary focus:shadow-glow/10 focus:ring-2 focus:ring-primary/10"
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 font-semibold mt-1.5 ml-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-mono font-semibold text-muted-text mb-2 uppercase">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="I want to build a website with you..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-background/30 border text-sm text-foreground placeholder:text-muted-text/40 transition-all duration-300 outline-none resize-none ${
                      errors.message 
                        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" 
                        : "border-border-custom focus:border-primary focus:shadow-glow/10 focus:ring-2 focus:ring-primary/10"
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] text-red-500 font-semibold mt-1.5 ml-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Form Success / Error popups */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-semibold"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent successfully! I will reply back shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-primary text-background font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
