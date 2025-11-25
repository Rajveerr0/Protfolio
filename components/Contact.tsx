import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <span className="font-space text-cyberCyan tracking-[0.5em] text-sm mb-6 block">INITIATE PROTOCOL</span>
            <h2 
            className="text-5xl md:text-8xl font-syncopate font-bold text-white mb-8 leading-tight"
            >
                LET'S <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aiPurple to-cyberCyan">COLLABORATE</span>
            </h2>
        </motion.div>

        <motion.p 
            className="text-gray-400 font-space text-xl mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            Ready to build intelligent systems? Let's turn data into decision.
        </motion.p>

        <motion.a 
            href={SOCIAL_LINKS.email}
            className="inline-block px-12 py-6 bg-white text-obsidian font-syncopate font-bold text-xl tracking-widest hover:bg-cyberCyan hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
        >
            CONTACT_ME
        </motion.a>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10">
            <div className="font-syncopate text-white font-bold text-2xl mb-4 md:mb-0 tracking-tighter">RR.</div>
            <div className="flex gap-12 font-space text-sm text-gray-400">
                <a href={SOCIAL_LINKS.linkedin} className="hover:text-cyberCyan transition-colors">LINKEDIN</a>
                <a href={SOCIAL_LINKS.github} className="hover:text-aiPurple transition-colors">GITHUB</a>
                <a href="/files/Rajveer Btech 4.pdf"
                 target="_blank" 
  rel="noopener noreferrer" 
                className="hover:text-white transition-colors">RESUME</a>
            </div>
            <div className="text-gray-600 text-xs font-space mt-8 md:mt-0">
                SYSTEM ONLINE © {new Date().getFullYear()}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;