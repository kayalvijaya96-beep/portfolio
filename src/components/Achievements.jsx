import React from 'react';
import { Trophy, Award, CheckCircle, Flame, BookmarkCheck, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode 360+ Problems Solved",
      subtitle: "Demonstrated strong grasp of Data Structures, Dynamic Programming, and Graph Algorithms.",
      badge: "Competitive Programming",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "LeetCode SQL 50 Badge",
      subtitle: "Earned prestigious badge verifying expertise in complex SQL joins, aggregations, and query optimizations.",
      badge: "Database Mastery",
      icon: <Award className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Ideathon 2026 Participation",
      subtitle: "Developed 'Pantry-to-Plate' web platform, recognized for sustainable culinary innovation and UX.",
      badge: "Hackathon",
      icon: <Trophy className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Made In India 2026 Hackathon",
      subtitle: "Engineered a Smart Traffic Optimization system to dynamically route emergency transit using computer vision.",
      badge: "National Hackathon",
      icon: <Trophy className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "365-Day Duolingo German Streak",
      subtitle: "Demonstrated relentless daily discipline and multilingual commitment by completing an uninterrupted year of German study.",
      badge: "Consistency",
      icon: <Flame className="w-5 h-5 text-orange-500" />,
    },
    {
      title: "CodeAlpha Virtual Internships",
      subtitle: "Successfully completed dual-track virtual internships in Artificial Intelligence and Java Software Development.",
      badge: "Industry Experience",
      icon: <BookmarkCheck className="w-5 h-5 text-sky-600" />,
    },
  ];

  const certifications = [
    { name: "Oracle Certified Course", org: "Oracle University", year: "2026" },
    { name: "GDG Certification Course", org: "Google Developer Groups", year: "2026" },
    { name: "Cisco Python Essentials 1 & 2", org: "Cisco Networking Academy", year: "2025 - 2026" },
    { name: "MongoDB Developer Certification", org: "MongoDB Academy", year: "2026" },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Milestones & Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Key Achievements & Certifications
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Verified proof of algorithmic capability, hackathon innovations, and recognized industry certifications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-blue-100/80 rounded-2xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-blue-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Credential Verification</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">Professional Certifications</h3>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-xl text-xs font-bold w-fit">
              4 Industry Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-100 rounded-2xl p-5 shadow-xs hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BookmarkCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-[11px] font-semibold text-slate-400">{cert.org}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm leading-snug">{cert.name}</h4>
                <p className="text-[11px] text-blue-600 font-medium mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

