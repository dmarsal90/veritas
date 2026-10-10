import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function ServiceAreas() {
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
    <section className="section bg-surface" aria-labelledby="areas-title" id="service-areas">
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
            {t.serviceAreas.title}
          </motion.span>
          <motion.h2
            id="areas-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.serviceAreas.subtitle}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Local residential pest control throughout our primary service area.
          </motion.p>
        </motion.header>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t.serviceAreas.areas.map((area) => (
            <motion.article
              key={area.name}
              className="card glass-card card-volume p-6 lg:p-8 text-center group"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-elevated-hover)' }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={area.link}
                className="block"
                style={{ textDecoration: 'none', color: 'inherit' }}
                aria-label={`View pest control services in ${area.name}`}
              >
                <motion.h3
                  className="text-xl font-bold text-text mb-2"
                  initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ color: 'var(--color-primary)', scale: 1.02 }}
                >
                  {area.name}
                </motion.h3>
                <motion.p
                  className="text-text-muted leading-relaxed"
                  initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {area.description}
                </motion.p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}