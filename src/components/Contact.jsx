import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
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
    <section id="contact" className="scroll-mt-12 space-y-6">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="mt-2 text-slate-400 text-sm">
          Interested in discussing an engineering role, technical collaboration, or computer vision project? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Direct Quick Connect */}
        <div className="lg:col-span-5 space-y-3">
          <a
            href="mailto:kayalvijaya96@gmail.com"
            className="p-4 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 hover:border-violet-500/50 hover:bg-[#161736] transition-all flex items-center gap-3.5 block"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 text-violet-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-400">Email Address</p>
              <p className="text-xs sm:text-sm font-bold text-white truncate hover:text-violet-300 transition">
                kayalvijaya96@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918122890296"
            className="p-4 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 hover:border-violet-500/50 hover:bg-[#161736] transition-all flex items-center gap-3.5 block"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 text-violet-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400">Phone</p>
              <p className="text-xs sm:text-sm font-bold text-white hover:text-violet-300 transition">
                +91 81228 90296
              </p>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-[#111228]/80 border border-indigo-900/40 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 text-violet-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400">Location</p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Chennai Institute of Technology, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-2xl bg-[#111228]/80 border border-indigo-900/40">
            {submitted ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-400">
                  Thank you for reaching out. I will get back to you shortly at {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0E22] border border-indigo-900/40 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0E22] border border-indigo-900/40 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0E22] border border-indigo-900/40 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Kayalvizhi, I'd love to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0E22] border border-indigo-900/40 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-md shadow-violet-900/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
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
