import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenHireModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHireModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 w-full px-[15px] flex justify-center pointer-events-none">
      {/* Dynamic Island Capsule Navigation with Electric Blue Glassmorphism */}
      <div className="pointer-events-auto relative max-w-5xl w-full bg-neutral-950/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_38px_rgba(0,0,0,0.8),0_0_20px_rgba(37,99,235,0.18)] rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left Branding (Compact Pill Notch) */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-neutral-900 border border-white/10 group-hover:border-blue-500/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm"></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-[0.18em] text-white uppercase leading-none group-hover:text-blue-400 transition-colors">
              GAURAV VERMA
            </span>
            <span className="text-[9px] tracking-[0.16em] text-neutral-400 uppercase leading-tight">
              FRONT-END & AI/ML
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-neutral-900/50 border border-white/5 rounded-full px-3 py-1">
          <a
            href="#hero"
            className="px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#projects"
            className="px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
          >
            Process & Skills
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenHireModal}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            <span>HIRE ME</span>
            <Sparkles className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform duration-300 fill-white" />
          </button>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-300 hover:text-white bg-neutral-900/80 border border-white/10 rounded-full transition-colors"
            aria-label="Toggle Dynamic Island menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Dynamic Island Expanded Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 w-full bg-neutral-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-3 pointer-events-auto animate-fadeIn z-50">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
              <span>Dynamic Navigation</span>
              <span className="text-blue-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Active
              </span>
            </div>
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-neutral-200 hover:text-blue-400 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-2xl transition-all"
            >
              <span>Home</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-neutral-200 hover:text-blue-400 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-2xl transition-all"
            >
              <span>Selected Projects</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-neutral-200 hover:text-blue-400 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-2xl transition-all"
            >
              <span>Education & Process</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold text-neutral-200 hover:text-blue-400 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-2xl transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

