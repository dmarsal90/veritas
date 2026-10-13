import { motion, useReducedMotion } from 'motion/react';

export default function FAQSection({ 
  className = '', 
  title, 
  subtitle, 
  faqs = [],
  variant = 'default' 
}) {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  if (variant === 'compact') {
    return (
      <div className={className}>
        <ul className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <motion.li
              key={index}
              className="bg-surface rounded-xl border border-border overflow-hidden"
              variants={itemVariants}
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-text pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 flex-shrink-0 text-primary group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`} aria-labelledby="faq-title">
      <div className="w-full max-w-[85%] mx-auto px-6">
        <motion.header
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {title && (
            <motion.h2
              id="faq-title"
              className="text-3xl md:text-4xl font-bold leading-tight text-text mb-4"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className="text-lg leading-relaxed text-text-muted"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.header>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ul className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <motion.li
                key={index}
                className="bg-surface rounded-2xl border border-border overflow-hidden"
                variants={itemVariants}
              >
                <details className="group">
                  <summary className="flex items-start justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg sm:text-xl font-semibold text-text pr-4">{faq.question}</span>
                    <svg className="w-6 h-6 flex-shrink-0 text-primary group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}