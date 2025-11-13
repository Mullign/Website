import React from "react";

const ExperienceItem = ({ title, company, location, period, description }) => (
  <div className="relative group">
    {/* Glowing border effect */}
    <div className="absolute -left-0.5 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-blue-600 to-transparent group-hover:opacity-100 opacity-60 transition-opacity duration-300" />

    <div className="pl-6 py-4">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-2">
        {company}{location ? ` • ${location}` : ''} • <span className="text-blue-600/80">{period}</span>
      </p>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>

    {/* Hover highlight effect */}
    <div className="absolute inset-0 bg-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "DeGroff Aviation Technologies",
      location: "Canton, Ohio",
      period: "2025 to Present",
      description:
        "Building a new website for a proprietary aviation product using React and Tailwind CSS. Creating reusable components and a scalable front-end structure. Working directly with ownership on design, branding, copy, and layout. Improving performance, mobile responsiveness, and load efficiency."
    },
    {
      title: "Project Manager",
      company: "Coon Restoration",
      location: "Louisville, Ohio",
      period: "2023 to 2025",
      description:
        "Managed major restoration projects including the Progressive Field lower and upper bowl. Ran the full Moundsville WV Municipal Building project as Project Manager and Site Superintendent. Coordinated subcontractors, schedules, inspections, and material logistics. Completed RFIs, submittals, change orders, weekly meetings, documentation, and safety oversight. Supervised daily field operations and performed equipment operation when needed."
    },
    {
      title: "Volunteer Technician",
      company: "Tech n Rescue",
      location: "Ohio",
      period: "2024 to Present",
      description:
        "Support field operations, events, and training for search and rescue teams. Work with sonar tools, signal range extenders, communications hardware, and tactical equipment. Assist with new equipment testing, field configuration, and deployment. Maintain and configure custom PCs, Raspberry Pi devices, Starlink Roam, CivTAK systems, Windows Server, Arch Linux VMs, and Meshtastic devices."
    },
    {
      title: "System Administrator",
      company: "For A Child LLC",
      location: "Canton, Ohio",
      period: "2019 to Present",
      description:
        "Maintain secure, reliable computer systems and devices. Manage iOS and Android tablets for teaching and communication. Administer Microsoft Server and ensure reliable data access. Diagnose and repair hardware failures and perform routine system checks.",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
    </section>
  );
};

export default Experience;
