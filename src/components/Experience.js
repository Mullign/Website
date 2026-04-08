import React from "react";

const ExperienceItem = ({ title, company, location, period, description }) => (
  <div className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:border-blue-200/80 transition-colors">
    <div className="border-l-4 border-blue-500 pl-5 -ml-1">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm mt-1">
        {company}
        {location ? ` · ${location}` : ""}
        <span className="text-slate-400"> · </span>
        <span className="text-blue-700 font-medium">{period}</span>
      </p>
      <p className="text-slate-700 leading-relaxed mt-4 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer (Contract)",
      company: "DeGroff Aviation Technologies",
      location: "Remote",
      period: "Mar 2025 – Present",
      description:
        "Developed a production web application using React, Next.js, and TypeScript, contributing to core user-facing functionality. Built reusable, modular UI components for a scalable, maintainable architecture; translated stakeholder requirements into functional UI/UX; and improved performance through optimized rendering and asset handling.",
    },
    {
      title: "System Administrator (Volunteer)",
      company: "For A Child LLC",
      location: "Canton, Ohio",
      period: "Jan 2019 – Present",
      description:
        "Managed IT systems across Windows environments for reliability and uptime. Configured and supported iOS and Android devices for organizational use; diagnosed and resolved system and network issues; and maintained secure data access and performance across environments.",
    },
    {
      title: "Technical Specialist (Volunteer)",
      company: "Tech n Rescue",
      location: "Ohio",
      period: "Nov 2024 – Present",
      description:
        "Designed and improved workflows for device intake, repair tracking, and distribution. Supported systems for multi-user coordination and operational tracking; maintained Linux and Windows environments for consistent performance.",
    },
    {
      title: "Project Manager",
      company: "Coon Restoration",
      location: "Louisville, Ohio",
      period: "Apr 2023 – 2025",
      description:
        "Managed large-scale restoration projects: coordinated subcontractors, scheduling, and logistics. Oversaw RFIs, submittals, and documentation to keep timelines and scope accurate.",
    },
  ];

  return (
    <section id="experience" className="section-wrap">
      <div className="section-inner max-w-5xl">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Recent roles—engineering-first, with operations and leadership context.</p>
        <div className="space-y-5 max-w-3xl">
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.title}`} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
