import React from 'react';
import { ArrowRight, Download, FileText, Mail, MapPin, Award, CheckCircle, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function HeroBento({ onOpenResume }) {
  return (
    <section className="relative pt-6 sm:pt-10">
      
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Main Bio Card (Col 8) */}
        <div className="lg:col-span-8 bento-card rounded-3xl p-7 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for AI &amp; Software Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Kayalvizhi Sureshkumar
              </h1>
              <p className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200 bg-clip-text text-transparent">
                Artificial Intelligence &amp; Full-Stack Software Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Undergraduate in Computer Science &amp; Engineering at <strong className="text-white">Chennai Institute of Technology (CGPA: 9.04)</strong>. Passionate about architecting real-time computer vision systems with YOLOv8, resilient Java OOP software, and clean, responsive web platforms.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 font-medium">
                📍 Chennai, India
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700/80 text-blue-300 font-medium">
                🎓 B.E. Computer Science &bull; 9.04 CGPA
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 font-medium">
                ⚡ Computer Vision &amp; Scalable Web
              </span>
            </div>
          </div>

          {/* Action Buttons & Socials */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/kayalvijaya96-beep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:kayalvijaya96@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Portrait Card (Col 4) */}
        <div className="lg:col-span-4 bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/80 shadow-inner">
            <img
              src="/profile.jpg"
              alt="Kayalvizhi Sureshkumar"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600';
              }}
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-slate-200">Chennai Inst. of Tech</span>
            </div>
            <span className="font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/50">
              CGPA 9.04
            </span>
          </div>
        </div>

      </div>

      {/* Row of 4 Metric Bento Tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-5 sm:mt-6">
        
        <div className="bento-card rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Academic Merit</p>
          <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">9.04</div>
          <p className="text-xs text-slate-400 mt-1">B.E. Computer Science &amp; Eng.</p>
        </div>

        <div className="bento-card rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Competitive Coding</p>
          <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">360+</div>
          <p className="text-xs text-slate-400 mt-1">LeetCode &bull; SQL 50 Badge</p>
        </div>

        <div className="bento-card rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Industry Internships</p>
          <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">2 Tracks</div>
          <p className="text-xs text-slate-400 mt-1">CodeAlpha (AI &amp; Java Development)</p>
        </div>

        <div className="bento-card rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Consistency</p>
          <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">365 Days</div>
          <p className="text-xs text-slate-400 mt-1">Duolingo German Streak</p>
        </div>

      </div>

    </section>
  );
}

