import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              KS
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">Kayalvizhi Sureshkumar</p>
              <p className="text-xs text-slate-500">Computer Science & AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-xs flex items-center gap-2 text-xs font-bold"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Kayalvizhi Sureshkumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-blue-600 font-semibold">Tailwind CSS</span> &amp; Deployed on <span className="font-semibold text-slate-800">Vercel</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
