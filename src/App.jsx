import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-violet-600 selection:text-white">
      {/* Background Decorative Soft Violet Ambient Orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-200/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container: Split-Screen Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-screen relative z-10">
        
        {/* Left Column: Fixed / Sticky Profile & Navigation Sidebar */}
        <Sidebar />

        {/* Right Column: Scrollable Content Feed */}
        <main className="flex-1 min-w-0 p-6 sm:p-10 lg:p-14 space-y-20 lg:space-y-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </main>

      </div>
    </div>
  );
}
