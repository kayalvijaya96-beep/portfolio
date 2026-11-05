import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-14 pb-8 border-t border-slate-800/80 text-xs text-slate-400 mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Kayalvizhi Sureshkumar &bull; Engineered with React, Vite &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <span>Chennai Institute of Technology</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 text-blue-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition flex items-center gap-1.5 font-semibold cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
