import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Award, ArrowUpRight, FileText, X, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [showResumeModal, setShowResumeModal] = useState(false);

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
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-5/12 xl:w-4/12 flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-20 border-b lg:border-b-0 lg:border-r border-indigo-900/30 bg-[#0B0C1D]/85 backdrop-blur-xl shadow-xs">
      
      {/* Top Part: Profile & Info */}
      <div className="space-y-6">
        
        {/* Enlarged Clean Profile Picture */}
        <div className="relative w-fit">
          <div className="p-1 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-purple-400 shadow-2xl shadow-indigo-500/25">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-[#111228] p-0.5">
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
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0B0C1D] shadow-sm"></span>
        </div>

        {/* Name & Headline */}
        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-100 to-violet-300 bg-clip-text text-transparent">
              Kayalvizhi S.
            </span>
          </h1>
          <h2 className="text-base sm:text-lg font-bold text-violet-400">
            AI &amp; Full-Stack Engineer
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            Undergraduate in Computer Science &amp; Engineering with deep focus on Computer Vision, Python, Java, and scalable intelligent web systems.
          </p>
        </div>

        {/* Quick Academic Badge */}
        <div className="space-y-2 text-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-950/60 border border-violet-800/40 text-violet-200">
            <Award className="w-4 h-4 text-violet-400" />
            <span>Chennai Inst. of Technology &bull; <strong className="text-white">CGPA 9.04</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 pl-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
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
                  isActive ? 'text-white' : 'text-slate-400 hover:text-violet-300'
                }`}
              >
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    isActive
                      ? 'w-12 bg-gradient-to-r from-violet-500 to-indigo-400'
                      : 'w-6 bg-slate-700 group-hover:w-10 group-hover:bg-violet-400'
                  }`}
                />
                <span className={isActive ? 'text-violet-300' : ''}>{link.name}</span>
              </a>
            );
          })}
        </nav>

      </div>

      {/* Bottom Part: Socials & Resume CTA */}
      <div className="pt-6 mt-6 border-t border-indigo-900/30 space-y-4">
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="flex-1 py-2.5 px-4 text-xs font-bold text-center text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-900/40 hover:shadow-violet-600/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setShowResumeModal(true)}
            type="button"
            className="py-2.5 px-3.5 text-xs font-semibold text-slate-300 bg-[#161734] hover:bg-[#1E2046] border border-indigo-800/40 hover:border-violet-600/50 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            title="Download or Preview Resume"
          >
            <Download className="w-3.5 h-3.5 text-violet-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/kayalvijaya96-beep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 text-slate-400 hover:text-white bg-[#141530] hover:bg-violet-900/40 border border-indigo-900/30 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 text-slate-400 hover:text-white bg-[#141530] hover:bg-violet-900/40 border border-indigo-900/30 rounded-xl transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:kayalvijaya96@gmail.com"
            aria-label="Email Kayalvizhi"
            className="p-2.5 text-slate-400 hover:text-white bg-[#141530] hover:bg-violet-900/40 border border-indigo-900/30 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+918122890296"
            aria-label="Call Kayalvizhi"
            className="p-2.5 text-slate-400 hover:text-white bg-[#141530] hover:bg-violet-900/40 border border-indigo-900/30 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Resume Download Pop-up Modal */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="bg-[#12132D] text-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-indigo-800/50 space-y-5 animate-in zoom-in-95 duration-200 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-950/80 text-violet-400 border border-violet-800/40 flex items-center justify-center shrink-0 shadow-inner">
                <FileText className="w-6 h-6" />
              </div>
              <div className="pr-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-300 bg-violet-950/60 px-2.5 py-0.5 rounded-full border border-violet-800/40">
                  Resume / Curriculum Vitae
                </span>
                <h3 className="font-extrabold text-white text-xl mt-1">
                  Kayalvizhi Sureshkumar
                </h3>
                <p className="text-xs text-slate-400">
                  B.E. Computer Science &amp; Engineering &bull; CGPA 9.04
                </p>
              </div>
            </div>

            {/* Document Details Card */}
            <div className="p-4 rounded-2xl bg-[#0D0E22]/90 border border-indigo-900/40 text-xs text-slate-300 space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-indigo-950 font-medium">
                <span className="text-slate-400">Document Type</span>
                <span className="font-semibold text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded-md border border-violet-800/40">Official PDF</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-indigo-950 font-medium">
                <span className="text-slate-400">Education</span>
                <span className="font-semibold text-slate-200">Chennai Institute of Technology</span>
              </div>
              <div className="flex items-center justify-between font-medium">
                <span className="text-slate-400">Experience Highlights</span>
                <span className="font-semibold text-slate-200">CodeAlpha Internships (AI &amp; Java)</span>
              </div>
            </div>

            {/* Download & Preview Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/Kayalvizhi_Resume.pdf"
                download="Kayalvizhi_Sureshkumar_Resume.pdf"
                className="flex-1 py-3 px-4 text-xs sm:text-sm font-bold text-center text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-900/40 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <a
                href="/Kayalvizhi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#181938] hover:bg-[#202148] border border-indigo-800/40 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-violet-400" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </aside>
  );
}
