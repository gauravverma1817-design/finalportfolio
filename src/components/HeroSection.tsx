import React from 'react';
import { Globe, Sparkles, ArrowDownRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenHireModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenHireModal }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-black/20 flex flex-col justify-between overflow-hidden border-b border-white/10">
      
      {/* Left-to-Right Black Vignette: completely hides ghost text & canvas noise behind your bio */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-0 pointer-events-none" />
      {/* Top-to-Bottom Ambient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-0 pointer-events-none" />

      {/* Permanently Fixed PORTFOLIO Header */}
      <div className="fixed top-14 left-0 right-0 w-full px-[15px] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1000 380"
          className="w-full h-auto max-h-[55vh] sm:max-h-[68vh] lg:max-h-[82vh] block filter drop-shadow-[0_0_35px_rgba(37,99,235,0.3)] mix-blend-screen"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Rich darker electric blue gradient fading smoothly from top to bottom */}
            <linearGradient id="portfolioElectricBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#1d4ed8" stopOpacity="0.65" />
              <stop offset="80%" stopColor="#1e3a8a" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.08" />
            </linearGradient>

            {/* Mask Blur for smooth natural occlusion around the head */}
            <filter id="softMaskBlur">
              <feGaussianBlur stdDeviation="22" />
            </filter>

            {/* Head Occlusion Mask: Black ellipse opacity fades 1 -> 0 after 50% face shatter */}
            <mask id="headOcclusionMask">
              <rect x="0" y="0" width="1000" height="380" fill="white" />
              <ellipse
                cx="var(--mask-cx, 520)"
                cy="165"
                rx="var(--mask-rx, 230)"
                ry="var(--mask-ry, 180)"
                fill="black"
                style={{ fillOpacity: 'var(--mask-cutout-opacity, 1)' }}
                filter="url(#softMaskBlur)"
              />
            </mask>

            {/* Soft Ambient Glow Filter */}
            <filter id="subtleElectricBlueGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Plain PORTFOLIO Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#portfolioElectricBlueGradient)"
            stroke="none"
            filter="url(#subtleElectricBlueGlow)"
            mask="url(#headOcclusionMask)"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: '340px',
              letterSpacing: '0px'
            }}
          >
            PORTFOLIO
          </text>
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full px-[15px] pt-[58vh] sm:pt-[44vh] lg:pt-[49vh] pb-8 sm:pb-12 flex-1 flex flex-col justify-between">

        {/* Content Overlap Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">

          {/* Left Column (7 cols): Hello I'm + GAURAV VERMA + Subtitle + Bio + Badge */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-2.5 z-10">
            {/* Cursive handwritten accent "Hello, I'm" */}
            <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-wide pl-1 drop-shadow-md">
              {HERO_DATA.greeting}
            </div>

            {/* Giant Name Header GAURAV VERMA */}
            <h1 className="font-tall text-5xl sm:text-8xl lg:text-[104px] leading-[0.82] tracking-normal font-black text-white uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
              {HERO_DATA.name}
            </h1>

            {/* Blue Subtitle */}
            <div className="text-blue-400 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.16em] pt-1 flex items-center gap-2">
              <span>{HERO_DATA.title}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            </div>

            {/* Bio Description with Protective Glass Backdrop to block canvas bleed-through */}
            <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-md font-normal pt-1 drop-shadow bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
              {HERO_DATA.description}
            </p>

            {/* Availability Badge in Glassmorphic Pill */}
            <div className="pt-3">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/70 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <Globe className="w-4 h-4 text-blue-400 ml-1" />
                <span className="text-[11px] font-bold tracking-[0.18em] text-blue-300 uppercase">
                  {HERO_DATA.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Tagline Callout & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-8 lg:space-y-12 text-left lg:text-right pb-1">

            {/* Tagline callout with Glassmorphism */}
            <div className="flex items-start space-x-3 lg:space-x-0 lg:flex-row-reverse max-w-xs bg-neutral-950/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 lg:ml-3 fill-blue-400" />
              <p className="text-neutral-200 text-xs sm:text-sm font-medium leading-snug">
                {HERO_DATA.tagline}
              </p>
            </div>

            {/* Stats Block in Glass Cards */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 border-t border-white/10 pt-6 w-full lg:w-auto">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start lg:items-end bg-neutral-950/60 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 rounded-xl shadow-md hover:border-blue-500/40 transition-colors">
                  <span className="font-tall text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-neutral-300 tracking-[0.15em] uppercase mt-1 leading-tight max-w-[120px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer Scroll Down bar */}
        <div className="pt-6 flex items-center justify-between border-t border-white/10 text-neutral-400 text-[11px] tracking-widest uppercase mt-8">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Minimalist UI/UX Portfolio</span>
          </span>
          <a
            href="#projects"
            className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <span>Scroll Down</span>
            <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};