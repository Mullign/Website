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
          Welcome! I'm John Russell, a project manager with a backround in construction 
          and a passion for techcnology. I thrive on blending practical project experience 
          with a lifelong interst in computers, software, and inovation. Currently 
          pursuing my Master's in Computer Science at Clemson University. Im focused on
          transitioning into the tech industy to create impactful solutions. Always learning,
          always building.
        </p>
      </div>
    </div>
    {/* Glass effect background */}
    <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
  </section>
);

export default About;
