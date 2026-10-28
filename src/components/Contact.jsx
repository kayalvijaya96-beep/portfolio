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
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-violet-600" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="mt-2 text-slate-600 text-sm">
          Interested in a collaboration, internship, or just want to say hi? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Quick Connect */}
        <div className="lg:col-span-5 space-y-3">
          <a
            href="mailto:kayalvijaya96@gmail.com"
            className="p-4 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 transition-all flex items-center gap-3.5 block group"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200/60 text-violet-600 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-400">Email Address</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-violet-700 transition">
                kayalvijaya96@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918122890296"
            className="p-4 rounded-2xl bg-white border border-violet-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 transition-all flex items-center gap-3.5 block group"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200/60 text-violet-600 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400">Phone</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-violet-700 transition">
                +91 81228 90296
              </p>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-white border border-violet-100 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200/60 text-violet-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400">Location</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Chennai Institute of Technology, India
              </p>
            </div>
          </div>

          {/* Social card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 shadow-xs">
            <p className="text-xs font-bold text-slate-700 mb-3">Connect on Socials</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/kayalvijaya96-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white hover:bg-violet-600 hover:text-white text-slate-700 border border-slate-200 hover:border-violet-600 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white hover:bg-violet-600 hover:text-white text-slate-700 border border-slate-200 hover:border-violet-600 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-2xl bg-white border border-violet-100 shadow-xs">
            {submitted ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 text-base">Message Sent!</h4>
                <p className="text-xs text-slate-500">
                  Thank you for reaching out. I'll get back to you shortly at {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Internship"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Kayalvizhi, I'd love to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 transition-all flex items-center justify-center gap-2"
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
