import React from "react";
import { Code, Settings } from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="group relative">
    <div className="relative bg-white/80 backdrop-blur-md rounded-xl border border-blue-300/40 hover:border-blue-400/60 shadow-md transition-all duration-500 overflow-hidden p-6">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-100 border border-blue-300 group-hover:bg-blue-200 transition-colors duration-300">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-sm
                         hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 
                         transition-all duration-300 transform hover:scale-105 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    programming: [
      "Python",
      "Java",
      "C++",
      "C",
      "C#",
      "JavaScript",
      "Swift",
      "SwiftUI",
      "HTML5",
      "CSS3",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Next.js",
      "AWS",
      "Azure AD",
      "Docker",
      "Flask",
      "VS Code",
      "iOS",
      "Xcode",
    ],
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCategory
            title="Programming"
            skills={skillsData.programming}
            icon={Code}
          />
          <SkillCategory
            title="Technologies"
            skills={skillsData.technologies}
            icon={Settings}
          />
        </div>
      </div>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
    </section>
  );
};

export default Skills;

