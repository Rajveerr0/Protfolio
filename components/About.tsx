import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { Github, Linkedin, FileText, GraduationCap } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const About = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section id="about" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
           <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-white">
            ABOUT ME
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-aiPurple to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Bio & Socials */}
            <div className="space-y-10">
                <motion.div 
                    className="p-8 md:p-10 bg-charcoal/40 backdrop-blur-xl border border-white/10 rounded-sm hover:border-aiPurple/30 transition-colors duration-500 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aiPurple to-cyberCyan opacity-50" />
                    
                    <p className="font-space text-lg leading-loose text-gray-300 mb-6">
                        <span className="text-cyberCyan font-bold">Aspiring AI/ML and Full-Stack Engineer</span> specialized in constructing the infrastructure for intelligence.
                    </p>
                    <p className="font-space text-lg leading-loose text-gray-300">
                        My expertise spans <span className="text-white font-bold">Generative AI, LangChain, and Gemini APIs</span>. I bridge the gap between complex model architecture and intuitive user experiences. I don't just build apps; I build adaptive systems.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-3">
                         {['AI Automation', 'LLM Integration', 'UI/UX Design', 'Cloud Arch'].map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-syncopate border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-cyberCyan transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Social Icons Row */}
                <motion.div 
                    className="flex gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a 
                       href={SOCIAL_LINKS.linkedin} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="group flex items-center justify-center w-14 h-14 border border-white/10 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyberCyan transition-all duration-300"
                       onMouseEnter={() => setCursorVariant("view")}
                       onMouseLeave={() => setCursorVariant("default")}
                    >
                        <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    
                    <a 
                       href={SOCIAL_LINKS.github} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="group flex items-center justify-center w-14 h-14 border border-white/10 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-aiPurple transition-all duration-300"
                       onMouseEnter={() => setCursorVariant("view")}
                       onMouseLeave={() => setCursorVariant("default")}
                    >
                        <Github size={24} className="group-hover:scale-110 transition-transform" />
                    </a>

                    <a 
                       href="/files/Rajveer Btech 4.pdf" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group flex items-center justify-center w-14 h-14 border border-white/10 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                       onMouseEnter={() => setCursorVariant("view")}
                       onMouseLeave={() => setCursorVariant("default")}
                    >
                        <FileText size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Right Column: Education */}
            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                         <GraduationCap className="text-aiPurple" size={28} />
                         <h3 className="font-syncopate text-white text-xl font-bold tracking-widest">EDUCATION</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Education Item 1 */}
                         <div className="relative p-6 bg-charcoal/60 backdrop-blur-sm border border-white/10 rounded-sm group hover:bg-white/5 transition-all duration-300">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyberCyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-syncopate text-lg text-white font-bold">B.Tech CSE</h4>
                                <span className="text-[10px] font-syncopate text-cyberCyan border border-cyberCyan/30 px-2 py-1 rounded bg-cyberCyan/10">PRESENT</span>
                            </div>
                            <p className="text-gray-400 font-space text-sm mb-1">Punjab Technical University (PTU)</p>
                            <p className="text-gray-600 font-space text-xs">Specialization in Artificial Intelligence</p>
                        </div>

                        {/* Education Item 2 */}
                         <div className="relative p-6 bg-charcoal/60 backdrop-blur-sm border border-white/10 rounded-sm group hover:bg-white/5 transition-all duration-300">
                             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-aiPurple to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-syncopate text-lg text-white font-bold">Diploma in Comp. Eng.</h4>
                                <span className="text-[10px] font-syncopate text-gray-400 border border-white/10 px-2 py-1 rounded">COMPLETED</span>
                            </div>
                            <p className="text-gray-400 font-space text-sm">State Board of Technical Education</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;