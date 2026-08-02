import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Sparkles, Check, Copy, Laptop, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenHireModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenHireModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="w-full bg-black/40 backdrop-blur-sm py-16 sm:py-24 border-b border-white/10 relative z-10">
      <div className="w-full px-[15px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column (6 cols): Title, Description & Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.95] break-words">
              LET'S WORK<br />TOGETHER <Sparkles className="inline-block w-6 h-6 sm:w-8 sm:h-8 text-blue-400 fill-blue-400 ml-1" />
            </h2>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Have a project, collaboration, or opportunity in mind? Feel free to reach out via email or connect with me on GitHub and LinkedIn.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenHireModal}
                className="group inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-blue-950/50"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>CONNECT WITH GAURAV</span>
              </button>
            </div>
          </div>

          {/* Right Column (6 cols): Contact Details List & Laptop Visual Preview */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

            {/* Contact Items in Glassmorphic Pill Cards */}
            <div className="sm:col-span-7 space-y-3">
              {/* Email */}
              <div
                onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                className="group bg-neutral-950/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/60 p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-md"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white text-blue-400 flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white truncate">
                    {CONTACT_DATA.email}
                  </span>
                </div>
                <div className="text-neutral-500 group-hover:text-blue-400 shrink-0 ml-2">
                  {copiedField === 'email' ? (
                    <span className="text-[10px] text-blue-300 font-bold flex items-center space-x-1">
                      <Check className="w-3 h-3" />
                      <span>COPIED</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>

              {/* GitHub */}
              <a
                href={`https://${CONTACT_DATA.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-950/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/60 p-3.5 rounded-xl flex items-center justify-between transition-all duration-300 shadow-md"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white text-blue-400 flex items-center justify-center shrink-0 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white truncate">
                    {CONTACT_DATA.github}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://${CONTACT_DATA.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-950/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/60 p-3.5 rounded-xl flex items-center justify-between transition-all duration-300 shadow-md"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white text-blue-400 flex items-center justify-center shrink-0 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white truncate">
                    {CONTACT_DATA.linkedin}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Location */}
              <div className="bg-neutral-950/40 backdrop-blur-xl border border-white/10 p-3.5 rounded-xl flex items-center space-x-3 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-neutral-300">
                  {CONTACT_DATA.location}
                </span>
              </div>
            </div>

            {/* Glassmorphism Laptop Screen Preview Card */}
            <div className="sm:col-span-5 bg-neutral-950/50 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl flex flex-col justify-between aspect-square relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center space-x-1.5 border-b border-white/10 pb-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <span className="text-[9px] text-neutral-400 font-mono pl-2">gauravverma.dev</span>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center text-center p-3 bg-neutral-900/40 rounded-xl border border-white/5 backdrop-blur-md">
                <Laptop className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-tall text-lg text-white font-bold tracking-wider leading-none">
                  BUILDING DIGITAL EXPERIENCES
                </span>
                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest mt-1">
                  KIET Ghaziabad • Remote
                </span>
              </div>

              <div className="mt-3 text-center">
                <button
                  onClick={onOpenHireModal}
                  className="w-full text-[10px] font-bold tracking-widest text-neutral-200 group-hover:text-white uppercase py-2 bg-blue-600/20 border border-blue-500/30 hover:border-blue-500 hover:bg-blue-600 transition-all rounded-xl"
                >
                  Send Inquiry
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
