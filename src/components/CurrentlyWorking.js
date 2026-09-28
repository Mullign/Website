import React from "react";
import { BookOpen } from "lucide-react";

const CurrentlyWorking = () => (
  <section className="section-wrap bg-white border-y border-slate-100">
    <div className="section-inner max-w-5xl">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-6">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-blue-700" aria-hidden />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Currently focused on</h2>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            Expanding my technical knowledge through Clemson University&apos;s M.S. in Computer Science program while
            continuing to build and support real-world technology solutions. My experience across project management, web
            development, and systems support has led me toward roles that connect technical implementation with business
            and organizational needs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CurrentlyWorking;
