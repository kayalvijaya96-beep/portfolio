import React from 'react';
import { Code, Database, Layout, Brain, Wrench, Users, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-4 h-4 text-violet-600" />,
      skills: ["Python", "Java", "C", "C++"],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="w-4 h-4 text-indigo-600" />,
      skills: ["Ultralytics YOLOv8", "OpenCV", "NumPy", "Deep Learning Basics", "Streamlit"],
    },
    {
      category: "Web Technologies",
      icon: <Layout className="w-4 h-4 text-purple-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Responsive Design"],
    },
    {
      category: "Databases & Storage",
      icon: <Database className="w-4 h-4 text-pink-600" />,
      skills: ["MySQL", "MongoDB", "SQL Optimization", "Relational Modeling"],
    },
    {
      category: "Developer Tools & Platforms",
      icon: <Wrench className="w-4 h-4 text-violet-600" />,
      skills: ["Git", "GitHub", "VS Code", "Linux CLI", "IntelliJ IDEA", "Docker (Basics)"],
    },
    {
      category: "Professional & Soft Skills",
      icon: <Users className="w-4 h-4 text-indigo-600" />,
      skills: ["Team Collaboration", "Problem Solving", "Technical Communication", "Leadership", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-12 space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5 text-violet-600" />
          <span>Skills &amp; Tools</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Technical Competencies
        </h2>
        <p className="mt-2 text-slate-600 text-sm">
          Core languages, AI libraries, databases, and developer environments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="p-2 rounded-xl bg-violet-50 border border-violet-200/60">
                {group.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 bg-slate-50 hover:bg-violet-50 hover:text-violet-700 text-slate-700 text-xs rounded-lg border border-slate-200/80 transition-colors"
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
