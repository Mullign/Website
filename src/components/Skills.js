import React from "react";
import { Layout, Server, Wrench, HardDrive } from "lucide-react";

const SkillColumn = ({ title, skills, icon: Icon }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-all h-full">
    <div className="flex items-center gap-3 mb-5">
      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
        <Icon className="w-5 h-5 text-blue-700" aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const data = [
    {
      title: "Web Development",
      icon: Layout,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Systems and Infrastructure",
      icon: HardDrive,
      skills: ["Linux", "Docker", "Docker Compose", "Git", "GitHub Actions"],
    },
    {
      title: "Data and Backend",
      icon: Server,
      skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"],
    },
    {
      title: "Other Technical Experience",
      icon: Wrench,
      skills: [
        "System administration",
        "Technical troubleshooting",
        "Deployment workflows",
        "Domain configuration",
        "Analytics",
        "SEO",
      ],
    },
  ];

  return (
    <section id="skills" className="section-wrap">
      <div className="section-inner max-w-5xl">
        <h2 className="section-title">Technical skills</h2>
        <p className="section-subtitle">
          Tools and practices I use in websites, deployments, and day-to-day systems work.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {data.map((column) => (
            <SkillColumn key={column.title} title={column.title} skills={column.skills} icon={column.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
