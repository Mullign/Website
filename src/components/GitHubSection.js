import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const GITHUB_USER = "Mullign";

const GitHubSection = () => (
  <section className="section-wrap bg-slate-50/50">
    <div className="section-inner max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="section-title mb-2">GitHub activity</h2>
          <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
            Public contribution history. See repositories and pinned work on GitHub for code-level detail.
          </p>
        </div>
        <Link
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 shrink-0"
        >
          <Github className="w-4 h-4" aria-hidden />
          github.com/{GITHUB_USER}
        </Link>
      </div>
      <Link
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/${GITHUB_USER}`}
          alt={`GitHub contribution chart for ${GITHUB_USER}`}
          className="w-full h-auto max-h-24 md:max-h-28 object-contain"
          loading="lazy"
        />
      </Link>
    </div>
  </section>
);

export default GitHubSection;
