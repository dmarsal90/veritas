import { motion, useMotionValue, useTransform, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { phone, phoneHref } = useContactInfo();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const handleMouseLeave = () => {
    if (reduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const translateX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  return (
    <section className="section bg-background relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary)_0%,_transparent_50%)] opacity-5" aria-hidden="true" />
      
      <div className="page-container relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100dvh-80px)]">
          <div className="hero-content relative z-10">
            <motion.span 
              className="badge badge-primary mb-6 inline-block"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.badge}
            </motion.span>
            
            <motion.h1 
              id="hero-title" 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-text mb-6 text-balance tracking-tight"
              initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.titleNew}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-text-muted leading-relaxed mb-8 max-w-2xl font-medium"
              initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.descriptionNew}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/quote"
                className="btn btn-primary group relative overflow-hidden"
                style={{ minWidth: '200px' }}
              >
                <span className="relative z-10">{t.hero.getQuoteNew}</span>
                <motion.svg 
                  className="w-5 h-5 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  aria-hidden="true"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </motion.svg>
              </Link>
              <a
                href={phoneHref}
                className="btn btn-outline group relative overflow-hidden"
                aria-label={t.hero.callNow}
                style={{ minWidth: '180px' }}
              >
                <motion.svg 
                  className="w-5 h-5 flex-shrink-0 mr-2"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  aria-hidden="true"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </motion.svg>
                <span className="relative z-10">{t.hero.callNow}</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="trust-bar flex flex-wrap items-center gap-6 md:gap-8 text-sm"
              initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-primary font-semibold">
                <motion.svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  aria-hidden="true"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </motion.svg>
                <span>{t.hero.trustBar.reviews}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <motion.svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </motion.svg>
                <span>{t.hero.trustBar.license}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <motion.svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </motion.svg>
                <span>{t.hero.trustBar.sameDay}</span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative" aria-hidden="true">
            <motion.div
              className="card card-featured glass-card card-volume overflow-visible max-w-md mx-auto"
              style={{
                transform: reduceMotion ? undefined : { x: translateX, y: translateY },
                transition: reduceMotion ? undefined : { type: 'spring', stiffness: 100, damping: 20 }
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95, y: 40 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -12px rgba(26, 95, 58, 0.3)' }}
            >
              <div className="relative h-64 md:h-72 bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center justify-center overflow-hidden">
                <motion.svg 
                  className="w-28 h-28 md:w-32 md:h-32 text-white/95 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  viewBox="0 0 300 300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  initial={reduceMotion ? {} : { opacity: 0, rotate: -5, scale: 0.9 }}
                  animate={reduceMotion ? {} : { opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <rect x="20" y="80" width="260" height="180" rx="12" stroke="currentColor" strokeWidth="2" filter="url(#glow)"/>
                  <path d="M60 80 L150 20 L240 80" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="100" y="180" width="100" height="80" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="130" y="210" width="40" height="50" rx="2" fill="currentColor" fillOpacity="0.3"/>
                  <rect x="80" y="190" width="15" height="15" rx="2" fill="currentColor" fillOpacity="0.2"/>
                  <rect x="205" y="190" width="15" height="15" rx="2" fill="currentColor" fillOpacity="0.2"/>
                  
                  <circle cx="150" cy="110" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M150 92v18M132 110h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  
                  <ellipse cx="150" cy="260" rx="120" ry="15" fill="currentColor" fillOpacity="0.1"/>
                </motion.svg>
                
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-light)_0%,_transparent_60%)]"
                  initial={reduceMotion ? {} : { opacity: 0 }}
                  animate={reduceMotion ? {} : { opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
              </div>
              
              <div className="p-6 md:p-8">
                <motion.h3 
                  className="text-lg md:text-xl font-semibold text-text mb-6"
                  initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t.hero.featuredOffers}
                </motion.h3>
                
                <motion.div 
                  className="space-y-4 mb-6"
                  initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <article className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
                    <div className="icon-wrapper flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        <path d="M2 12h20"/>
                        <path d="M12 12h.01"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text">{t.hero.monthlySpiderControl}</h4>
                      <p className="text-lg font-bold text-primary">{t.hero.from35mo}</p>
                      <p className="text-sm text-text-muted">{t.hero.spiderControlDesc}</p>
                    </div>
                  </article>
                  
                  <article className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 group">
                    <div className="icon-wrapper flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        <path d="M12 12v4"/>
                        <path d="M12 12h.01"/>
                        <path d="M8 14c0 1.5.5 2.5 1.5 3.5"/>
                        <path d="M16 14c0 1.5-.5 2.5-1.5 3.5"/>
                        <path d="M12 7v4"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text">{t.hero.germanRoachCleanup}</h4>
                      <p className="text-lg font-bold text-primary">{t.hero.from225}</p>
                      <p className="text-sm text-text-muted">{t.hero.roachCleanupDesc}</p>
                    </div>
                  </article>
                </motion.div>
                
                <motion.Link
                  to="/quote"
                  className="btn btn-primary w-full group relative overflow-hidden"
                  initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.hero.getQuoteNew}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}