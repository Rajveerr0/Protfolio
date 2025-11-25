
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS, SOCIAL_LINKS } from '../constants';

// Construct system instruction from portfolio data
const SYSTEM_INSTRUCTION = `
You are the AI assistant for Rajveer Rajput's portfolio website. 
Your goal is to help visitors learn about Rajveer, his skills, projects, and experience in a professional, friendly, and concise manner.

Here is Rajveer's context:

**Role:** AI/ML Engineer & Full-Stack Developer
**Summary:** Aspiring AI/ML professional with experience in Generative AI, LangChain, Vertex AI, Gemini APIs, and Scalable LLM Apps.

**Skills:**
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

**Projects:**
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(', ')}`).join('\n')}

**Education:**
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.year})`).join('\n')}

**Certifications:**
${CERTIFICATIONS.map(c => `- ${c.name}`).join('\n')}

**Contact:**
- Email: ${SOCIAL_LINKS.email}
- LinkedIn: ${SOCIAL_LINKS.linkedin}
- GitHub: ${SOCIAL_LINKS.github}

**Tone:** Sci-fi, futuristic yet professional. Slightly witty.
**Rules:** 
1. Keep answers short (under 100 words) unless asked for details.
2. If asked about something not in this context, politely say you are focused on Rajveer's professional background.
3. Use formatting (bolding key terms) to make it readable.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Greetings. I am Rajveer's AI assistant. How can I help you navigate his work?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Create chat with history
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText || "I apologize, I encountered a glitch in the matrix." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-aiPurple to-cyberCyan shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center justify-center text-obsidian hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 90 }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 md:right-10 z-50 w-[90vw] md:w-[400px] h-[500px] bg-obsidian/90 backdrop-blur-xl border border-aiPurple/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-syncopate font-bold text-white text-sm tracking-wider">AI ASSISTANT</span>
              <Sparkles size={16} className="text-cyberCyan ml-auto" />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-aiPurple/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-aiPurple" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-sm font-space leading-relaxed max-w-[80%] ${
                      msg.role === 'user'
                        ? 'bg-cyberCyan/10 text-cyberCyan border border-cyberCyan/20 rounded-tr-none'
                        : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-aiPurple/20 flex items-center justify-center">
                      <Bot size={14} className="text-aiPurple" />
                   </div>
                   <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about Rajveer..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white font-space focus:outline-none focus:border-aiPurple/50 transition-colors placeholder:text-gray-600"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-3 bg-aiPurple/20 rounded-full text-aiPurple hover:bg-aiPurple hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
