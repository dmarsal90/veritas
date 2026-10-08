import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyVeritas() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section bg-surface" aria-labelledby="why-title">
      <div className="page-container">
        <motion.header
          className="section-header"
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="section-label badge badge-primary inline-block"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.whyVeritas.title}
          </motion.span>
          <motion.h2
            id="why-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.whyVeritas.subtitle}
          </motion.h2>
        </motion.header>
        <motion.p
          className="section-description text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Good pest control starts with reliability, communication and a service plan built around the property rather than a one-size-fits-all approach.
        </motion.p>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          role="list"
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {t.whyVeritas.reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="card glass-card card-volume p-5"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-elevated-hover)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
              <span className="text-text leading-relaxed">{reason}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}