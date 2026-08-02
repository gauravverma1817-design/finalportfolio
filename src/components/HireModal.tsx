import React, { useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Design & Development',
    timeline: 'Flexible / Exploration',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('project_type', formData.projectType);
      payload.append('expected_timeline', formData.timeline);
      payload.append('message', formData.message);
      payload.append('_subject', `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`);
      payload.append('_captcha', 'false');
      payload.append('_template', 'table');

      // Live Email Dispatch directly to gauravverma1817@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/gauravverma1817@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: payload
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Gaurav,\n\nI would like to inquire about a project:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Expected Timeline: ${formData.timeline}\n\n` +
      `Overview:\n${formData.message}\n`
    );
    window.location.href = `mailto:gauravverma1817@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-neutral-950/80 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)]">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/60 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              CONNECT WITH GAURAV VERMA
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Success View */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              INQUIRY SENT SUCCESSFULLY!
            </h3>
            <p className="text-xs text-neutral-300 max-w-xs mx-auto">
              Thank you for reaching out. Gaurav will review your project details and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
            <div>
              <label className="block text-[10px] font-bold text-neutral-300 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-neutral-900/60 border border-white/10 focus:border-blue-500/80 px-3.5 py-2.5 text-xs text-white rounded-xl outline-none backdrop-blur-md transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-neutral-300 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-neutral-900/60 border border-white/10 focus:border-blue-500/80 px-3.5 py-2.5 text-xs text-white rounded-xl outline-none backdrop-blur-md transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-neutral-300 uppercase tracking-wider mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-900/60 border border-white/10 focus:border-blue-500/80 px-3 py-2.5 text-xs text-white rounded-xl outline-none backdrop-blur-md transition-all"
                >
                  <option className="bg-neutral-950">Web Design & Dev</option>
                  <option className="bg-neutral-950">Full-Stack Web App</option>
                  <option className="bg-neutral-950">AI / ML Integration</option>
                  <option className="bg-neutral-950">UI/UX Redesign</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-neutral-300 uppercase tracking-wider mb-1">
                  Expected Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-neutral-900/60 border border-white/10 focus:border-blue-500/80 px-3 py-2.5 text-xs text-white rounded-xl outline-none backdrop-blur-md transition-all"
                >
                  <option className="bg-neutral-950">Flexible / Exploration</option>
                  <option className="bg-neutral-950">Urgent (&lt; 2 Weeks)</option>
                  <option className="bg-neutral-950">Standard (1 Month)</option>
                  <option className="bg-neutral-950">Long-term (1-3 Months)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-neutral-300 uppercase tracking-wider mb-1">
                Project Overview
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your goals, timeline, and deliverables..."
                className="w-full bg-neutral-900/60 border border-white/10 focus:border-blue-500/80 px-3.5 py-2.5 text-xs text-white rounded-xl outline-none backdrop-blur-md transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 text-xs tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>SENDING INQUIRY...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>SUBMIT INQUIRY</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
