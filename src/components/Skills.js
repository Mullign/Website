import React from "react";
import { Layout, Server, Wrench } from "lucide-react";

const SkillColumn = ({ title, skills, icon: Icon }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-all">
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
  const data = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "SwiftUI"],
    backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth patterns (e.g. NextAuth)"],
    tools: ["Git", "Docker", "AWS (basics)", "Azure AD", "Linux", "VS Code", "Xcode"],
  };

  return (
    <section id="skills" className="section-wrap">
      <div className="section-inner max-w-5xl">
        <h2 className="section-title">Technical skills</h2>
        <p className="section-subtitle">
          Grouped for quick scanning—strongest web stack first, then backend data layer, then delivery tooling.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <SkillColumn title="Frontend" skills={data.frontend} icon={Layout} />
          <SkillColumn title="Backend & data" skills={data.backend} icon={Server} />
          <SkillColumn title="Tools & platforms" skills={data.tools} icon={Wrench} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
