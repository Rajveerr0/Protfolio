import { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'AI/ML' | 'Web' | 'Mobile';
  videoUrl?: string; // Added for project recording
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface CursorContextType {
  cursorVariant: "default" | "text" | "view";
  setCursorVariant: (variant: "default" | "text" | "view") => void;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}