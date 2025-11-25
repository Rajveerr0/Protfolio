
import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { SKILLS } from '../constants';

const Skills = () => {
  const { setCursorVariant } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <span className="block font-space text-cyberCyan mb-2 tracking-widest text-xs">// CAPABILITIES</span>
             <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-white">
                TECHNICAL <br /> STACK
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 bg-charcoal/60 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {/* Neon Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-aiPurple opacity-50 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyberCyan opacity-50 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all" />

              <h3 className="font-syncopate text-sm text-gray-400 mb-6 group-hover:text-white transition-colors border-b border-white/10 pb-2">
                0{index + 1} / {skillGroup.category.toUpperCase()}
              </h3>
              
              <div className="flex flex-wrap gap-y-3 gap-x-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="text-base font-space text-white group-hover:text-cyberCyan transition-colors"
                  >
                    {item} <span className="text-gray-700 text-xs mx-1">/</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
