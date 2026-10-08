import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function HOA() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section className="section bg-background" aria-labelledby="hoa-title">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            className="reveal-section"
            initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="badge badge-primary mb-4 inline-block"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hoa.badge || 'HOAs & PROPERTY MANAGERS'}
            </motion.span>
            <motion.h2
              id="hoa-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text mb-4 text-balance"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hoa.title}
            </motion.h2>
            <motion.p
              className="text-lg text-text-muted leading-relaxed mb-8"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hoa.description || 'Flexible service plans can include scheduled pest prevention, common-area treatment, rodent bait-station monitoring, documented recommendations and callback terms defined by agreement.'}
            </motion.p>
            <motion.Link
              to="/communities"
              className="btn btn-primary group relative overflow-hidden"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.hoa.cta || 'Community & Property Management Services'}</span>
              <motion.svg
                className="w-5 h-5 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.Link>
          </motion.div>

          <motion.div
            className="reveal-section"
            initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-t-2xl overflow-hidden bg-primary text-white p-6 lg:p-8 card-volume"
              style={{
                boxShadow: `
                  4px 4px 0 0 var(--color-primary-dark),
                  8px 8px 0 -1px var(--color-primary-dark),
                  0 30px 60px -12px rgba(26, 95, 58, 0.4)
                `
              }}
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95, y: 40 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01, boxShadow: `
                5px 5px 0 0 var(--color-primary-dark),
                10px 10px 0 -1px var(--color-primary-dark),
                0 40px 80px -16px rgba(26, 95, 58, 0.5)
              ` }}
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-light)_0%,_transparent_60%)]"
                initial={reduceMotion ? {} : { opacity: 0 }}
                animate={reduceMotion ? {} : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_transparent_50%,_rgba(255,255,255,0.03)_100%)]"
                aria-hidden="true"
              />
              <motion.h3
                className="text-xl font-semibold text-white mb-6 relative z-10"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.hoa.cardTitle || 'Built for property operations'}
              </motion.h3>
              <motion.ul
                className="space-y-4 relative z-10"
                role="list"
                initial={reduceMotion ? {} : { opacity: 0 }}
                animate={reduceMotion ? {} : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.hoa.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.div
                      className="w-6 h-6 flex-shrink-0 mt-0.5 flex items-center justify-center"
                      initial={reduceMotion ? {} : { scale: 0, rotate: -180 }}
                      animate={reduceMotion ? {} : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.08 }}
                    >
                      <svg className="w-5 h-5 text-white" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                    <motion.span
                      className="text-white leading-relaxed"
                      initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                      animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}