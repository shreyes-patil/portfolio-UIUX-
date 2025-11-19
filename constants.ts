import { Experience, Project, SkillCategory, Testimonial } from './types';

export const RESUME_SUMMARY = `iOS developer who combines product vision with technical depth, delivering Swift/SwiftUI apps that feature clean architecture, real-time interactions, and user experiences guided by Apple’s Human Interface Guidelines.`;

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineering Intern',
    company: 'Goomi Academy',
    location: 'Boston, MA',
    period: 'Jan 2025 – July 2025',
    description: [
      'Delivered a scalable social learning iOS app (Goomi Community) by leading end-to-end development in SwiftUI, Realm, AWS, and Supabase.',
      'Enhanced engagement with core features including home feed, community posts, comments, notifications, and real-time direct messaging powered by Stream.',
      'Improved performance by 40% through Realm-based offline caching, reducing API dependency.',
      'Accelerated media delivery by 55% by building an AWS-backed pipeline (S3 + CloudFront).'
    ]
  },
  {
    id: 'exp-2',
    role: 'Software Engineering Fellow',
    company: 'Headstarter',
    location: 'Remote',
    period: 'July 2024 – Sep 2024',
    description: [
      'Shipped 5 AI-powered projects in 5 weeks, leveraging React, Next.js, and Firebase with CI/CD pipelines.',
      'Built and deployed a SaaS product for dynamic flashcard generation using GPT-4 API; integrated Stripe for custom pricing.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Software Developer',
    company: 'Krushi Mitra',
    location: 'Bengaluru, India',
    period: 'May 2021 – June 2022',
    description: [
      'Improved agricultural decision-making by building an intuitive frontend platform integrated with machine learning outputs.',
      'Implemented mobile-first design principles for responsive user flows.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Goomi Community',
    role: 'Lead iOS Intern',
    timeline: 'Jan 2025 – July 2025',
    category: 'iOS',
    description: 'A scalable social learning iOS app fostering community engagement through real-time interactions.',
    problemStatement: 'Students lacked a centralized mobile platform for real-time peer collaboration and resource sharing.',
    metrics: 'Reduced load times by 40% via Realm caching',
    stack: ['SwiftUI', 'Realm', 'AWS S3', 'Supabase', 'Stream SDK'],
    // Using Thumbnail API for better embedding reliability
    image: 'https://drive.google.com/thumbnail?id=1y4ktXq4Iz0RavuwwutUF8Gtn4iGILn-0&sz=w1200'
  },
  {
    id: 'proj-2',
    title: 'FlashGen',
    role: 'Creator & Developer',
    timeline: 'July 2025 – Present',
    category: 'AI',
    description: 'AI-powered flashcard app that generates study cards from topics, difficulty levels, or uploaded PDFs.',
    problemStatement: 'Manual flashcard creation is time-consuming and inefficient for dense academic material.',
    metrics: 'Generates study sets in <5s from complex PDFs',
    stack: ['SwiftUI', 'MVVM', 'Gemini API', 'Supabase', 'Stripe'],
    // Using Thumbnail API for better embedding reliability
    image: 'https://drive.google.com/thumbnail?id=1YSLRdE5xeqYLkonoOT7_14cXahjI2jFq&sz=w1200'
  },
  {
    id: 'proj-3',
    title: 'Vision3D',
    role: 'iOS Developer',
    timeline: 'Oct 2024 – Dec 2024',
    category: 'AR/VR',
    description: 'Immersive 3D vision features on VisionOS using RealityKit and modular Xcode structure.',
    problemStatement: 'Existing mobile AR experiences lacked depth and true interactivity required for education.',
    metrics: 'Maintained stable 90fps for high-poly assets',
    stack: ['VisionOS', 'RealityKit', 'ARKit', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=1000&q=80'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Core Competencies',
    skills: ['iOS Development', 'Clean Architecture', 'Product Engineering', 'System Design', 'Mobile-First UX']
  },
  {
    name: 'Languages',
    skills: ['Swift', 'SwiftUI', 'Python', 'TypeScript', 'SQL']
  },
  {
    name: 'Tools & Cloud',
    skills: ['Xcode', 'AWS', 'Firebase', 'Supabase', 'Git', 'Figma']
  },
  {
    name: 'Specialized Tech',
    skills: ['Core ML', 'ARKit', 'RealityKit', 'VisionOS', 'Realm']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Senior Product Manager',
    company: 'Goomi Academy',
    text: 'Shreyas transformed our MVP into a robust, production-ready iOS application. His ability to handle complex data syncing with Realm while maintaining a buttery smooth UI was impressive.'
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Tech Lead',
    company: 'Headstarter',
    text: 'In just 5 weeks, Shreyas shipped multiple full-stack AI projects that would take others months. His grasp of integrating LLMs into consumer-facing products is top-tier.'
  }
];

export const CONTACT_INFO = {
  phone: '857-693-1155',
  email: 'patil.shreyas@northeastern.edu',
  linkedin: 'linkedin.com/in/shreyes-patil',
  github: 'github.com/shreyes-patil',
  website: 'shreyaspatil.me',
  location: 'Boston, MA'
};

export const SYSTEM_INSTRUCTION = `You are the AI portfolio assistant for Shreyas H Patil, an experienced iOS Developer.
Use the following context to answer user questions professionally and concisely.
If asked about something not in the resume, politely state you don't have that information but suggest contacting Shreyas directly.

Context:
Summary: ${RESUME_SUMMARY}
Experiences: ${JSON.stringify(EXPERIENCES)}
Projects: ${JSON.stringify(PROJECTS)}
Skills: ${JSON.stringify(SKILLS)}
Contact: ${JSON.stringify(CONTACT_INFO)}

Tone: Professional, enthusiastic, and concise. Focus on his expertise in SwiftUI, Clean Architecture, and AI integration.`;