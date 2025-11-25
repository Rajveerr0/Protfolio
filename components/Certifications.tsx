import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from './CursorProvider';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

const Certifications = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section className="relative py-24 px-6 md:px-16 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
            <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white">
                CERTIFICATIONS
            </h2>
            <Award className="text-aiPurple opacity-50" size={32} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                    key={index}
                    className="relative p-6 border border-white/10 bg-charcoal rounded-sm flex flex-col items-start text-left group hover:border-aiPurple/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    <div className="mb-4 text-aiPurple group-hover:text-cyberCyan transition-colors">
                        <div className="w-2 h-2 bg-current rounded-full shadow-[0_0_10px_currentColor]" />
                    </div>
                    <h4 className="font-space font-bold text-white text-lg group-hover:text-white transition-colors mb-2">
                        {cert.name}
                    </h4>
                    {cert.issuer && (
                        <p className="text-xs text-gray-500 font-space uppercase tracking-wider">{cert.issuer}</p>
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;