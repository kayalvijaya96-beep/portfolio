import React from 'react';
import { GraduationCap, Code2, Flame, BrainCircuit, Globe, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Academic Distinction",
      description: "B.E. Computer Science & Engineering at Chennai Institute of Technology with a stellar CGPA of 9.04.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      title: "Algorithmic Problem Solving",
      description: "Solved 360+ LeetCode challenges and earned the SQL 50 badge, mastering data structures and optimizations.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
      title: "Computer Vision & AI",
      description: "Hands-on experience deploying YOLOv8 models for real-time video feeds and building NLP translation tools.",
    },
    {
      icon: <Flame className="w-6 h-6 text-blue-600" />,
      title: "Disciplined Consistency",
      description: "Achieved a 365-day streak learning German on Duolingo, showing deep daily persistence and curiosity.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Bridging AI Research with Practical Software
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            I am a Computer Science undergraduate driven by creating intelligent applications that solve real-world problems. From building computer vision pipelines to crafting responsive web platforms and Java applications, I thrive on turning complex logic into seamless digital experiences.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-blue-100/80 rounded-2xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Career Interests Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1">
              <span className="text-blue-300 font-semibold text-xs tracking-wider uppercase">Strategic Focus</span>
              <h3 className="text-2xl font-bold">Primary Career Interests</h3>
              <p className="text-blue-100/80 text-sm max-w-xl">
                Ready to contribute in roles spanning Artificial Intelligence & Machine Learning, Computer Vision, Full-Stack Development, and Systems Engineering.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
                AI & Machine Learning
              </span>
              <span className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
                Computer Vision
              </span>
              <span className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
                Full-Stack Web Dev
              </span>
              <span className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
                Algorithmic Problem Solving
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

