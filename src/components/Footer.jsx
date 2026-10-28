import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-6 border-t border-slate-200 text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Kayalvizhi Sureshkumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span>Crafted with React, Tailwind CSS &amp; Vercel</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white border border-violet-200 transition flex items-center gap-1 font-semibold"
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
