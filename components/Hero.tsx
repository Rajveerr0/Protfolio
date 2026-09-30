import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto z-10">
        
        {/* Hero Content */}
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-cyberCyan"></div>

              <p className="text-cyberCyan font-syncopate text-xs md:text-sm tracking-[0.25em] uppercase">
                AI / ML • GENERATIVE AI • ROBOTICS
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-syncopate font-bold leading-[0.95] text-white"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              RAJVEER
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aiPurple via-fuchsia-500 to-cyberCyan">
                RAJPUT
              </span>

              <span className="block mt-5 text-lg md:text-2xl lg:text-3xl text-gray-400 font-space tracking-normal font-normal">
                AI Developer & Robotics Trainer
              </span>
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="mt-8 text-gray-400 font-space text-base md:text-lg max-w-2xl leading-relaxed border-l-2 border-white/10 pl-5 md:pl-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p>
              Engineering the synthetic mind. Building scalable Generative AI
              systems, RAG pipelines, and intelligent interfaces.
            </p>

            <p>
              I'm an AI/ML and Full-Stack Engineer from Moga, Punjab,
              specializing in Generative AI, Python, LangChain, RAG, React,
              and AI-powered applications. I also work as a Robotics & STEM
              Trainer, building hands-on projects with Arduino, IoT, and
              robotics technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Projects */}
            <a
              href="#projects"
              className="group relative px-6 py-3 bg-white text-obsidian font-syncopate font-bold tracking-wider overflow-hidden"
              onMouseEnter={() => setCursorVariant("view")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="relative z-10 flex items-center gap-2">
                VIEW PROJECTS

                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform text-aiPurple"
                />
              </span>

              <div className="absolute inset-0 bg-cyberCyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white font-syncopate font-bold tracking-wider hover:border-aiPurple hover:text-aiPurple transition-colors backdrop-blur-sm"
              onMouseEnter={() => setCursorVariant("default")}
            >
              CONTACT
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
