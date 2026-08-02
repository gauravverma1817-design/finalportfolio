import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SelectedProjects } from './components/SelectedProjects';
import { EducationSkillsProcess } from './components/EducationSkillsProcess';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { HireModal } from './components/HireModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-body selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
      {/* Smooth 300-Frame Scroll Background Canvas */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Header onOpenHireModal={() => setHireModalOpen(true)} />

      {/* Main Content Sections (Aesthetic Glassmorphism Foreground) */}
      <main className="relative z-10 flex-1 w-full">
        {/* Hero Section */}
        <HeroSection onOpenHireModal={() => setHireModalOpen(true)} />

        {/* Selected Projects Grid */}
        <SelectedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Education, Skills & Work Process Timeline */}
        <EducationSkillsProcess onOpenHireModal={() => setHireModalOpen(true)} />

        {/* Contact Section */}
        <ContactSection onOpenHireModal={() => setHireModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </div>
  );
}
