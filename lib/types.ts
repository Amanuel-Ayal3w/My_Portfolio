export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  achievements?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: 'certification' | 'award';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  education: {
    degree: string;
    institution: string;
    duration: string;
  };
}