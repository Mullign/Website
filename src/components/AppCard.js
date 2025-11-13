import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github } from "lucide-react";

const StoreButton = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm 
    hover:bg-blue-100 transition-all duration-300 border border-blue-200 hover:border-blue-300 gap-2
    shadow-sm group"
  >
    <Icon size={16} />
    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
      {label}
    </span>
  </Link>
);

const Item = ({
  title,
  description,
  logo,
  github,
  website,
}) => (
  <div className="flex-shrink-0 w-[380px] group">
    <div
      className="relative bg-white/80 backdrop-blur-md rounded-xl border border-blue-300/40 
    hover:border-blue-400/60 shadow-md transition-all duration-500 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-100/30 opacity-0 
      group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="relative w-16 h-16 rounded-2xl overflow-hidden border border-blue-300/40 
          shadow-md"
          >
            <Image
              src={logo}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <h3
              className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 
            transition-colors duration-300"
            >
              {title}
            </h3>
            <div
              className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
            opacity-60 group-hover:w-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed min-h-[80px]">
          {description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {github && (
            <StoreButton href={github} icon={Github} label="Source Code" />
          )}
          {website && (
            <StoreButton href={website} icon={Globe} label="Website" />
          )}
        </div>
      </div>
    </div>
  </div>
);

const AppCard = () => {
  const apps = [
    {
      id: "Do Better Everyday",
      title: "Do Better Everyday",
      description:
        "Developed a native iOS application using SwiftUI. Designed a clean interface with smooth asynchronous loading and intuitive user experience.",
      logo: "/image.png",
      github: "https://github.com/Mullign/Better-yourself",
    },
    {
      id: "PitotShields",
      title: "PitotShield V2™ SmartCover™",
      description:
        "Prevent Covered Pitot Events (COPEs) with PSV2™ SmartCover™. Heat-activated, auto-releasing pitot tube cover engineered to eliminate COPEs, protect mission-critical probes, and keep crews focused on the mission.",
      logo: "/degroff-logo.png",
      website: "https://pitotshields.com/",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Section content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-blue-700 
        text-transparent bg-clip-text"
        >
          Projects
        </h2>

        {/* Cards container with custom scrollbar */}
        <div
          className="flex gap-8 overflow-x-auto pb-8 px-1
        scrollbar-thin scrollbar-thumb-blue-400/40 scrollbar-track-transparent
        hover:scrollbar-thumb-blue-500/60 transition-colors duration-300"
        >
          {apps.map((app) => (
            <Item key={app.id} {...app} />
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
    </section>
  );
};

export default AppCard;
