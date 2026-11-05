import React, { useState } from 'react';
import { Menu, X, FileText, Mail, Download, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#07090E]/80 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-800 text-white flex items-center justify-center font-bold text-sm shadow-md border border-blue-500/30 group-hover:scale-105 transition-transform">
              KS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-100 text-base tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                Kayalvizhi Sureshkumar
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                AI &amp; Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-900/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0B0F17]/95 px-5 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => { setIsOpen(false); onOpenResume(); }}
              type="button"
              className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-blue-600 rounded-xl flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
