import React from 'react';
import { Trophy, Award, Flame, BookmarkCheck } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode 360+ Problems Solved",
      subtitle: "Demonstrated strong grasp of Data Structures, Dynamic Programming, and Graph Algorithms.",
      badge: "Competitive",
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
    },
    {
      title: "LeetCode SQL 50 Badge",
      subtitle: "Verified proficiency in complex SQL joins, aggregations, and query optimizations.",
      badge: "Databases",
      icon: <Award className="w-4 h-4 text-violet-400" />,
    },
    {
      title: "Ideathon 2026 Recognition",
      subtitle: "Developed 'Pantry-to-Plate' web platform, recognized for sustainable culinary UX.",
      badge: "Hackathon",
      icon: <Trophy className="w-4 h-4 text-purple-400" />,
    },
    {
      title: "Made In India 2026 Hackathon",
      subtitle: "Engineered a Smart Traffic Optimization system to dynamically route emergency transit.",
      badge: "Innovation",
      icon: <Trophy className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: "365-Day Duolingo German Streak",
      subtitle: "Completed an uninterrupted full year of German language acquisition with daily discipline.",
      badge: "Consistency",
      icon: <Flame className="w-4 h-4 text-pink-400" />,
    },
    {
      title: "CodeAlpha Dual Internships",
      subtitle: "Successfully completed dual-track virtual internships in Artificial Intelligence & Java Development.",
      badge: "Industry",
      icon: <BookmarkCheck className="w-4 h-4 text-indigo-400" />,
    },
  ];

  const certifications = [
    { name: "Oracle Certified Course", org: "Oracle University", year: "2026" },
    { name: "GDG Certification Course", org: "Google Developer Groups", year: "2026" },
    { name: "Cisco Python Essentials 1 & 2", org: "Cisco Networking Academy", year: "2025 - 2026" },
    { name: "MongoDB Developer Certification", org: "MongoDB Academy", year: "2026" },
  ];

  return (
    <section id="achievements" className="scroll-mt-12 space-y-6">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Recognition</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Achievements &amp; Certifications
        </h2>
        <p className="mt-2 text-slate-400 text-sm">
          Verified milestones in competitive problem-solving, hackathons, and certifications.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 hover:border-violet-500/50 hover:bg-[#161736] transition-all duration-300 shadow-sm hover:shadow-violet-900/20 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2 rounded-xl bg-violet-950/70 border border-violet-800/40">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-violet-300 bg-violet-950/60 px-2.5 py-0.5 rounded-full border border-violet-800/40">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-white text-sm">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Banner Grid */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12132D] via-[#151638] to-[#101128] border border-violet-800/30 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-violet-400" />
            <span>Professional Certifications</span>
          </h4>
          <span className="text-xs text-violet-300 font-medium">4 Verified Credentials</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#0D0E22]/90 border border-indigo-900/30"
            >
              <p className="text-xs font-bold text-slate-200">{cert.name}</p>
              <div className="flex items-center justify-between mt-1 text-[11px] text-slate-400">
                <span>{cert.org}</span>
                <span className="text-violet-400">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
