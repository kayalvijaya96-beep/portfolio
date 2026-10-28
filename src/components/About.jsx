import React from 'react';
import { GraduationCap, Code2, Flame, BrainCircuit, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-violet-600" />,
      title: "Academic Excellence",
      subtitle: "B.E. Computer Science @ Chennai Inst. of Technology",
      description: "Consistent academic record maintaining a 9.04 CGPA while leading technical projects.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      title: "Algorithmic Problem Solving",
      subtitle: "360+ LeetCode & SQL 50 Badge",
      description: "Proficient in Data Structures, dynamic programming, query optimization, and algorithmic efficiency.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
      title: "AI & Computer Vision",
      subtitle: "YOLOv8 & Streamlit Solutions",
      description: "Practical development of real-time computer vision pipelines and multi-lingual translation engines.",
    },
    {
      icon: <Flame className="w-5 h-5 text-pink-600" />,
      title: "Unbroken Consistency",
      subtitle: "365-Day German Streak on Duolingo",
      description: "Demonstrating daily rigor, self-motivation, and long-term commitment to continuous learning.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-12 space-y-8">
      
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-violet-600" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Pioneering AI &amp; Engineering Modern Applications
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          I am a Computer Science undergraduate driven by creating intelligent applications that solve real-world problems. From building computer vision pipelines with YOLOv8 to crafting responsive web platforms and scalable Java software, I thrive on turning complex algorithmic logic into elegant digital experiences.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200/60 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
              <p className="text-xs text-violet-600 font-semibold mt-0.5">{item.subtitle}</p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Focus Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-50 via-white to-indigo-50 border border-violet-200/80 shadow-xs">
        <h4 className="text-xs font-bold text-violet-800 uppercase tracking-wider mb-2">Core Focus Areas</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-xl bg-white text-violet-700 border border-violet-200 font-medium shadow-2xs">
            Computer Vision (YOLOv8)
          </span>
          <span className="px-3 py-1 rounded-xl bg-white text-violet-700 border border-violet-200 font-medium shadow-2xs">
            Full-Stack Web Dev
          </span>
          <span className="px-3 py-1 rounded-xl bg-white text-violet-700 border border-violet-200 font-medium shadow-2xs">
            Algorithms &amp; Data Structures
          </span>
          <span className="px-3 py-1 rounded-xl bg-white text-violet-700 border border-violet-200 font-medium shadow-2xs">
            Streamlit AI Systems
          </span>
        </div>
      </div>

    </section>
  );
}
