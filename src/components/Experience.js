import React from "react";

const ExperienceItem = ({ title, company, location, period, highlights }) => (
  <article className="relative h-full rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:border-blue-200/80 hover:shadow-md transition-all">
    <div className="border-l-4 border-blue-500 pl-5 -ml-1 h-full">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm mt-1">
        {company}
        {location ? ` · ${location}` : ""}
      </p>
      <p className="text-blue-700 font-medium text-sm mt-1">{period}</p>
      <ul className="mt-4 space-y-2.5 text-sm md:text-[0.95rem] text-slate-700">
        {highlights.map((item) => (
          <li key={item} className="leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer, Contract",
      company: "DeGroff Aviation Technologies",
      location: "Remote",
      period: "March 2025 - Present",
      highlights: [
        "Develop and maintain the company website using Next.js, React, TypeScript, and Tailwind CSS for a commercial aviation product.",
        "Build responsive components and manage deployment, domain configuration, analytics, SEO, technical documentation, and customer contact functionality.",
        "Translate company and product requirements into website features, technical content, and maintainable solutions that support customer outreach and product presentation.",
      ],
    },
    {
      title: "Project Manager",
      company: "Coon Restoration & Sealants, Inc.",
      location: "Louisville, Ohio",
      period: "April 2023 - November 2025",
      highlights: [
        "Managed large-scale restoration projects including Progressive Field, Akron City School restorations, and the Moundsville Municipal Building.",
        "Coordinated subcontractors, schedules, inspections, material logistics, and daily field operations.",
        "Managed RFIs, submittals, change orders, documentation, meetings, and communication between owners, architects, engineers, subcontractors, and field personnel.",
        "Coordinated project requirements, field activities, documentation, and stakeholder communication from planning through project completion.",
      ],
    },
    {
      title: "Treasurer",
      company: "Tech N Rescue",
      location: "Ohio",
      period: "November 2024 - Present",
      highlights: [
        "Manage financial records, income and expenses, transaction documentation, budgeting, and financial planning.",
        "Help organize rescue training classes, including scheduling, instructors, class requirements, and organizational coordination.",
        "Maintain Linux-based systems used for radio coordination and location tracking of search personnel during rescue operations.",
      ],
    },
    {
      title: "Web Developer and System Administrator, Volunteer",
      company: "For A Child LLC",
      location: "Canton, Ohio",
      period: "January 2019 - Present",
      highlights: [
        "Design, develop, and maintain the organization's website, with a focus on accessibility, usability, and community outreach.",
        "Maintain organizational computers, mobile devices, websites, and other technology.",
        "Provide technical support and troubleshoot day-to-day technology needs.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-wrap">
      <div className="section-inner max-w-5xl">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Project leadership, web development, system administration, and technical support. Each role is given equal
          space because they are all part of how I work.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.title}`} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
