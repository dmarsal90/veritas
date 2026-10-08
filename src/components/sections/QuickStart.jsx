import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function QuickStart() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section className="section bg-background" aria-labelledby="quickstart-title">
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
            {t.quickStart.title}
          </motion.span>
          <motion.h2
            id="quickstart-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.quickStart.subtitle || 'Tell Us What You\'re Seeing'}
          </motion.h2>
        </motion.header>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="section-description mb-8"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.quickStart.description}
          </motion.p>
          <motion.Link
            to="/quote"
            className="btn btn-primary btn-magnetic group relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-elevated-hover)' }}
            whileTap={{ scale: 0.98 }}
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative z-10">{t.quickStart.button}</span>
            <motion.svg
              className="w-5 h-5 ml-2 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.Link>
        </motion.div>
      </div>
    </section>
  );
}