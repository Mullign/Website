import React from "react";
import { GraduationCap } from "lucide-react";

const EducationItem = ({ degree, school, location, period }) => (
  <div className="relative group">
    {/* Glowing border effect */}
    <div className="absolute -left-0.5 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-blue-600 to-transparent group-hover:opacity-100 opacity-60 transition-opacity duration-300" />

    <div className="pl-6 py-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 p-2 rounded-lg bg-blue-100 border border-blue-300 group-hover:bg-blue-200 transition-colors duration-300">
          <GraduationCap className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {degree}
          </h3>
          <p className="text-gray-600 mb-1">
            {school}{location ? ` • ${location}` : ''}
          </p>
          <p className="text-blue-600/80 text-sm">{period}</p>
        </div>
      </div>
    </div>

    {/* Hover highlight effect */}
    <div className="absolute inset-0 bg-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Clemson University",
      location: "Clemson, South Carolina",
      period: "Jan 2025 to Present",
    },
    {
      degree: "Bachelor of Science in Construction Management",
      school: "Kent State University",
      location: "Kent, Ohio",
      period: "Aug 2020 to Apr 2024",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
    </section>
  );
};

export default Education;

