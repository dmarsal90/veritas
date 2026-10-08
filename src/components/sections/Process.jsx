import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section bg-surface" aria-labelledby="process-title">
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
            {t.process.title}
          </motion.span>
          <motion.h2
            id="process-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.process.subtitle || 'Getting Started Is Easy'}
          </motion.h2>
        </motion.header>
        <motion.ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-4"
          role="list"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t.process.steps.map((step, index) => (
            <motion.li
              key={index}
              className="card glass-card card-volume p-6 relative group"
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-elevated-hover)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                aria-hidden="true"
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {index + 1}
              </motion.span>
              <motion.h3
                className="text-lg font-semibold text-text mb-2"
                initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-text-muted leading-relaxed"
                initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {step.description}
              </motion.p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}