
import React, { useState, useEffect } from 'react';
import { CursorProvider } from './components/CursorProvider';
import { AvatarScene } from './components/Avatar3D';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only update state for the navbar style to minimize re-renders
      const scrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <CursorProvider>
      <main className="bg-obsidian min-h-screen w-full text-white overflow-x-hidden selection:bg-cyberCyan selection:text-black">
        
        {/* 3D Background Layer - Stars and Nebula */}
        <AvatarScene />

        {/* Content Layer */}
        <div className="relative z-10">
            
            {/* Glass Navbar */}
            <nav 
              className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                isScrolled 
                  ? "bg-obsidian/80 backdrop-blur-md border-white/10 py-4 shadow-lg shadow-aiPurple/5" 
                  : "bg-transparent border-transparent py-6"
              }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center relative">
                    <a href="#" className="group flex items-center gap-2 z-[70] relative" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-syncopate font-bold text-xl md:text-2xl tracking-tighter text-white group-hover:text-cyberCyan transition-colors">
                            Rajveer.dev
                        </span>
                        <div className="w-2 h-2 bg-aiPurple rounded-full animate-pulse" />
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 font-space text-xs font-bold tracking-widest">
                        {navLinks.map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`} 
                                className="relative text-gray-300 hover:text-white transition-colors before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-[2px] before:bg-cyberCyan before:transition-all hover:before:w-full py-2"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white z-[70] relative p-2 hover:text-cyberCyan transition-colors focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 h-screen w-screen bg-obsidian/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center md:hidden"
                        >
                            <div className="flex flex-col items-center gap-8">
                                {navLinks.map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={handleNavClick}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="font-syncopate text-2xl font-bold text-white hover:text-cyberCyan tracking-widest transition-colors cursor-pointer"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
            
            {/* Integrated Personal Chatbot */}
            <ChatBot />
        </div>
      </main>
    </CursorProvider>
  );
};

export default App;
