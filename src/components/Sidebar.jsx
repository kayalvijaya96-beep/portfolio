import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-5/12 xl:w-4/12 flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-20 border-b lg:border-b-0 lg:border-r border-violet-100 bg-white/90 backdrop-blur-xl shadow-xs">
      
      {/* Top Part: Profile & Info */}
      <div className="space-y-6">
        
        {/* Enlarged Clean Profile Picture */}
        <div className="relative w-fit">
          <div className="p-1 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-purple-400 shadow-xl shadow-violet-500/15">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-white p-0.5">
              <img
                src="/profile.jpg"
                alt="Kayalvizhi Sureshkumar"
                className="w-full h-full object-cover rounded-full aspect-square"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400';
                }}
              />
            </div>
          </div>
          {/* Subtle online pulse */}
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></span>
        </div>

        {/* Name & Headline */}
        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
              Kayalvizhi S.
            </span>
          </h1>
          <h2 className="text-base sm:text-lg font-bold text-violet-700">
            AI &amp; Full-Stack Engineer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
            Undergraduate in Computer Science & Engineering with deep focus on Computer Vision, Python, Java, and scalable intelligent web systems.
          </p>
        </div>

        {/* Quick Academic Badge */}
        <div className="space-y-2 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 border border-violet-200/80 text-violet-800 font-medium">
            <Award className="w-4 h-4 text-violet-600" />
            <span>Chennai Inst. of Technology &bull; <strong className="text-slate-900 font-bold">CGPA 9.04</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 pl-1">
            <MapPin className="w-3.5 h-3.5 text-violet-500" />
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block pt-4 space-y-2.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group flex items-center gap-3 py-1 text-xs uppercase tracking-widest font-bold transition-all ${
                  isActive ? 'text-violet-700' : 'text-slate-500 hover:text-violet-600'
                }`}
              >
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    isActive
                      ? 'w-12 bg-gradient-to-r from-violet-600 to-indigo-500'
                      : 'w-6 bg-slate-300 group-hover:w-10 group-hover:bg-violet-400'
                  }`}
                />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

      </div>

      {/* Bottom Part: Socials & Resume CTA */}
      <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="flex-1 py-2.5 px-4 text-xs font-bold text-center text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl shadow-md shadow-violet-500/20 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="/profile.jpg"
            download="Kayalvizhi_Resume.jpg"
            className="py-2.5 px-3.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-violet-50 border border-slate-200 hover:border-violet-300 rounded-xl transition-all flex items-center gap-1.5"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-violet-600" />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/kayalvijaya96-beep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 text-slate-600 hover:text-violet-700 bg-slate-100/80 hover:bg-violet-50 border border-slate-200/60 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 text-slate-600 hover:text-violet-700 bg-slate-100/80 hover:bg-violet-50 border border-slate-200/60 rounded-xl transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:kayalvijaya96@gmail.com"
            aria-label="Email Kayalvizhi"
            className="p-2.5 text-slate-600 hover:text-violet-700 bg-slate-100/80 hover:bg-violet-50 border border-slate-200/60 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+918122890296"
            aria-label="Call Kayalvizhi"
            className="p-2.5 text-slate-600 hover:text-violet-700 bg-slate-100/80 hover:bg-violet-50 border border-slate-200/60 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>

    </aside>
  );
}
