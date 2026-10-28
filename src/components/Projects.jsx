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
      demo: "#",
      featured: true,
    },
    {
      title: "Real-Time Multi-Language Translator",
      category: "NLP & Web Apps",
      badge: "NLP / Streamlit",
      description: "Interactive translation suite powered by Googletrans and Streamlit, providing instantaneous cross-lingual text translation across 50+ languages.",
      stack: ["Python", "Streamlit", "Googletrans", "NLP"],
      github: "https://github.com/kayalvijaya96-beep/language-translator",
      demo: "#",
      featured: true,
    },
    {
      title: "Virtual Stock Trading Engine",
      category: "Java Software",
      badge: "Financial Engine",
      description: "Console & collection-backed stock trading simulator featuring dynamic portfolio valuation, order execution, real-time balance calculations, and history tracking.",
      stack: ["Java", "OOP Principles", "HashMaps", "Collections", "IntelliJ IDEA"],
      github: "https://github.com/kayalvijaya96-beep/stock-trading-platform",
      demo: "#",
      featured: false,
    },
    {
      title: "Pantry-to-Plate Recipe Generator",
      category: "Web Development",
      badge: "Ideathon 2026 Finalist",
      description: "Smart culinary web application developed for Ideathon 2026. Suggests delicious recipes and preparation instructions based strictly on household pantry ingredients.",
      stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Ideathon 2026"],
      github: "https://github.com/kayalvijaya96-beep/pantry-to-plate",
      demo: "#",
      featured: true,
    },
    {
      title: "StudyPilot: AI Study Tracker",
      category: "AI & EdTech",
      badge: "AI Tracker",
      description: "Intelligent academic companion using NumPy and Streamlit to monitor study routines, model learning curves, and recommend optimal revision intervals.",
      stack: ["Python", "Streamlit", "NumPy", "AI Algorithms"],
      github: "https://github.com/kayalvijaya96-beep/studypilot-tracker",
      demo: "#",
      featured: false,
    },
  ];

  const categories = ['All', 'AI & Computer Vision', 'Web Development', 'Java Software'];

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category.includes(filter) || (filter === 'Web Development' && p.category.includes('NLP')));

  return (
    <section id="projects" className="scroll-mt-12 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Applications built across computer vision, natural language processing, and algorithms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-900/30'
                  : 'bg-[#141530] text-slate-400 hover:text-white hover:bg-violet-950/50 border border-indigo-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 hover:border-violet-500/50 hover:bg-[#161736] transition-all duration-300 shadow-sm hover:shadow-violet-900/20 hover:shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-violet-300 bg-violet-950/70 px-2.5 py-0.5 rounded-full border border-violet-800/40">
                  {proj.badge}
                </span>
                {proj.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-pink-400 bg-pink-950/40 px-2 py-0.5 rounded-full border border-pink-800/30">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              <h3 className="font-extrabold text-white text-lg group-hover:text-violet-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.stack.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#181938] text-indigo-200 text-[11px] rounded-md font-medium border border-indigo-900/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-5 mt-5 border-t border-indigo-950 flex items-center justify-between">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300 transition"
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
