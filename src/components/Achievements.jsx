import React from 'react';
import { Trophy, Award, Flame, BookmarkCheck } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode 360+ Problems Solved",
      subtitle: "Demonstrated strong grasp of Data Structures, Dynamic Programming, and Graph Algorithms.",
      badge: "Competitive",
      icon: <Trophy className="w-4 h-4 text-amber-500" />,
    },
    {
      title: "LeetCode SQL 50 Badge",
      subtitle: "Verified proficiency in complex SQL joins, aggregations, and query optimizations.",
      badge: "Databases",
      icon: <Award className="w-4 h-4 text-violet-600" />,
    },
    {
      title: "Ideathon 2026 Recognition",
      subtitle: "Developed 'Pantry-to-Plate' web platform, recognized for sustainable culinary UX.",
      badge: "Hackathon",
      icon: <Trophy className="w-4 h-4 text-purple-600" />,
    },
    {
      title: "Made In India 2026 Hackathon",
      subtitle: "Engineered a Smart Traffic Optimization system to route emergency transit dynamically.",
      badge: "Innovation",
      icon: <Trophy className="w-4 h-4 text-emerald-600" />,
    },
    {
      title: "365-Day Duolingo German Streak",
      subtitle: "Completed an uninterrupted full year of German language acquisition with daily discipline.",
      badge: "Consistency",
      icon: <Flame className="w-4 h-4 text-pink-600" />,
    },
    {
      title: "CodeAlpha Dual Internships",
      subtitle: "Successfully completed dual-track virtual internships in Artificial Intelligence & Java Development.",
      badge: "Industry",
      icon: <BookmarkCheck className="w-4 h-4 text-indigo-600" />,
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
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Trophy className="w-3.5 h-3.5 text-violet-600" />
          <span>Recognition</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Achievements &amp; Certifications
        </h2>
        <p className="mt-2 text-slate-600 text-sm">
          Verified milestones in competitive programming, hackathons, and certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="p-2 rounded-xl bg-violet-50 border border-violet-200/60">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200/80">
                {item.badge}
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 via-white to-indigo-50 border border-violet-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-violet-600" />
            Professional Certifications
          </h4>
          <span className="text-xs text-violet-700 font-semibold">4 Credentials</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-violet-100/80 shadow-2xs">
              <p className="text-xs font-bold text-slate-800">{cert.name}</p>
              <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                <span>{cert.org}</span>
                <span className="text-violet-600 font-semibold">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
