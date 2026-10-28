import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      title: "Real-Time Object Detection System",
      category: "AI & Computer Vision",
      badge: "Computer Vision",
      description: "High-performance object detection pipeline leveraging YOLOv8 and OpenCV to capture, classify, and track live objects from webcam feeds in real time.",
      stack: ["Python", "OpenCV", "Ultralytics YOLOv8", "Deep Learning"],
      github: "https://github.com/kayalvijaya96-beep/object-detection",
      featured: true,
    },
    {
      title: "Real-Time Multi-Language Translator",
      category: "NLP & Web Apps",
      badge: "NLP / Streamlit",
      description: "Interactive translation suite powered by Googletrans and Streamlit, providing instantaneous cross-lingual text translation across 50+ languages.",
      stack: ["Python", "Streamlit", "Googletrans", "NLP"],
      github: "https://github.com/kayalvijaya96-beep/language-translator",
      featured: true,
    },
    {
      title: "Virtual Stock Trading Engine",
      category: "Java Software",
      badge: "Financial Engine",
      description: "Console & collection-backed stock trading simulator featuring dynamic portfolio valuation, order execution, real-time balance calculations, and history tracking.",
      stack: ["Java", "OOP Principles", "HashMaps", "Collections", "IntelliJ IDEA"],
      github: "https://github.com/kayalvijaya96-beep/stock-trading-platform",
      featured: false,
    },
    {
      title: "Pantry-to-Plate Recipe Generator",
      category: "Web Development",
      badge: "Ideathon 2026",
      description: "Smart culinary web application developed for Ideathon 2026. Suggests recipes based on household pantry ingredients.",
      stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      github: "https://github.com/kayalvijaya96-beep/pantry-to-plate",
      featured: true,
    },
    {
      title: "StudyPilot: AI Study Tracker",
      category: "AI & EdTech",
      badge: "AI Tracker",
      description: "Intelligent academic companion using NumPy and Streamlit to monitor study routines and recommend optimal revision intervals.",
      stack: ["Python", "Streamlit", "NumPy", "AI Algorithms"],
      github: "https://github.com/kayalvijaya96-beep/studypilot-tracker",
      featured: false,
    },
  ];

  const categories = ['All', 'AI & Computer Vision', 'Web Development', 'Java Software'];

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category.includes(filter) || (filter === 'Web Development' && p.category.includes('NLP')));

  return (
    <section id="projects" className="scroll-mt-12 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-violet-600" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Applications built across computer vision, natural language processing, and algorithms.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20'
                  : 'bg-white text-slate-600 hover:text-violet-700 hover:bg-violet-50 border border-slate-200 hover:border-violet-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-xs flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200/80">
                  {proj.badge}
                </span>
                {proj.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-violet-700 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                {proj.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.stack.map((t, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-800 transition"
              >
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
