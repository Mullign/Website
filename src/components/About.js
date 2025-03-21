import React from "react";

const About = () => (
  <section className="py-20 px-6 relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
        About Me
      </h2>
      <div className="text-lg space-y-4">
        <p className="text-gray-300/90">
          I&apos;m a self-taught software developer with a passion for mobile
          development. My journey in programming started with a curiosity to
          learn how things where built to learn how to build my own apps and software.
        </p>
        <p className="text-gray-300/90">
        Results-driven Project Manager with a strong passion for technology, cybersecurity, 
        and IT systems. Currently enrolled in Clemson's Master of Computer Science program 
        and holds Google's Cybersecurity Certificate, demonstrating a commitment to transitioning 
        into the tech industry. Skilled in overseeing complex projects, integrating digital solutions,
         and implementing computer systems for businesses. Adept at problem-solving, risk management, 
         and information security, with a proactive and analytical approach. Seeking to leverage project 
         management expertise and technical knowledge in a professional IT-focused role.
        </p>
      </div>
    </div>
    {/* Glass effect background */}
    <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
  </section>
);

export default About;
