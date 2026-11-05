import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsBento() {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      id: "object-detection",
      title: "Real-Time Object Detection System",
      category: "AI & Computer Vision",
      badge: "Flagship AI Project",
      description: "High-performance real-time computer vision system leveraging Ultralytics YOLOv8 and OpenCV to detect, classify, and track physical objects live from high-fps webcam streams with high precision bounding coordinates.",
      stack: ["Python", "Ultralytics YOLOv8", "OpenCV", "Deep Learning", "NumPy"],
      github: "https://github.com/kayalvijaya96-beep/object-detection",
      featured: true,
    },
    {
      id: "language-translator",
      title: "Real-Time Multi-Language Translator",
      category: "NLP & Web Apps",
      badge: "Natural Language Processing",
      description: "Cross-lingual interactive translation platform powered by Googletrans and Streamlit, providing instantaneous linguistic transformations across 50+ international languages.",
      stack: ["Python", "Streamlit", "Googletrans API", "NLP"],
      github: "https://github.com/kayalvijaya96-beep/language-translator",
      featured: false,
    },
    {
      id: "stock-trading",
      title: "Virtual Stock Trading Engine",
      category: "Java Software",
      badge: "Financial Engine",
      description: "Simulated stock trading environment built with pure Java OOP, HashMaps, and Collections. Simulates live stock market buying/selling, portfolio asset tracking, and dynamic net worth computation.",
      stack: ["Java", "OOP Principles", "Collections Framework", "IntelliJ IDEA"],
      github: "https://github.com/kayalvijaya96-beep/stock-trading-platform",
      featured: false,
    },
    {
      id: "pantry-to-plate",
      title: "Pantry-to-Plate Recipe Platform",
      category: "Web Development",
      badge: "Ideathon 2026 Finalist",
      description: "Smart web solution engineered for Ideathon 2026 that minimizes household food waste by analyzing available pantry ingredients and outputting matched recipes and preparation workflows.",
      stack: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Ideathon 2026"],
      github: "https://github.com/kayalvijaya96-beep/pantry-to-plate",
      featured: false,
    },
    {
      id: "studypilot",
      title: "StudyPilot: AI Progress Tracker",
      category: "AI & EdTech",
      badge: "Machine Learning / Analytics",
      description: "AI-powered study habit and milestone tracker utilizing Python, NumPy, and Streamlit to map academic revision cycles and predict optimal retention reviews.",
      stack: ["Python", "Streamlit", "NumPy", "Predictive Analytics"],
      github: "https://github.com/kayalvijaya96-beep/studypilot-tracker",
      featured: false,
    },
  ];

  const categories = ['All', 'AI & Computer Vision', 'Web Development', 'Java Software'];

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category.includes(filter) || (filter === 'Web Development' && p.category.includes('NLP')));

  return (
    <section id="projects" className="space-y-6 pt-10">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
            Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            Featured Engineering Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        
        {filteredProjects.map((proj, idx) => {
          const isHero = proj.featured && filter === 'All';
          return (
            <div
              key={proj.id}
              className={`bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group ${
                isHero ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0E1420] via-[#101827] to-[#0A0E18]' : ''
              }`}
            >
              <div className="space-y-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-blue-300 bg-blue-950/70 px-2.5 py-0.5 rounded-full border border-blue-800/50">
                    {proj.badge}
                  </span>
                  {proj.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                      <Sparkles className="w-3 h-3" /> Featured Architecture
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors ${
                  isHero ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                }`}>
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-900/90 text-slate-300 text-xs rounded-lg border border-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
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
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}
