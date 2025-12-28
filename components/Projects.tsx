import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { PROJECTS } from '../constants';
import {
  Github,
  Figma,
  ArrowUpRight,
  Play,
  X,
  Maximize2
} from 'lucide-react';

/* ===============================
   Project Card Component
================================ */
const ProjectCard = memo(
  ({
    project,
    index,
    onSelect,
  }: {
    project: typeof PROJECTS[number];
    index: number;
    onSelect: (url: string) => void;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { setCursorVariant } = useCursor();

    const handleMouseEnter = () => {
      setCursorVariant('view');
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <motion.div
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/5 pb-20 last:border-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        {/* ================= Project Info ================= */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4 text-cyberCyan font-space text-xs tracking-widest">
            <span>0{index + 1}</span>
            <span className="w-10 h-[1px] bg-cyberCyan/30" />
            <span>{project.category}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-syncopate font-bold text-white mb-6 group-hover:text-aiPurple transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 font-space text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-space border border-white/10 rounded-full text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ================= LINKS (FIXED LOGIC) ================= */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            {/* Live Demo */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold font-syncopate text-sm hover:text-cyberCyan transition-colors"
              >
                LIVE DEMO <ArrowUpRight size={16} />
              </a>
            )}

            {/* GitHub Repo */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} /> GITHUB
              </a>
            )}

            {/* Figma Design */}
            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-cyberCyan transition-colors"
              >
                <Figma size={18} /> FIGMA
              </a>
            )}
          </div>
        </div>

        {/* ================= Video Preview ================= */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div
            className="aspect-video bg-charcoal rounded-lg overflow-hidden border border-white/10 transition-colors duration-300 relative cursor-pointer group-hover:border-aiPurple/50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => project.videoUrl && onSelect(project.videoUrl)}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

            {/* Video */}
            {project.videoUrl && (
              <video
                ref={videoRef}
                src={project.videoUrl}
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
              />
            )}

            {/* Grid Overlay */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* ID Watermark */}
            <div className="absolute bottom-6 left-6 text-white font-syncopate text-4xl font-bold opacity-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              {project.id.toUpperCase()}
            </div>

            {/* Play Icon */}
            {project.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Play className="fill-white text-white ml-1" size={24} />
                </div>
              </div>
            )}

            {/* Preview Badge */}
            {project.videoUrl && (
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-syncopate text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                <Maximize2 size={12} /> PREVIEW
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);

/* ===============================
   Main Projects Section
================================ */
const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-16 z-10">
      {/* ===== Video Modal ===== */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 p-2 bg-white/5 rounded-full"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden border border-aiPurple/30 shadow-[0_0_100px_rgba(124,58,237,0.2)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-24 border-b border-white/10 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-syncopate font-bold text-white leading-none">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              WORKS
            </span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(url) => setSelectedVideo(url)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
