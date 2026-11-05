import React from 'react';
import { Download, FileText, X, ExternalLink, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0E1420] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-700/80 space-y-6 animate-in zoom-in-95 duration-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-950/80 text-blue-400 border border-blue-800/50 flex items-center justify-center shrink-0 shadow-inner">
            <FileText className="w-6 h-6" />
          </div>
          <div className="pr-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800/50">
              Verified Curriculum Vitae
            </span>
            <h3 className="font-extrabold text-white text-xl mt-1 tracking-tight">
              Kayalvizhi Sureshkumar
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              B.E. Computer Science &amp; Engineering &bull; CGPA 9.04
            </p>
          </div>
        </div>

        {/* Document Details Card */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
            <span className="text-slate-400">Document Type</span>
            <span className="font-semibold text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded-md border border-blue-800/50">Official PDF</span>
          </div>
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
            <span className="text-slate-400">Institution</span>
            <span className="font-semibold text-slate-200">Chennai Institute of Technology</span>
          </div>
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
            <span className="text-slate-400">Cumulative GPA</span>
            <span className="font-bold text-emerald-400">9.04 / 10.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Experience Highlights</span>
            <span className="font-semibold text-slate-200">CodeAlpha Internships (AI &amp; Java)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href="/Kayalvizhi_Resume.pdf"
            download="Kayalvizhi_Sureshkumar_Resume.pdf"
            className="flex-1 py-3 px-4 text-xs sm:text-sm font-bold text-center text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <a
            href="/Kayalvizhi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <span>Open in Tab</span>
          </a>
        </div>
      </div>
    </div>
  );
}
