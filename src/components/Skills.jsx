import React from 'react';
import { Code, Database, Layout, Brain, Cpu, Users, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-5 h-5 text-blue-600" />,
      skills: ["Python", "Java", "C", "C++"],
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      skills: ["Ultralytics YOLOv8", "OpenCV", "NumPy", "Deep Learning Basics", "Streamlit"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      category: "Web Technologies",
      icon: <Layout className="w-5 h-5 text-sky-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Responsive Design"],
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      category: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      skills: ["MySQL", "MongoDB", "SQL Query Optimization", "Relational Modeling"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      category: "Developer Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      skills: ["Git", "GitHub", "VS Code", "Linux CLI", "IntelliJ IDEA", "Docker (Basics)"],
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      category: "Professional & Soft Skills",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      skills: ["Team Collaboration", "Problem Solving", "Technical Communication", "Leadership", "Time Management", "Adaptability"],
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 border-t border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            A comprehensive overview of languages, frameworks, AI libraries, and developer tools in my workflow.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>{group.skills.length} competencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

