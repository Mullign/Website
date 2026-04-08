"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ChevronRight } from "lucide-react";

const TechBadge = ({ children }) => (
  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-100">
    {children}
  </span>
);

const ProjectCard = ({ project }) => (
  <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-200/90 hover:-translate-y-0.5 transition-all duration-300 group">
    <div className="md:grid md:grid-cols-12 md:gap-0">
      <Link
        href={project.live || project.github || "#"}
        target={project.live || project.github ? "_blank" : undefined}
        rel={project.live || project.github ? "noopener noreferrer" : undefined}
        className="relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[320px] bg-gradient-to-br from-slate-100 to-slate-50 block overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover group-hover:scale-[1.03] transition-transform duration-500 ${project.imageContain ? "object-contain p-6" : ""} ${project.imageClassName || ""}`}
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:hidden" />
      </Link>

      <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-blue-600/90 mb-4">{project.summary}</p>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed flex-1">
          <p>
            <span className="font-semibold text-slate-900">Problem · </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Solution · </span>
            {project.solution}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 my-6">
          {project.stack.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <ul className="space-y-2 mb-8 text-sm text-slate-600 border-l-2 border-blue-200 pl-4">
          {project.features.map((f) => (
            <li key={f} className="leading-snug">
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden />
              GitHub
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 text-blue-700 px-4 py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              <Globe className="w-4 h-4" aria-hidden />
              Live demo
              <ChevronRight className="w-4 h-4 opacity-70" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </div>
  </article>
);

const projects = [
  {
    title: "Tech n Rescue — Asset Intake & Repair Tracker",
    summary: "Full-stack web app for nonprofit tech repair programs (public GitHub reference implementation).",
    problem:
      "Volunteer repair programs need accountable tracking from device donation through repair to handoff—without spreadsheets siloed by role or lost audit history.",
    solution:
      "Implemented a Next.js App Router application with Prisma + PostgreSQL for a normalized device model, status workflow (intake → repair → distribution), and JSON APIs guarded by middleware. Added NextAuth credentials with JWT sessions, Zod-validated inputs, and RBAC (admin, volunteer, intake) enforced in API handlers—mirroring how real orgs separate duties.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js v5",
      "Zod",
      "Tailwind CSS v4",
    ],
    features: [
      "Seven-stage device workflow with repair notes, parts usage, volunteer assignment, and distribution logging",
      "Dashboard aggregates: counts by status, assignments, and recently updated devices",
      "Admin user management; protected routes and 401 JSON responses on API misuse",
      "MIT-licensed public repo suitable for portfolio review",
    ],
    image: "/tech-n-rescue-logo.png",
    imageContain: true,
    imageClassName: "bg-[#0a1628]",
    live: null,
    github: "https://github.com/Mullign/Tech-N-Rescue",
  },
  {
    title: "PitotShield V2™ — Marketing & product site",
    summary: "Production web application for an aviation safety product (contract).",
    problem:
      "Stakeholders needed a credible, fast, media-rich site that explains a technical product to mixed audiences—operators, procurement, and partners—without a heavyweight CMS team.",
    solution:
      "Designed and built a modular Next.js + TypeScript front end with reusable layout primitives, static-friendly output, and asset strategies tuned for GitHub Pages–class hosting. Translated ownership feedback into shippable UI iterations and tightened perceived performance through image discipline and section-level code splitting.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI", "SEO metadata"],
    features: [
      "Component-driven architecture for long-form marketing sections and repeated content blocks",
      "Lead capture via EmailJS with client-side rate limiting",
      "Embedded training media and downloadable PDFs with clear CTAs",
      "Dark/light theme for extended reading sessions",
    ],
    image: "/degroff-logo.png",
    imageContain: true,
    live: "https://pitotshields.com/",
    github: null,
  },
  {
    title: "Do Better Everyday",
    summary: "Native iOS habit-tracking app focused on clarity and daily use.",
    problem:
      "Users needed a lightweight, trustworthy daily habit flow without noisy UI or laggy state updates on older phones.",
    solution:
      "Implemented a SwiftUI client with async-friendly loading paths and a compact navigation model so the critical path (log → feedback) stays under a few taps. Structured views for maintainability as features grow.",
    stack: ["Swift", "SwiftUI", "iOS", "Async patterns"],
    features: [
      "SwiftUI screens with smooth async loading and optimistic-style feedback",
      "Focused UX for recurring daily use (minimal chrome, clear hierarchy)",
      "Separation of UI and data flow for easier iteration",
    ],
    image: "/image.png",
    imageContain: false,
    live: null,
    github: "https://github.com/Mullign/Better-yourself",
  },
];

const Projects = () => (
  <section id="projects" className="section-wrap">
    <div className="section-inner max-w-5xl">
      <h2 className="section-title">Selected projects</h2>
      <p className="section-subtitle">
        Deep dives into shipped work—architecture choices, constraints, and outcomes. Each row is written for a quick technical scan.
      </p>
      <div className="space-y-16 md:space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
