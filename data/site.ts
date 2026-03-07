export type SkillCategory = {
  category: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  years: string;
  responsibilities: string[];
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
};

// Edit this object to update personal identity, profile summary and social links.
export const profile = {
  name: 'Atrayan Mukherjee',
  title: 'Software Developer | AI Model Evaluation | Prompt Engineering',
  location: 'Kolkata, India',
  shortBio:
    'Software developer specializing in JavaScript, React, and AI model evaluation. Experienced in analyzing AI-generated code, designing prompts to test reasoning ability, and improving LLM outputs through structured evaluation.',
  email: 'atrayanmukherjee0248@gmail.com',
  github: 'https://github.com/Cybertronian123',
  linkedin: 'LINKEDIN_LINK_HERE',
  githubUsername: 'Cybertronian123'
};

// Edit navigation labels/targets here.
export const navLinks: NavLink[] = [
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'evaluation', label: 'Evaluation', href: '#evaluation' },
  { id: 'prompt-lab', label: 'Prompt Lab', href: '#prompt-lab' },
  { id: 'benchmarks', label: 'Benchmarks', href: '#benchmarks' },
  { id: 'case-studies', label: 'Case Studies', href: '#case-studies' },
  { id: 'github', label: 'GitHub', href: '#github' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Edit skills here.
export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL']
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express']
  },
  {
    category: 'AI Evaluation',
    skills: ['Prompt Engineering', 'LLM Response Ranking', 'Code Correctness Evaluation', 'RLHF Feedback']
  },
  {
    category: 'Tools',
    skills: ['Git', 'VSCode', 'REST APIs', 'Docker']
  }
];

// Edit projects here.
export const featuredProjects: Project[] = [
  {
    title: 'React Monitoring Dashboard',
    description:
      'A real-time monitoring interface for devices and server infrastructure built with React and REST APIs.',
    features: [
      'real-time updates',
      'device status monitoring',
      'performance dashboards',
      'API error handling'
    ],
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/Cybertronian123/react-monitoring-dashboard'
  },
  {
    title: 'AI Code Evaluation Experiments',
    description: 'Experiments analyzing and comparing AI-generated code solutions.',
    features: ['response ranking', 'bug detection', 'reasoning analysis'],
    techStack: ['TypeScript', 'Python', 'Jupyter', 'Evaluation Rubrics'],
    githubUrl: 'https://github.com/Cybertronian123/ai-code-evaluation-experiments'
  },
  {
    title: 'Prompt Engineering Experiments',
    description: 'Collection of prompts designed to test reasoning capabilities of LLMs.',
    features: ['algorithm prompts', 'debugging prompts', 'edge-case analysis'],
    techStack: ['Prompt Design', 'JavaScript', 'Markdown'],
    githubUrl: 'https://github.com/Cybertronian123/prompt-engineering-experiments'
  }
];

// Edit experience here.
export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Example Tech Company',
    years: '2024 - Present',
    responsibilities: [
      'Built React dashboards for monitoring systems',
      'Debugged frontend and API integration issues',
      'Reviewed code for performance and maintainability',
      'Designed test scenarios for UI workflows'
    ]
  }
];
