
import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorContextType } from '../types';

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  setCursorVariant: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<"default" | "text" | "view">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if ('touches' in e) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // Mouse event
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveCursor, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 24,
      width: 24,
      x: -12,
      y: -12,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as const,
    },
    view: {
      height: 80,
      width: 80,
      x: -40,
      y: -40,
      backgroundColor: "#a8fbd3",
      mixBlendMode: "difference" as const,
    },
    text: {
      height: 100,
      width: 100,
      x: -50,
      y: -50,
      backgroundColor: "#4fb7b3",
      mixBlendMode: "difference" as const,
    }
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden hidden md:flex" 
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorVariant === 'view' && (
          <span className="text-deepIndigo font-syncopate font-bold text-[10px] tracking-widest">VIEW</span>
        )}
      </motion.div>
      {children}
    </CursorContext.Provider>
  );
};
