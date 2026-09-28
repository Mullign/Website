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

const StoryBlock = ({ label, children }) => (
  <p>
    <span className="font-semibold text-slate-900">{label} · </span>
    {children}
  </p>
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
          className={`group-hover:scale-[1.03] transition-transform duration-500 ${project.imageContain ? "object-contain p-6" : "object-cover"} ${project.imageClassName || ""}`}
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:hidden" />
      </Link>

      <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.personal && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              Personal project
            </span>
          )}
          {project.label && <span className="text-xs font-medium text-slate-500">{project.label}</span>}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-blue-600/90 mb-4">{project.summary}</p>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed flex-1">
          <StoryBlock label="Need">{project.need}</StoryBlock>
          <StoryBlock label="What I built">{project.implemented}</StoryBlock>
          <StoryBlock label="Technical choices">{project.decisions}</StoryBlock>
          <StoryBlock label="Purpose">{project.outcome}</StoryBlock>
        </div>

        <div className="flex flex-wrap gap-2 my-6">
          {project.stack.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

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
              Live site
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
    title: "DeGroff Aviation Technologies Website",
    label: "Web development · 2025 - Present",
    summary: "Production website for a commercial aviation product, built in my contract role at DeGroff Aviation Technologies.",
    need: "The company needed a production website that could explain a commercial aviation product, support customer outreach, and stay maintainable without a large internal web team.",
    implemented:
      "I designed and developed the site, including responsive layouts, reusable components, technical documentation, customer contact functionality, analytics, and SEO metadata.",
    decisions:
      "The stack is Next.js, React, TypeScript, and Tailwind CSS, with GitHub Actions for deployment, EmailJS for contact, Google Analytics, and a custom domain.",
    outcome:
      "The live site supports product presentation and customer outreach, and I continue to maintain it as product and company needs change.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "EmailJS",
      "Google Analytics",
      "SEO",
    ],
    image: "/degroff-logo.png",
    imageContain: true,
    live: "https://pitotshields.com/",
    github: null,
  },
  {
    title: "For A Child Website",
    label: "Web development · 2026 - Present",
    summary: "Redesign of the For A Child LLC website, connected to my volunteer work as web developer and system administrator.",
    need: "The organization needed a clearer, more usable website for families looking for programs and services, including better mobile use and more accessible information.",
    implemented:
      "I redesigned and developed the site with a focus on accessibility, usability, content organization, community outreach, and clearer navigation.",
    decisions:
      "The site is built as a responsive web project so information about programs and services is easier to find on phones and desktops, with accessibility treated as a design requirement rather than an afterthought.",
    outcome:
      "The current site presents the organization's programs and services more clearly and is easier for families to use.",
    stack: ["Responsive design", "Accessibility", "Content organization", "Community outreach"],
    image: "/for-a-child-logo.png",
    imageContain: true,
    imageClassName: "bg-[#1a1a1a]",
    live: "https://forachildllc.com",
    github: "https://github.com/Mullign/ForAChild",
  },
  {
    title: "Orion AI",
    label: "Personal full-stack project · 2026 - Present",
    personal: true,
    summary: "A personal project: a self-hosted AI workspace I built to practice full-stack development and deployment, not professional employment.",
    need: "I wanted a way to run AI chat locally, keep configuration under my control, and optionally connect cloud providers without relying on a hosted SaaS product.",
    implemented:
      "I built a self-hosted workspace with local Ollama support, optional OpenAI, Anthropic, and Google AI providers, authentication, provider configuration, persistent conversation storage, and automated model initialization.",
    decisions:
      "Docker Compose is used so the stack can be started as a single deployment, with local Ollama as the default path and cloud providers available when needed.",
    outcome:
      "The project makes self-hosted AI deployment and configuration easier to manage. It is a personal learning and portfolio project, not client or employer work.",
    stack: ["Docker Compose", "Ollama", "Authentication", "Provider configuration"],
    image: "/orion-logo.jpg",
    imageContain: true,
    imageClassName: "bg-slate-950",
    live: null,
    github: "https://github.com/Mullign/Orion-AI",
  },
];

const Projects = () => (
  <section id="projects" className="section-wrap">
    <div className="section-inner max-w-5xl">
      <h2 className="section-title">Selected projects</h2>
      <p className="section-subtitle">
        Each project starts with the need, then what I built, the technical choices involved, and what the work is for.
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
