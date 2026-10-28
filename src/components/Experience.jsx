import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const internships = [
    {
      company: "CodeAlpha",
      role: "Virtual Internship for Artificial Intelligence",
      period: "10 Feb 2026 – 10 Mar 2026",
      points: [
        "Built a Real-Time Object Detection System using Python, OpenCV, and Ultralytics YOLOv8 capable of recognizing and bounding objects with high accuracy on live webcam streams.",
        "Developed an interactive multi-language Translation Tool utilizing Python, Streamlit, and the Googletrans library to process instantaneous translations across global languages.",
      ],
      skills: ["Python", "OpenCV", "Ultralytics YOLOv8", "Streamlit", "Googletrans", "Computer Vision"],
    },
    {
      company: "CodeAlpha",
      role: "Virtual Internship for Java Development",
      period: "10 May 2026 – 10 Jun 2026",
      points: [
        "Architected an interactive Stock Trading Platform that simulates real-world investment trading environments, tracking portfolio assets, order histories, and net worth fluctuations.",
        "Engineered a console-based Java application 'Student Grade Tracker' applying Object-Oriented Programming (OOP) to manage academic records and compute performance analytics.",
      ],
      skills: ["Java", "OOP Principles", "HashMap & Collections", "Scanner Class", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-12 space-y-6">
      
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5 text-violet-600" />
          <span>Experience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Virtual Internship Experience
        </h2>
        <p className="mt-2 text-slate-600 text-sm">
          Hands-on production projects across artificial intelligence, computer vision, and Java systems.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4">
        {internships.map((job, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">{job.role}</h3>
                <p className="text-violet-700 font-bold text-sm">{job.company}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-violet-700 bg-violet-50 px-3 py-1 rounded-xl border border-violet-200/80 w-fit font-medium">
                <Calendar className="w-3.5 h-3.5 text-violet-600" />
                <span>{job.period}</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
              {job.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {job.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 bg-violet-50/70 text-violet-800 text-xs rounded-lg border border-violet-200/60 font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
