import React from 'react';
import { Code, Database, Layout, Brain, Wrench, Users, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-4 h-4 text-violet-400" />,
      skills: ["Python", "Java", "C", "C++"],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="w-4 h-4 text-indigo-400" />,
      skills: ["Ultralytics YOLOv8", "OpenCV", "NumPy", "Deep Learning Basics", "Streamlit"],
    },
    {
      category: "Web Technologies",
      icon: <Layout className="w-4 h-4 text-purple-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Responsive Design"],
    },
    {
      category: "Databases & Storage",
      icon: <Database className="w-4 h-4 text-pink-400" />,
      skills: ["MySQL", "MongoDB", "SQL Optimization", "Relational Modeling"],
    },
    {
      category: "Developer Tools & Platforms",
      icon: <Wrench className="w-4 h-4 text-violet-400" />,
      skills: ["Git", "GitHub", "VS Code", "Linux CLI", "IntelliJ IDEA", "Docker (Basics)"],
    },
    {
      category: "Professional & Soft Skills",
      icon: <Users className="w-4 h-4 text-indigo-400" />,
      skills: ["Team Collaboration", "Problem Solving", "Technical Communication", "Leadership", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-12 space-y-6">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Skills &amp; Tools</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Technical Competencies
        </h2>
        <p className="mt-2 text-slate-400 text-sm">
          Core languages, artificial intelligence libraries, databases, and developer environments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 hover:border-violet-500/50 hover:bg-[#161736] transition-all duration-300 shadow-sm hover:shadow-violet-900/20 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="p-2 rounded-xl bg-violet-950/70 border border-violet-800/40">
                  {group.icon}
                </div>
                <h3 className="font-bold text-white text-sm">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-[#181938] hover:bg-violet-950/50 text-slate-300 hover:text-violet-200 text-xs rounded-lg border border-indigo-900/30 transition-colors"
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
