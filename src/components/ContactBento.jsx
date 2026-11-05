import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactBento({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="space-y-6 pt-10">
      
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
          Let's Start a Conversation
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
          Whether you're exploring full-time engineering opportunities, internship collaborations, or technical projects, feel free to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          <a
            href="mailto:kayalvijaya96@gmail.com"
            className="bento-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 group block"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
              <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-blue-400 transition">
                kayalvijaya96@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918122890296"
            className="bento-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 group block"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phone &bull; WhatsApp</p>
              <p className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition">
                +91 81228 90296
              </p>
            </div>
          </a>

          <div className="bento-card rounded-2xl p-4 sm:p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Chennai Institute of Technology, India
              </p>
            </div>
          </div>

          {/* Socials & Resume Banner */}
          <div className="bento-card rounded-2xl p-5 space-y-3">
            <p className="text-xs font-bold text-slate-300">Verified Profiles &amp; CV</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/kayalvijaya96-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <button
                onClick={onOpenResume}
                type="button"
                className="px-3 py-2 bg-blue-950/70 hover:bg-blue-900/80 text-blue-300 hover:text-white border border-blue-800/50 rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Resume PDF
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bento-card rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-extrabold text-white text-lg">Message Delivered</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I'll get back to you promptly at {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Kayalvizhi, I came across your computer vision and software projects..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}

