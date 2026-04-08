"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { mailtoHref } from "@/constants/contact";

const GlowCard = ({ className = "" }) => (
  <div
    className={`absolute rounded-xl border border-blue-400/25 bg-white/50 backdrop-blur-[1px] shadow-sm pointer-events-none ${className}`}
    aria-hidden
  />
);

function HeroCta({
  href,
  children,
  variant = "primary",
  external,
}) {
  const glow = (
    <span
      className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-75 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-[10px]"
      aria-hidden
    />
  );

  const inner = {
    primary: (
      <span className="relative z-[1] flex w-full items-center justify-center gap-2 rounded-[11px] bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md ring-1 ring-white/25 transition-colors group-hover:bg-blue-500 min-h-[48px]">
        {children}
      </span>
    ),
    ghost: (
      <span className="relative z-[1] flex w-full items-center justify-center gap-2 rounded-[11px] bg-white/95 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-md ring-1 ring-slate-200/90 transition-all group-hover:ring-blue-300/70 min-h-[48px]">
        {children}
      </span>
    ),
    resume: (
      <span className="relative z-[1] flex w-full items-center justify-center gap-2 rounded-[11px] bg-gradient-to-b from-blue-50 to-white px-6 py-3.5 text-sm font-semibold text-blue-900 shadow-md ring-1 ring-blue-200/90 transition-all group-hover:from-blue-100 min-h-[48px]">
        {children}
      </span>
    ),
  }[variant];

  const shell =
    "group relative inline-flex w-full min-[400px]:w-auto rounded-xl p-[2px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={shell}>
        {glow}
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={shell}>
      {glow}
      {inner}
    </Link>
  );
}

const Hero = () => {
  return (
    <section className="min-h-[min(100dvh,860px)] flex items-center justify-center px-4 sm:px-6 pt-[5.5rem] pb-14 md:pt-28 md:pb-20 relative overflow-x-hidden overflow-y-visible">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(203 213 225 / 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(203 213 225 / 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.07] via-transparent to-purple-500/[0.05] pointer-events-none" />

      <GlowCard className="w-[5.5rem] h-[3.5rem] sm:w-28 sm:h-20 top-[11%] left-[5%] rotate-[-10deg] opacity-70" />
      <GlowCard className="w-[4.5rem] h-14 sm:w-24 sm:h-16 bottom-[16%] right-[6%] rotate-[8deg] opacity-60" />
      <div className="absolute w-2 h-2 rounded-full bg-blue-400/40 top-[26%] left-[20%] blur-px" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/35 bottom-[30%] right-[22%]" />

      <div className="w-full max-w-[34rem] md:max-w-[40rem] mx-auto text-center relative z-10">
        <div className="mb-5 sm:mb-6 md:mb-7 flex justify-center">
          <div className="relative w-[6.75rem] h-[6.75rem] sm:w-[7.75rem] sm:h-[7.75rem] md:w-[9.5rem] md:h-[9.5rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-fuchsia-400/25 blur-2xl scale-[1.2]" />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500/55 border-l-purple-500/45 animate-[spin_18s_linear_infinite]" />
            <div className="absolute inset-[6px] rounded-full overflow-hidden border-2 border-white shadow-lg ring-2 ring-blue-500/15">
              <Image src="/me.svg" alt="John Russell" fill priority className="object-cover scale-105" />
            </div>
          </div>
        </div>

        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 sm:mb-2.5">
          Software Engineer · Full-Stack Developer
        </p>

        <h1 className="font-bold text-slate-900 mb-2 sm:mb-3 px-0.5 overflow-visible">
          <span className="block tracking-tight text-[clamp(1.1rem,3.8vw,1.6rem)] sm:text-2xl md:text-3xl leading-[1.28] sm:leading-[1.32]">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Full-Stack Software Engineer</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0 animate-sparkle" aria-hidden />
            </span>
          </span>
          {/* Static gradient (no bg-position animation) — animating bg + clip-text often clips descenders */}
          <span className="hero-gradient-headline mt-1.5 sm:mt-2 text-balance text-[clamp(1rem,3.4vw,1.85rem)] sm:text-xl md:text-2xl lg:text-[2rem] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 tracking-normal">
            Building Real-World Applications
          </span>
        </h1>

        <p className="text-[11px] sm:text-sm text-slate-500 mb-4 sm:mb-5 font-medium max-w-md mx-auto px-1 py-1.5 [line-height:1.7]">
          React · TypeScript · Node.js · Next.js · PostgreSQL · REST APIs
        </p>

        <p className="text-sm sm:text-base text-slate-700 max-w-lg mx-auto mb-7 sm:mb-8 [line-height:1.75]">
          I build scalable web applications using modern technologies like React, TypeScript, and Node.js, with a focus on clean
          architecture and real-world problem solving.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-3 max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-7">
          <HeroCta href="#work" variant="primary">
            View My Work
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
          </HeroCta>
          <HeroCta href={mailtoHref} variant="ghost">
            Contact Me
          </HeroCta>
          <HeroCta href="/resume.pdf" variant="resume" external>
            <Download className="w-4 h-4 shrink-0" aria-hidden />
            Download Resume
          </HeroCta>
        </div>

        <p className="text-[10px] sm:text-xs text-slate-500">M.S. Computer Science (in progress) · Clemson University</p>
      </div>
    </section>
  );
};

export default Hero;
