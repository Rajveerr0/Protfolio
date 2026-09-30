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
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 px-6 md:px-16 z-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <span className="block font-space text-cyberCyan mb-2 tracking-widest text-xs">
            // CAPABILITIES
          </span>

          <h2 className="text-4xl md:text-5xl font-syncopate font-bold text-white">
            TECHNICAL STACK
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500 font-space text-sm md:text-base">
            Technologies and tools I use across Generative AI, full-stack
            development, robotics, IoT, and STEM projects.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px"
          }}
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="group relative p-5 md:p-6 bg-charcoal/50 border border-white/5 backdrop-blur-sm hover:bg-white/5 hover:border-white/10 transition-all duration-300"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-aiPurple opacity-50 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300" />

              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyberCyan opacity-50 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300" />

              {/* Category */}
              <h3 className="font-syncopate text-xs md:text-sm text-gray-400 mb-5 group-hover:text-white transition-colors border-b border-white/10 pb-3">
                {String(index + 1).padStart(2, '0')} / {skillGroup.category.toUpperCase()}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={item}
                    className="text-sm md:text-base font-space text-white/90 group-hover:text-cyberCyan transition-colors"
                  >
                    {item}

                    {i < skillGroup.items.length - 1 && (
                      <span className="text-gray-700 mx-1">
                        /
                      </span>
                    )}
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
