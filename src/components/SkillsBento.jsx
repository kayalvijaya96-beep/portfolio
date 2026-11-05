import React from 'react';
import { Code, Database, Layout, Brain, Wrench, Users, Cpu, Layers } from 'lucide-react';

export default function SkillsBento() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-4 h-4 text-blue-400" />,
      skills: ["Python", "Java", "C", "C++", "JavaScript"],
    },
    {
      category: "AI, ML & Computer Vision",
      icon: <Brain className="w-4 h-4 text-indigo-400" />,
      skills: ["Ultralytics YOLOv8", "OpenCV", "NumPy", "Deep Learning Foundations", "Streamlit"],
    },
    {
      category: "Full-Stack Web Tech",
      icon: <Layout className="w-4 h-4 text-sky-400" />,
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "Vite"],
    },
    {
      category: "Databases & Storage",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: ["MySQL", "MongoDB", "SQL Optimization", "Relational Modeling"],
    },
    {
      category: "Developer Tools & Platforms",
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      skills: ["Git", "GitHub", "VS Code", "Linux CLI", "IntelliJ IDEA", "Docker (Basics)"],
    },
    {
      category: "Professional Competencies",
      icon: <Users className="w-4 h-4 text-purple-400" />,
      skills: ["Data Structures & Algorithms", "System Architecture", "Technical Writing", "Duolingo German (365d)"],
    },
  ];

  return (
    <section id="skills" className="space-y-6 pt-10">
      
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
          Core Competencies
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
          Technical Skills Matrix
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl">
          Core competencies and developer toolchains utilized across AI, backend engineering, and web development.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="bento-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="font-bold text-white text-sm tracking-tight">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs rounded-lg border border-slate-800 transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

