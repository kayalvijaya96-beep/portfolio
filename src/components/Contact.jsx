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
    <section id="contact" className="py-20 bg-slate-50 border-t border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Whether you have an internship opportunity, a project to collaborate on, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href="mailto:kayalvijaya96@gmail.com"
              className="group bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-400">Email Address</p>
                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                  kayalvijaya96@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918122890296"
              className="group bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Phone & WhatsApp</p>
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  +91 81228 90296
                </p>
              </div>
            </a>

            <div className="bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Location</p>
                <p className="text-sm font-bold text-slate-900">
                  Chennai Institute of Technology, Chennai, India
                </p>
              </div>
            </div>

            {/* Social Media Link Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-base mb-1">Connect on Social Channels</h4>
              <p className="text-xs text-blue-100 mb-4">Follow my open-source code and professional updates.</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kayalvijaya96-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/kayalvizhi-sureshkumar-71473b383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">I usually reply within 24 hours.</p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Thank you for reaching out!</h4>
                  <p className="text-xs text-emerald-700">
                    Your message draft has been prepared. I'll get back to you shortly at {formData.email || 'your email'}!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                      placeholder="Project Opportunity / AI Discussion"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kayalvizhi, I loved your work on the YOLOv8 Object Detection project..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
