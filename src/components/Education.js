import React from "react";
import { GraduationCap } from "lucide-react";

const EducationItem = ({ degree, school, location, period }) => (
  <div className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:border-blue-200 transition-colors">
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 shrink-0">
        <GraduationCap className="w-5 h-5 text-blue-700" aria-hidden />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{degree}</h3>
        <p className="text-slate-600 mt-1">
          {school}
          {location ? ` · ${location}` : ""}
        </p>
        <p className="text-blue-700 font-medium text-sm mt-2">{period}</p>
      </div>
    </div>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Clemson University",
      location: "Clemson, South Carolina",
      period: "Jan 2025 — Present",
    },
    {
      degree: "Bachelor of Science in Construction Management",
      school: "Kent State University",
      location: "Kent, Ohio",
      period: "Aug 2020 — Apr 2024",
    },
  ];

  return (
    <section id="education" className="section-wrap bg-slate-50/50 border-y border-slate-100">
      <div className="section-inner max-w-5xl">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Formal training complementing production engineering experience.</p>
        <div className="space-y-4 max-w-3xl">
          {education.map((edu) => (
            <EducationItem key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
