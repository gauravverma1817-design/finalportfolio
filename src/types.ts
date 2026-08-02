export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link: string;
  year: string;
  client?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
