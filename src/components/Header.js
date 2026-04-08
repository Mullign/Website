"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, ChevronRight, FileText, Menu, X, Github, Linkedin } from "lucide-react";
import { mailtoHref } from "@/constants/contact";
const GITHUB_HREF = "https://github.com/Mullign";
const LINKEDIN_HREF = "https://www.linkedin.com/in/john-russell-61a530220";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

const GlowingButton = () => (
  <Link
    href={mailtoHref}
    className="relative group glow-button inline-flex rounded-full"
  >
    <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 blur-md group-hover:opacity-100 animate-pulse group-hover:animate-none transition-opacity" />
    <div className="relative px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-blue-500/40 shadow-sm flex items-center gap-2 ring-1 ring-blue-500/20 group-hover:border-blue-500/60 group-hover:ring-blue-400/30">
      <Mail size={16} className="text-blue-600" />
      <span className="text-sm font-medium text-slate-800 group-hover:text-blue-700">Contact</span>
      <ChevronRight size={16} className="text-blue-600/70 group-hover:translate-x-0.5 transition-transform" />
    </div>
  </Link>
);

const ResumeButton = () => (
  <Link
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group resume-button inline-flex rounded-full"
  >
    <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 blur-md group-hover:opacity-100 animate-pulse group-hover:animate-none transition-opacity" />
    <div className="relative px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-blue-500/40 shadow-sm flex items-center gap-2 ring-1 ring-blue-500/20 group-hover:border-blue-500/60 group-hover:ring-blue-400/30">
      <FileText size={16} className="text-blue-600" />
      <span className="text-sm font-medium text-slate-800 group-hover:text-blue-700">Download Resume</span>
    </div>
  </Link>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200/80" : "bg-white/70 backdrop-blur-md"
        }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-slate-900 font-semibold tracking-tight shrink-0">
            JOHN R<span className="text-blue-600">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 rounded-lg hover:bg-blue-50/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={mailtoHref}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <ResumeButton />
            <GlowingButton />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200 mt-3 pt-4 pb-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 py-3 border-t border-slate-100 mt-2">
              <Link href={GITHUB_HREF} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-700" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </Link>
              <Link href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-700" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href={mailtoHref} className="p-2 text-slate-700" aria-label="Email">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex flex-col gap-2 px-3">
              <ResumeButton />
              <GlowingButton />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
