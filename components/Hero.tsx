import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto z-10">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-cyberCyan"></div>
                  <h3 className="text-cyberCyan font-syncopate text-xs md:text-sm tracking-[0.3em] uppercase">
                      AI Architect & Engineer
                  </h3>
                </div>
                
                <h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-syncopate font-bold leading-tight text-white"
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    RAJVEER <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-aiPurple via-fuchsia-500 to-cyberCyan animate-pulse">
                        RAJPUT
                    </span>
                </h1>
            </motion.div>

            <motion.p 
                className="text-gray-400 font-space text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-white/10 pl-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Engineering the synthetic mind. Building scalable Generative AI systems, RAG pipelines, and futuristic interfaces.
            </motion.p>

            <motion.div 
                className="flex flex-wrap gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <a 
                    href="#projects"
                    className="group relative px-8 py-4 bg-white text-obsidian font-syncopate font-bold tracking-wider overflow-hidden"
                    onMouseEnter={() => setCursorVariant("view")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        VIEW SYSTEM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-aiPurple" />
                    </span>
                    <div className="absolute inset-0 bg-cyberCyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>

                <a 
                    href="#contact"
                    className="px-8 py-4 border border-white/20 text-white font-syncopate font-bold tracking-wider hover:border-aiPurple hover:text-aiPurple transition-colors backdrop-blur-sm"
                    onMouseEnter={() => setCursorVariant("default")} 
                >
                    CONTACT
                </a>
            </motion.div>
        </div>

        {/* Right Side is empty for Avatar */}
        <div className="hidden lg:block" />

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;