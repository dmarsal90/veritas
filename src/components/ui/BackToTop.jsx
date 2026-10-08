import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  };

  if (!isVisible && reduceMotion) return null;

  return (
    <motion.button
      className="fixed bottom-16 left-6 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-primary text-white rounded-xl shadow-xl transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/30"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>
  );
}