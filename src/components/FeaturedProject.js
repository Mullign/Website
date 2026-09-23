import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Star } from "lucide-react";

const GITHUB = "https://github.com/Mullign/ForAChild";
const LIVE = "https://forachildllc.com";

const FeaturedProject = () => (
  <section id="work" className="section-wrap bg-gradient-to-b from-slate-900/[0.03] via-slate-50/80 to-slate-50/80 border-y border-slate-200/80">
    <div className="section-inner max-w-5xl">
      <div className="flex items-center gap-2 mb-2">
        <Star className="w-5 h-5 text-amber-500 fill-amber-400" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Featured project</span>
      </div>
      <h2 className="section-title">For A Child — Preschool &amp; Daycare Website</h2>
      <p className="section-subtitle mb-10">
        Production Next.js site for a licensed preschool in North Canton, Ohio—content-driven pages, accessibility-minded
        layout, SEO metadata, and a calm pastel brand system parents can trust.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40 overflow-hidden md:grid md:grid-cols-2 md:gap-0 group hover:shadow-2xl hover:border-slate-400/40 transition-all duration-300 ring-1 ring-slate-100">
        <Link
          href={LIVE}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] block bg-[#1a1a1a] overflow-hidden shrink-0"
        >
          <Image
            src="/for-a-child-logo.png"
            alt="For A Child, LLC logo"
            fill
            className="object-contain p-8 md:p-12 group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" aria-hidden />
        </Link>
        <div className="p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Modern web presence for a local preschool</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Next.js App Router, TypeScript, and Tailwind CSS—centralized content config, semantic sections, JSON-LD, and
            real classroom photography. Built so school staff can update copy without inventing details or fighting the CMS.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Next.js", "TypeScript", "Tailwind CSS", "SEO / JSON-LD", "Content config", "Accessible UI"].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" aria-hidden />
              Live site
            </Link>
            <Link
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white text-slate-800 px-5 py-2.5 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden />
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProject;
