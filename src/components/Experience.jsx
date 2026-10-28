import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Terminal } from 'lucide-react';

export default function Experience() {
  const internships = [
    {
      company: "CodeAlpha",
      role: "Virtual Internship for Artificial Intelligence",
      period: "10 Feb 2026 – 10 Mar 2026",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
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
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      points: [
        "Architected an interactive Stock Trading Platform that simulates real-world investment trading environments, tracking portfolio assets, order histories, and net worth fluctuations.",
        "Engineered a console-based Java application 'Student Grade Tracker' applying Object-Oriented Programming (OOP) to manage academic records and compute performance analytics.",
      ],
      skills: ["Java", "OOP Principles", "HashMap & Collections", "Scanner Class", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Hands-on experience developing AI computer vision systems, translation tools, and robust Java software.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {internships.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-xl">{job.role}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{job.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border bg-slate-50 text-slate-600 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mt-4 text-slate-600 text-sm leading-relaxed">
                {job.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Pills */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-blue-50/70 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg border border-blue-200/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

