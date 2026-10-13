import { motion, useReducedMotion } from 'motion/react';
import TrustBadges from './TrustBadges';

export default function ServicePageLayout({
  children,
  hero,
  trustBadges = true,
  className = ''
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`py-16 md:py-20 overflow-x-hidden bg-surface ${className}`} aria-labelledby={hero?.titleId || 'service-title'}>
      <div className="w-full max-w-[85%] mx-auto px-6">
        {hero && (
          <motion.header
            className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
            initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.badge && (
              <motion.span
                className="inline-flex items-center px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {hero.badge}
              </motion.span>
            )}
            <motion.h1
              id={hero.titleId || 'service-title'}
              className="text-4xl md:text-5xl font-bold leading-tight text-text mb-4"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.title}
            </motion.h1>
            {hero.subtitle && (
              <motion.p
                className="text-lg leading-relaxed text-text-muted"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {hero.subtitle}
              </motion.p>
            )}
            {trustBadges && (
              <motion.div
                className="mt-8"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <TrustBadges />
              </motion.div>
            )}
            {hero.cta && (
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {hero.cta.primary && (
                  <a
                    href={hero.cta.primary.link}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 w-full sm:w-auto transition-all duration-200"
                  >
                    {hero.cta.primary.text}
                  </a>
                )}
                {hero.cta.secondary && (
                  <a
                    href={hero.cta.secondary.link}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-amber-600 text-gray-900 shadow-sm hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 w-full sm:w-auto transition-all duration-200"
                  >
                    {hero.cta.secondary.text}
                  </a>
                )}
              </motion.div>
            )}
          </motion.header>
        )}
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
