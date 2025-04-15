import { SkillCategory, SocialLink } from '../types';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export const personalInfo = {
  name: "Tim Peter",
  role: "Full Stack Developer",
  bio: "I build exceptional and accessible digital experiences for the web. Focused on creating beautiful and functional applications that users love.",
  location: "San Francisco, CA",
  avatarUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
  resumeUrl: "/path-to-your-resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
    icon: Globe,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Layout",
    color: "text-blue-500",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "Angular"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "text-green-500",
    items: ["Node.js", "Express", "Python", "Django", "Java Spring", "GraphQL"],
  },
  {
    category: "Database",
    icon: "Database",
    color: "text-purple-500",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "Supabase"],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    color: "text-orange-500",
    items: ["React Native", "Flutter", "iOS", "Android", "Ionic", "Xamarin"],
  },
  {
    category: "DevOps",
    icon: "Globe",
    color: "text-red-500",
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Azure", "GCP"],
  },
  {
    category: "Languages",
    icon: "Code2",
    color: "text-yellow-500",
    items: ["JavaScript", "Python", "Java", "Go", "Rust", "C++"],
  },
];

export const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export const githubUsername = "yourusername";