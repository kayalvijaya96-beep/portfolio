import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

export default function ExperienceBento() {
  const internships = [
    {
      company: "CodeAlpha",
      role: "Virtual Internship for Artificial Intelligence",
      period: "10 Feb 2026 – 10 Mar 2026",
      points: [
        "Architected a Real-Time Object Detection System using Python, OpenCV, and Ultralytics YOLOv8, identifying and tracking multiple objects dynamically from live webcam feeds.",
        "Built an interactive real-time multi-language Translation Tool utilizing Python, Streamlit, and Googletrans API with support for 50+ languages.",
      ],
      skills: ["Python", "OpenCV", "Ultralytics YOLOv8", "Streamlit", "Computer Vision", "Googletrans"],
    },
    {
      company: "CodeAlpha",
      role: "Virtual Internship for Java Development",
      period: "10 May 2026 – 10 Jun 2026",
      points: [
        "Engineered an interactive Stock Trading Platform that simulates real-world investment trading environments, tracking portfolio assets, order histories, and net worth fluctuations.",
        "Built a console-based Java application 'Student Grade Tracker' applying Object-Oriented Programming (OOP) to manage academic records and compute performance analytics.",
      ],
      skills: ["Java", "OOP Principles", "HashMap & Collections", "Scanner Class", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="experience" className="space-y-6 pt-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Work Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            Internship Experience
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Hands-on technical internships building production computer vision models, NLP engines, and Java software systems.
        </p>
      </div>

      {/* Bento Grid Experience Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {internships.map((job, idx) => (
          <div
            key={idx}
            className="bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-5"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="font-extrabold text-white text-lg tracking-tight">{job.role}</h3>
                  <p className="text-blue-400 font-semibold text-xs mt-0.5">{job.company}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-xl border border-slate-800 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {job.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Tags */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {job.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded-lg border border-slate-800 font-medium"
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

