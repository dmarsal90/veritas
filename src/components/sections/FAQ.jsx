import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section bg-background" aria-labelledby="faq-title">
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
            {t.faq.title}
          </motion.span>
          <motion.h2
            id="faq-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.faq.subtitle || 'Frequently Asked Questions'}
          </motion.h2>
        </motion.header>
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t.faq.questions.map((faq, index) => (
            <motion.details
              key={index}
              className="group card glass-card card-volume overflow-hidden"
              open={openIndex === index}
              variants={itemVariants}
            >
              <summary
                className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(index);
                }}
              >
                <motion.span
                  className="text-base lg:text-lg font-semibold text-text pr-8"
                  initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                  animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {faq.q}
                </motion.span>
                <motion.svg
                  className="w-6 h-6 text-text-muted flex-shrink-0 transition-transform duration-200"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </summary>
              <motion.div
                className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-border bg-background/50"
                initial={false}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.p
                  className="text-text-muted leading-relaxed"
                  initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {faq.a}
                </motion.p>
              </motion.div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}