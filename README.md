<div align="center">

  # ✨ Gaurav Verma — Personal Portfolio

  **Front-End Developer & Computer Science Student (AI & ML)**  
  *Crafting high-fidelity, interactive web experiences with modern glassmorphism, 3D animations, and clean architecture.*

  [![Vite](https://img.shields.io/badge/Vite-6.4+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

  <br />

  [🌐 **View Live Portfolio**](#) · [🛠️ **Report Bug**](https://github.com/gauravverma1817-design/finalportfolio/issues) · [💡 **Request Feature**](https://github.com/gauravverma1817-design/finalportfolio/issues)

</div>

---

## 🌟 Overview

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. It features a custom 300-frame interactive 3D particle mesh animation that responds dynamically to user scroll and touch gestures, paired with an Apple-inspired frosted glassmorphism interface.

---

## 🚀 Key Features

- **🎮 Scroll-Driven 3D Particle Animation:** 300-frame canvas scroll scrubbing simulating a 3D particle head shattering dynamically as the user scrolls down the hero section.
- **⚡ Progressive Preloading & Zero-Flicker Fallback:** Frame 1 renders instantaneously, dismissing the loading screen immediately while remaining frames stream asynchronously in prioritized batches.
- **💎 Apple VisionOS-Style Glossy UI:** Custom glassmorphism cards featuring top-rim specular bevel highlights, deep backdrop diffusion (`backdrop-blur-2xl`), and sleek borders.
- **🎯 Dynamic SVG Occlusion Mask:** Custom geometry tracking algorithm that adjusts mask opacity across breakpoints so background elements seamlessly occlude behind the 3D subject.
- **📱 Fully Responsive & Mobile-First:** Fine-tuned offsets and responsive canvas scaling ensuring smooth 60 FPS performance on both mobile and desktop screens.
- **📂 Interactive Modals & Project Showcase:** Modal popups for selected projects and a contact/hire form.

---

## ⚡ Performance Optimization Highlight

To eliminate heavy initial load times and lag, the background assets underwent a major performance refactor:

| Metric | Before Optimization | After Optimization | Improvement |
| :--- | :--- | :--- | :--- |
| **Asset Format** | Raw PNGs (`.png`) | Modern Compressed WebP (`.webp`) | **Modern Next-Gen Format** |
| **Total Media Size** | **~390 MB** | **~7 MB** | **~98% Size Reduction** |
| **Initial Paint** | Blocked behind 10+ frame downloads | **Instant (< 300ms)** via Frame 1 Preload | **Zero Latency** |
| **Loading Strategy** | Synchronous sequential requests | **Prioritized Tiered Async Queue** | **60 FPS Scrubbing** |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Graphics & Rendering:** HTML5 2D Canvas API + CSS Filter Acceleration
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
finalportfolio/
├── public/
│   └── frames/                 # 300 optimized WebP animation frames
├── src/
│   ├── components/
│   │   ├── BackgroundCanvas.tsx # 60 FPS Canvas frame renderer & progressive preloader
│   │   ├── Header.tsx           # Navigation bar with action buttons
│   │   ├── HeroSection.tsx      # Hero banner with glossy glass cards & SVG mask
│   │   ├── SelectedProjects.tsx # Project showcase gallery
│   │   ├── EducationSkillsProcess.tsx # Skills timeline & education history
│   │   ├── ContactSection.tsx   # Contact form & social connections
│   │   ├── HireModal.tsx        # Interactive hire inquiry modal
│   │   ├── ProjectModal.tsx     # Project detail preview modal
│   │   └── Footer.tsx           # Page footer
│   ├── data/
│   │   └── portfolioData.ts     # Content source & project data
│   ├── App.tsx                  # Main application orchestrator
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Tailwind directives & global styling
├── package.json
├── tsconfig.json
└── vite.config.ts
