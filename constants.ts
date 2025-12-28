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
    videoUrl: "https://rlyl2ix43qshzswg.public.blob.vercel-storage.com/RAG%20chatbot",
    link: "https://ai-college-chatbot.vercel.app",
    githubLink: "https://github.com/Rajveerr0/pcte-chatbot"
  },
  {
    id: "p2",
    title: "Cloud Word-PDF Converter",
    description: "A scalable cloud utility that automates document format conversion using the Dropbox API, deployed on Render for high availability.",
    tech: ["Python", "Dropbox API", "Render", "Automation"],
    category: "Web",
    videoUrl: "https://rlyl2ix43qshzswg.public.blob.vercel-storage.com/converter.mp4",
    link: "https://wordtopdfconvertor.onrender.com/",
    githubLink: "https://github.com/Rajveerr0/wordtopdfconvertor"
  },
  {
    id: "p3",
    title: "ConnectU- Student & Alumni Networking Platform",
    description: "A role-based web application connecting students and alumni with features like secure authentication, job postings, mentorship access, and personalized dashboards.",
    tech: ["React.js", "Node.js", "JWT Auth", "Supabase", "vercel"],
    category: "Web",
    videoUrl: "https://rlyl2ix43qshzswg.public.blob.vercel-storage.com/campusbridge",
    link: "https://connectu-phi.vercel.app/",
    githubLink:"https://github.com/Rajveerr0/connectu"
  },
  // {
  //   id: "p4",
  //   title: "PCTE Hostel Portal",
  //   description: "A digitized hostel management solution handling room allocation, student complaints, and automated notifications via PHPMailer.",
  //   tech: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
  //   category: "Web",
  //   videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  //   githubLink:"https://github.com/Rajveerr0/pcte-hostel-portal"
  // },
  {
    id: "p5",
    title: "KNPC App UI",
    description: "High-fidelity mobile application prototype designed in Figma focusing on user-centric navigation and modern aesthetics.",
    tech: ["Figma", "Prototyping", "UI/UX"],
    category: "Mobile",
    videoUrl: "https://rlyl2ix43qshzswg.public.blob.vercel-storage.com/knpc",
    figmaLink:"https://www.figma.com/design/zln3yku4v8lyWgtTTqIeG3/KNPC-App?node-id=0-1&p=f&t=GWuw8DqDAXoK8caI-0",
    link: "https://www.figma.com/proto/zln3yku4v8lyWgtTTqIeG3/KNPC-App?node-id=10-2&p=f&t=GWuw8DqDAXoK8caI-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A2"
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