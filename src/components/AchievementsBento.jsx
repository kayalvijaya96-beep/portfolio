import React from 'react';
import { Trophy, Award, BookmarkCheck, Flame, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AchievementsBento() {
  const achievements = [
    {
      title: "LeetCode 360+ Problems Solved",
      subtitle: "Demonstrated solid algorithmic foundation across Dynamic Programming, Graph Theory, and Tree Traversal.",
      badge: "Competitive Programming",
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
    },
    {
      title: "LeetCode SQL 50 Badge",
      subtitle: "Verified mastery of complex relational SQL queries, joins, window functions, and query performance.",
      badge: "Database Mastery",
      icon: <Award className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Ideathon 2026 Recognition",
      subtitle: "Created 'Pantry-to-Plate' web platform, recognized for sustainable culinary innovation and UX.",
      badge: "Hackathon",
      icon: <Trophy className="w-4 h-4 text-purple-400" />,
    },
    {
      title: "Made In India 2026 Hackathon",
      subtitle: "Engineered a Smart Traffic Optimization system to dynamically route emergency transit with computer vision.",
      badge: "Innovation",
      icon: <Trophy className="w-4 h-4 text-emerald-400" />,
    },
  ];

  const certifications = [
    { name: "Oracle Certified Course", org: "Oracle University", year: "2026" },
    { name: "GDG Certification Course", org: "Google Developer Groups", year: "2026" },
    { name: "Cisco Python Essentials 1 & 2", org: "Cisco Networking Academy", year: "2025 - 2026" },
    { name: "MongoDB Developer Certification", org: "MongoDB Academy", year: "2026" },
  ];

  return (
    <section id="achievements" className="space-y-6 pt-10">
      
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
          Recognitions &amp; Credentials
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
          Achievements &amp; Certifications
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl">
          Verified milestones in competitive problem-solving, national hackathons, and accredited industry credentials.
        </p>
      </div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bento-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-blue-300 bg-blue-950/70 px-2.5 py-0.5 rounded-full border border-blue-800/50">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-white text-sm tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Block */}
      <div className="bento-card rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3 className="font-extrabold text-white text-base">Verified Industry Certifications</h3>
          </div>
          <span className="text-xs font-semibold text-slate-400">4 Certified Credentials</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex flex-col justify-between"
            >
              <p className="text-xs font-bold text-slate-200">{cert.name}</p>
              <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400">
                <span>{cert.org}</span>
                <span className="text-blue-400 font-semibold">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
