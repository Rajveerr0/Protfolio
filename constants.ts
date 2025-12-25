import { Project, Skill, Certification } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/Rajveerr0",
  linkedin: "https://www.linkedin.com/in/rajveer-rajput-536b1925b/",
  email: "mailto:rajveerrajputmoga1@gmail.com?subject=Let's%20Collaborate&body=Hi%20Rajveer,%0D%0A%0D%0AI%20would%20like%20to%20connect%20regarding..."
};

export const SKILLS: Skill[] = [
  {
    category: "AI/ML & Data",
    items: ["LangChain", "RAG Pipelines", "Vertex AI", "Gemini API", "LLM Apps", "Python"]
  },
  {
    category: "Backend",
    items: ["Flask", "Python", "PHP", "MySQL", "REST APIs"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "Docker", "Linux", "Figma", "Jira", "Google Cloud"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AI College Chatbot",
    description: "An intelligent conversational assistant for campus inquiries utilizing LangChain and ChromaDB for vector search, integrated with OpenRouter LLMs.",
    tech: ["LangChain", "Flask", "ChromaDB", "OpenRouter"],
    category: "AI/ML",
    videoUrl: "/files/project-demo.mp4",
    link: "https://pcte-chatbot-1.onrender.com/"
  },
  {
    id: "p2",
    title: "Cloud Word-PDF Converter",
    description: "A scalable cloud utility that automates document format conversion using the Dropbox API, deployed on Render for high availability.",
    tech: ["Python", "Dropbox API", "Render", "Automation"],
    category: "Web",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "p3",
    title: "Online Dental Clinic",
    description: "A comprehensive practice management system featuring appointment scheduling, patient records, and admin dashboard.",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    category: "Web",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "p4",
    title: "PCTE Hostel Portal",
    description: "A digitized hostel management solution handling room allocation, student complaints, and automated notifications via PHPMailer.",
    tech: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
    category: "Web",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "p5",
    title: "KNPC App UI",
    description: "High-fidelity mobile application prototype designed in Figma focusing on user-centric navigation and modern aesthetics.",
    tech: ["Figma", "Prototyping", "UI/UX"],
    category: "Mobile",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "GenAI by Google Cloud" },
  { name: "ChatGPT Prompt Engineering" },
  { name: "Advanced Prompt Hacking" },
  { name: "Agile Project Management" }
];

export const EDUCATION = [
  {
    degree: "B.Tech CSE",
    institution: "PTU",
    year: "Present"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "State Board of Technical Education",
    year: "Completed"
  }
];