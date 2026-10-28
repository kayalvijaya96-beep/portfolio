import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Award } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left Column: Bio & CTAs */}
          <div className="flex-1 text-center md:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Available for AI & Software Roles</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                Kayalvizhi Sureshkumar
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-700">
              Aspiring <span className="text-blue-600 font-semibold">Artificial Intelligence & Full-Stack Engineer</span> passionate about computer vision, real-time systems, and solving complex algorithmic problems.
            </p>

            {/* Quick Highlights Pill */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-blue-100 shadow-sm">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Chennai Institute of Technology &bull; <strong>CGPA 9.04</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-blue-100 shadow-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-blue-700 bg-white hover:bg-blue-50/80 border-2 border-blue-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
              <a
                href="/profile.jpg"
                download="Kayalvizhi_Resume.jpg"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                title="Download Resume"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Proof Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/kayalvijaya96-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kayalvijaya96@gmail.com"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Enlarged Profile Avatar */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-white shadow-2xl ring-4 ring-blue-500/20">
                <img
                  src="/profile.jpg"
                  alt="Kayalvizhi Sureshkumar"
                  className="w-full h-full object-cover rounded-full shadow-inner aspect-square"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400';
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
