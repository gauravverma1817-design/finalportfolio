import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="w-full bg-black/40 backdrop-blur-sm py-16 sm:py-24 border-b border-white/10 relative z-10">
      <div className="w-full px-[15px]">

        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-8 sm:mb-12">
          <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] text-white uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>SELECTED PROJECTS</span>
          </h2>

          <a
            href="#projects"
            className="text-xs font-semibold tracking-wider text-neutral-400 hover:text-blue-400 transition-colors uppercase flex items-center space-x-1"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Column Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between bg-neutral-950/50 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_10px_35px_rgba(37,99,235,0.2)] transition-all duration-300 rounded-2xl overflow-hidden p-3.5 sm:p-5 relative"
            >
              {/* Glass subtle highlight glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Project Image Box */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900/80 overflow-hidden mb-4 rounded-xl border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-3 right-3 bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-neutral-200 uppercase tracking-widest rounded-full border border-white/10 shadow-sm">
                  {project.year}
                </div>
              </div>

              {/* Card Footer: Blue Number 01/02/03 + Title & Subtitle + Arrow */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-baseline space-x-3">
                  <span className="font-tall text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 tracking-wider uppercase font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-900/80 border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-600 text-neutral-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
