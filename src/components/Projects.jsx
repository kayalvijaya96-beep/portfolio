import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
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
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Real-Time Multi-Language Translator",
      category: "NLP & Web Apps",
      badge: "Natural Language Processing",
      description: "Interactive translation suite powered by Googletrans and Streamlit, providing instantaneous cross-lingual text translation across 50+ languages.",
      stack: ["Python", "Streamlit", "Googletrans", "NLP"],
      github: "https://github.com/kayalvijaya96-beep/language-translator",
      demo: "#",
      featured: true,
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Virtual Stock Trading Engine",
      category: "Java Software",
      badge: "Financial Simulation",
      description: "Console & collection-backed stock trading simulator featuring dynamic portfolio valuation, order execution, real-time balance calculations, and history tracking.",
      stack: ["Java", "OOP Principles", "HashMaps", "Collections", "IntelliJ IDEA"],
      github: "https://github.com/kayalvijaya96-beep/stock-trading-platform",
      demo: "#",
      featured: false,
      color: "from-indigo-600 to-blue-800",
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
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "StudyPilot: AI Study Tracker",
      category: "AI & EdTech",
      badge: "AI Progress Tracking",
      description: "Intelligent academic companion using NumPy and Streamlit to monitor study routines, model learning curves, and recommend optimal revision intervals.",
      stack: ["Python", "Streamlit", "NumPy", "AI Algorithms"],
      github: "https://github.com/kayalvijaya96-beep/studypilot-tracker",
      demo: "#",
      featured: false,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const categories = ['All', 'AI & Computer Vision', 'Web Development', 'Java Software'];

  const filteredProjects = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category.includes(filter) || (filter === 'Web Development' && p.category.includes('NLP')));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Explore applications spanning real-time computer vision, multi-language processing, algorithmic simulations, and web solutions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-white border border-blue-100/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-200/60">
                    {proj.badge}
                  </span>
                  {proj.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {proj.stack.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold rounded-xl transition-all"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
