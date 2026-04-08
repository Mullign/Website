import React from "react";

const About = () => (
  <section id="about" className="section-wrap">
    <div className="section-inner max-w-3xl">
      <h2 className="section-title">About</h2>
      <div className="space-y-5 text-slate-700 leading-relaxed text-base">
        <p>
          I moved into software engineering from hands-on project management and IT operations. That background shaped how I work:
          clarify requirements early, communicate tradeoffs clearly, and ship incrementally instead of boiling the ocean.
        </p>
        <p>
          I enjoy breaking down ambiguous problems—whether it&apos;s UI architecture, API boundaries, or performance—and turning them
          into maintainable code. I&apos;m completing an M.S. in Computer Science at Clemson to deepen theory in parallel with
          production engineering work.
        </p>
        <p className="text-slate-800 font-medium">
          I&apos;m targeting software engineering roles where I can own features end-to-end and collaborate with a strong product
          and platform culture.
        </p>
      </div>
    </div>
  </section>
);

export default About;
