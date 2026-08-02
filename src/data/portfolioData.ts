import { Project, EducationItem, ProcessStep, ContactInfo } from '../types';

export const HERO_DATA = {
  greeting: "Hello, I'm",
  name: "GAURAV VERMA",
  title: "FRONT-END DEVELOPER & CS STUDENT (AI & ML)",
  institution: "KIET Group of Institutions, Ghaziabad",
  description: "Computer Science student specializing in Artificial Intelligence & Machine Learning at KIET Group of Institutions. Building high-fidelity web experiences with modern CSS glassmorphism, FastAPI, predictive ML models, and scalable databases.",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  tagline: "Turning ideas into powerful digital experiences.",
  stats: [
    { value: "AI & ML", label: "SPECIALIZATION" },
    { value: "40+", label: "PROJECTS & REPOS" },
    { value: "FREELANCER", label: "WEB DESIGNER & DEV" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "neuronudge",
    number: "01",
    title: "NEURONUDGE",
    subtitle: "FULL-STACK MENTAL HEALTH PLATFORM",
    category: "Full-Stack Web Application",
    description: "A full-stack mental health platform focused on user well-being, proactive wellness guidance, and habit tracking.",
    fullDescription: "NeuroNudge is a full-stack mental health platform designed to help users track and improve their psychological well-being. Built with a FastAPI backend server, structured PostgreSQL database models hosted on Supabase, and a clean glassmorphic frontend UI.",
    image: "/neuronudge.png",
    tags: ["FastAPI", "PostgreSQL", "Supabase", "UI/UX", "Python", "Full-Stack"],
    link: "https://neuro-nudge-opal.vercel.app/",
    year: "2026",
    client: "Social Internship"
  },
  {
    id: "tech-connect",
    number: "02",
    title: "TECH CONNECT",
    subtitle: "MENTORSHIP & COMMUNITY PLATFORM",
    category: "Full-Stack Web Platform",
    description: "A collaborative mentorship platform connecting students with industry mentors, learning resources, job opportunities, and tech events.",
    fullDescription: "Tech Connect is a web platform designed to bridge the gap between aspiring developers and experienced mentors. It features mentorship matching, resource sharing, tech event hubs, and career development tools.",
    image: "/techconnect.png",
    tags: ["React", "Node.js", "Mentorship", "UI/UX", "Full-Stack"],
    link: "https://techconnect-nine.vercel.app/",
    year: "2025",
    client: "College Project"
  },
  {
    id: "frontend-clones",
    number: "03",
    title: "FRONT-END CLONES & PORTFOLIO",
    subtitle: "HIGH-FIDELITY WEB INTERFACES",
    category: "Frontend Web Engineering",
    description: "High-fidelity frontend web clones (such as Amazon and Apple interface layouts) and custom personal portfolio applications.",
    fullDescription: "A curated collection of responsive, pixel-perfect frontend web interface clones including Amazon e-commerce layouts and Apple showcase experiences. Built using HTML5, CSS3, JavaScript, and custom glassmorphism visual effects deployed on GitHub.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Glassmorphism UI"],
    link: "https://github.com/gauravverma1817-design",
    year: "2023 - 2024",
    client: "GitHub Open Source Repositories"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Computer Science & Engineering (Specializing in AI & ML)",
    institution: "KIET Group of Institutions, Ghaziabad",
    period: "Undergraduate Program"
  }
];

export const SKILLS_LIST: string[] = [
  "HTML5 & CSS3",
  "JAVASCRIPT (ES6+)",
  "RESPONSIVE WEB DESIGN",
  "UI/UX IMPLEMENTATION",
  "GLASSMORPHISM UI",
  "PYTHON",
  "C / C++",
  "MACHINE LEARNING",
  "PREDICTIVE MODELING",
  "FASTAPI",
  "POSTGRESQL",
  "SUPABASE",
  "GIT & GITHUB",
  "VS CODE",
  "GOOGLE AI STUDIO"
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: "01",
    title: "COMMUNITY LEADERSHIP",
    description: "Serving as Administrator of Coders Garage, guiding online developer community members and driving collaborative growth.",
    iconName: "Search"
  },
  {
    number: "02",
    title: "UI/UX & GLASSMORPHISM",
    description: "Designing sleek, responsive user interfaces using modern CSS frameworks, glassmorphism aesthetics, and clean layouts.",
    iconName: "Lightbulb"
  },
  {
    number: "03",
    title: "FULL-STACK & ML DEVELOPMENT",
    description: "Engineering robust Python ML models, FastAPI REST APIs, and client-side JavaScript applications.",
    iconName: "Code"
  },
  {
    number: "04",
    title: "DATABASE PERSISTENCE",
    description: "Implementing structured PostgreSQL relational databases and cloud persistence layers using Supabase.",
    iconName: "PenTool"
  },
  {
    number: "05",
    title: "GIT DEPLOYMENT & OPEN SOURCE",
    description: "Maintaining structured code bases using Git & GitHub, publishing public repositories and live portfolio web builds.",
    iconName: "Send"
  }
];

export const CONTACT_DATA: ContactInfo = {
  email: "gauravverma1817@gmail.com",
  github: "github.com/gauravverma1817-design",
  linkedin: "linkedin.com/in/gaurav-verma-622747382",
  location: "KIET Group of Institutions, Ghaziabad"
};

