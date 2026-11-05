import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBento from './components/HeroBento';
import ExperienceBento from './components/ExperienceBento';
import ProjectsBento from './components/ProjectsBento';
import SkillsBento from './components/SkillsBento';
import AchievementsBento from './components/AchievementsBento';
import ContactBento from './components/ContactBento';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative bg-grid-pattern">
      
      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Bento Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10 pb-10">
        <HeroBento onOpenResume={() => setIsResumeOpen(true)} />
        <ExperienceBento />
        <ProjectsBento />
        <SkillsBento />
        <AchievementsBento />
        <ContactBento onOpenResume={() => setIsResumeOpen(true)} />
        <Footer />
      </main>

      {/* Resume Pop-up Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
