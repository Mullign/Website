import React from "react";

const About = () => (
  <section className="py-20 px-6 relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
        About Me
      </h2>
      <div className="text-lg space-y-4">
        <p className="text-gray-700 leading-relaxed">
          I am a self-taught software developer with a passion for building high-quality applications and scalable digital solutions. What started as a curiosity about how software is created has grown into hands-on experience developing websites, applications, and system integrations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With a background in project management and IT systems, I bring a unique blend of technical skill and real-world operational experience. I am currently advancing my expertise through Clemson&apos;s Master of Computer Science program and have earned Google&apos;s Cybersecurity Certificate. I enjoy solving complex problems, improving workflows with technology, and creating clean, well-structured software.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I am looking to transition fully into a software development role where I can apply my technical abilities and project-driven mindset.
        </p>
      </div>
    </div>
    {/* Glass effect background */}
    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
  </section>
);

export default About;
