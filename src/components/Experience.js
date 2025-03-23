import React from "react";

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="relative group">
    {/* Glowing border effect */}
    <div className="absolute -left-0.5 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-transparent group-hover:opacity-100 opacity-50 transition-opacity duration-300" />

    <div className="pl-6 py-4">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-2">
        {company} • <span className="text-blue-400/80">{period}</span>
      </p>
      <p className="text-gray-300/90">{description}</p>
    </div>

    {/* Hover highlight effect */}
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Project Manager/ Estimator",
      company: "Coon Restoration and Sealants",
      period: "2023 - Present",
      description:
        "Oversee project management for the Progressive Field lower and upper bowl restoration. Conduct detailed takeoffs for both restoration and new construction projects. Collaborate with clients to evaluate project feasibility and scope of work. Develop and present comprehensive bid packages, estimating labor and material costs. Coordinate the procurement of materials and machinery to meet project deadlines. Lead projects from planning to execution, ensuring efficiency and adherence to specifications. Participate in pre-bid meetings and bid openings to support business development. Enforce safety protocols and regulatory compliance on all job sites."
    },
    {
      title: "System Admin",
      company: "For a Child LLC",
      period: "2019 - Present",
      description:
        "Maintained and updated computers to ensure optimal system performance and security. Monitored and managed iOS and Android tablets used for teaching and email communication. Managed and ensured the reliability of the server for employee time tracking. Ensured network health and troubleshot connectivity issues. Diagnosed and rebuilt computers following hardware failures. Conducted routine system checks to ensure smooth operations and minimal downtime.",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
    </section>
  );
};

export default Experience;
