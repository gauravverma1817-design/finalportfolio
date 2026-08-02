import React from 'react';
import { X, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-950/80 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.9)]">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/60 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="font-tall text-2xl font-bold text-blue-400">
              {project.number}
            </span>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wider uppercase">
                {project.title}
              </h3>
              <p className="text-[10px] text-neutral-400 uppercase tracking-wider">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">

          {/* Hero Banner Image */}
          <div className="relative w-full aspect-[16/9] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-2xl text-xs">
            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center space-x-1 mb-1">
                <Tag className="w-3 h-3 text-blue-400" />
                <span>Category</span>
              </span>
              <span className="font-semibold text-neutral-200">{project.category}</span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center space-x-1 mb-1">
                <Calendar className="w-3 h-3 text-blue-400" />
                <span>Year</span>
              </span>
              <span className="font-semibold text-neutral-200">{project.year}</span>
            </div>

            {project.client && (
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center space-x-1 mb-1">
                  <User className="w-3 h-3 text-blue-400" />
                  <span>Client</span>
                </span>
                <span className="font-semibold text-neutral-200">{project.client}</span>
              </div>
            )}

            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center space-x-1 mb-1">
                <ExternalLink className="w-3 h-3 text-blue-400" />
                <span>Live Demo</span>
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-400 hover:text-blue-300 hover:underline flex items-center space-x-1"
              >
                <span>Visit Site</span>
              </a>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Stack / Tags */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Technologies & Deliverables
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-950/60 border border-blue-500/30 px-3 py-1 text-[11px] font-semibold text-blue-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-950/80 border-t border-white/10 backdrop-blur-md flex items-center justify-between">
          <span className="text-[11px] text-neutral-400 uppercase tracking-widest">
            Gaurav Verma Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-xs font-bold text-white rounded-full uppercase tracking-wider transition-colors border border-white/10"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
