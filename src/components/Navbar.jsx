import React, { useState } from 'react';
import { Menu, X, FileText, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              KS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                Kayalvizhi<span className="text-blue-600">.S</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">AI & Software Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/kayalvijaya96-beep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-blue-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-around">
            <a
              href="https://github.com/kayalvijaya96-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-white bg-blue-600 rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
