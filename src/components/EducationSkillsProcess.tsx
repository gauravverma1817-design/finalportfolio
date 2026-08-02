import React from 'react';
import { Search, Lightbulb, PenTool, Code, Send, Sparkles, GraduationCap } from 'lucide-react';
import { EDUCATION_DATA, SKILLS_LIST, PROCESS_DATA } from '../data/portfolioData';

const getProcessIcon = (iconName: string) => {
  switch (iconName) {
    case 'Search': return <Search className="w-4 h-4 text-red-500" />;
    case 'Lightbulb': return <Lightbulb className="w-4 h-4 text-red-500" />;
    case 'PenTool': return <PenTool className="w-4 h-4 text-red-500" />;
    case 'Code': return <Code className="w-4 h-4 text-red-500" />;
    case 'Send': return <Send className="w-4 h-4 text-red-500" />;
    default: return <Sparkles className="w-4 h-4 text-red-500" />;
  }
};

interface EducationSkillsProcessProps {
  onOpenHireModal: () => void;
}

export const EducationSkillsProcess: React.FC<EducationSkillsProcessProps> = ({ onOpenHireModal }) => {
  return (
    <section id="about" className="w-full bg-black/40 backdrop-blur-sm py-16 sm:py-24 border-b border-white/10 relative z-10">
      <div className="w-full px-[15px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

          {/* Left Column (4 cols): Education & Skills in Glass Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-neutral-950/40 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl">

            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase border-b border-white/10 pb-3 mb-6 flex items-center justify-between">
                <span>EDUCATION & SKILLS</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </h2>

              {/* Education Block */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xs font-bold tracking-wider text-blue-400 uppercase flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>EDUCATION</span>
                </h3>

                <div className="space-y-4">
                  {EDUCATION_DATA.map((edu, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-white/5 pb-3">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-200">
                          {edu.degree}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-blue-400 tracking-wider bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Block */}
              <div>
                <h3 className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-4">
                  SKILLS & TOOLS
                </h3>

                <div className="flex flex-wrap gap-2">
                  {SKILLS_LIST.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-blue-500/60 px-3 py-1.5 text-[10px] font-bold text-neutral-200 tracking-wider uppercase rounded-full transition-all duration-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Middle Column (5 cols): Work Process in Glass Container */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-950/40 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase border-b border-white/10 pb-3 mb-6 flex items-center justify-between">
                <span>WORK PROCESS</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </h2>

              <div className="space-y-5">
                {PROCESS_DATA.map((step) => (
                  <div key={step.number} className="flex items-start space-x-4 group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all">
                    {/* Number + Icon Circle */}
                    <div className="flex items-center space-x-3 shrink-0">
                      <span className="font-tall text-xl font-bold text-blue-400 w-6">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-neutral-900/80 border border-white/10 group-hover:border-blue-500 flex items-center justify-center transition-colors shadow-md">
                        {getProcessIcon(step.iconName)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-0.5">
                      <h3 className="text-xs font-bold tracking-wider text-white uppercase group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Glass Cobalt Quote Container */}
          <div className="lg:col-span-3 bg-gradient-to-b from-blue-950/50 via-indigo-950/30 to-black/80 backdrop-blur-xl border border-blue-500/30 p-6 sm:p-8 rounded-2xl flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-[0_10px_35px_rgba(37,99,235,0.15)]">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-blue-600/10 font-tall text-9xl select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10">
              <span className="text-blue-400 font-tall text-6xl leading-none block mb-2">
                “
              </span>
              <p className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed italic">
                Good design is not just how it looks, but how it works.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-blue-500/20">
              {/* Cursive Signature */}
              <div className="font-script text-4xl text-white mb-4">
                Gaurav Verma
              </div>

              <button
                onClick={onOpenHireModal}
                className="w-full text-left group bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 p-3 rounded-xl transition-all"
              >
                <p className="text-[10px] font-bold tracking-[0.18em] text-blue-300 group-hover:text-white uppercase leading-snug">
                  LET'S CREATE SOMETHING GREAT TOGETHER.
                </p>
                <div className="flex items-center space-x-1 text-blue-400 group-hover:text-white mt-2 text-xs font-bold">
                  <span>Start a project</span>
                  <Sparkles className="w-3.5 h-3.5 fill-blue-400 group-hover:fill-white" />
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
