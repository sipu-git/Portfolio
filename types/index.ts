export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  features: string[];
  stats: { stars: number; forks: number; issues: number };
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
}

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  photo: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  readTime: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}
