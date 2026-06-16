import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Star } from "lucide-react";

const GITHUB = "https://github.com/Mullign/Orion-AI";

const FeaturedProject = () => (
  <section id="work" className="section-wrap bg-gradient-to-b from-slate-900/[0.03] via-slate-50/80 to-slate-50/80 border-y border-slate-200/80">
    <div className="section-inner max-w-5xl">
      <div className="flex items-center gap-2 mb-2">
        <Star className="w-5 h-5 text-amber-500 fill-amber-400" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Featured project</span>
      </div>
      <h2 className="section-title">Orion AI — Self-Hosted AI Chat Workspace</h2>
      <p className="section-subtitle mb-10">
        Open-source AI chat you run yourself—local Ollama by default, optional cloud providers, password-protected sessions, and conversation
        history kept on your machine. Clone, configure, and ship with one Docker Compose setup.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40 overflow-hidden md:grid md:grid-cols-2 md:gap-0 group hover:shadow-2xl hover:border-slate-400/40 transition-all duration-300 ring-1 ring-slate-100">
        <Link
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] block bg-slate-950 overflow-hidden shrink-0"
        >
          <Image
            src="/orion-logo.jpg"
            alt="Orion AI logo"
            fill
            className="object-contain p-6 md:p-10 group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" aria-hidden />
        </Link>
        <div className="p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Private AI chat, zero SaaS lock-in</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            Next.js 16, TypeScript, Vercel AI SDK, and Docker Compose—JWT session auth, multi-provider routing (Ollama, OpenAI, Anthropic,
            Google), persisted conversations, and a guided setup flow. Open source and ready to self-host.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Next.js", "TypeScript", "Vercel AI SDK", "Ollama", "Docker Compose", "Tailwind CSS v4"].map((t) => (
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
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md"
            >
              <Github className="w-4 h-4" aria-hidden />
              View on GitHub
            </Link>
            <Link
              href={`${GITHUB}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              README &amp; docs
              <ExternalLink className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProject;
