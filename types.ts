export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  timeline: string;
  description: string; // General description
  problemStatement: string; // Specific problem being solved
  metrics: string;
  stack: string[];
  category: 'iOS' | 'Full Stack' | 'AI' | 'AR/VR';
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: Date;
}