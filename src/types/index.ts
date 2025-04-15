import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
}