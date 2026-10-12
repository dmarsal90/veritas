import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
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

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <rect x="3" y="9" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 9v6M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: t.services.generalPestControl || 'General Pest Control',
      description: t.services.generalPestControlDesc || 'Routine residential protection with interior/exterior options for common household pest concerns, with recurring service available.',
      link: '/services',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="12" cy="12" rx="10" ry="8" stroke="currentColor" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="6" ry="4" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
          <path d="M8 14 Q10 16 12 16 Q14 16 16 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.monthlySpiderControl || 'Monthly Spider Control',
      description: t.services.monthlySpiderControlDesc || 'Starting at $35/month. Exterior treatment plus removal of accessible spider webs on qualifying residential properties.',
      link: '/spider-control',
      price: 'From $35/mo',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="12" cy="14" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="12" cy="10" rx="5" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
          <path d="M8 12 Q6 8 4 6 M16 12 Q18 8 20 6 M8 16 Q6 19 4 22 M16 16 Q18 19 20 22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M10 20 L8 22 M14 20 L16 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.germanRoachCleanup || 'German Roach Clean-Up',
      description: t.services.germanRoachCleanupDesc || '4 visits from $225. Focused four-visit program for qualifying residential properties with German cockroach activity.',
      link: '/roach-cleanup',
      price: 'From $225',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="8" cy="16" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="16" cy="16" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <circle cx="6" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="14" r="1.5" fill="currentColor"/>
          <path d="M6 20 L4 24 M18 20 L20 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M8 16 Q6 19 4 22 M16 16 Q18 19 20 22" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="3 2"/>
        </svg>
      ),
      title: t.services.rodentControl || 'Rodent Control',
      description: t.services.rodentControlDesc || 'Inspection + targeted plan. Rodent inspection, monitoring and control recommendations based on conditions found.',
      link: '/rodent-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="12" cy="14" rx="8" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="12" cy="10" rx="4" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
          <circle cx="10" cy="9" r="1" fill="currentColor"/>
          <circle cx="14" cy="9" r="1" fill="currentColor"/>
          <path d="M6 12 L6 18 M18 12 L18 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M10 14 L8 16 M14 14 L16 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.bedBugTreatment || 'Bed Bug Treatment',
      description: t.services.bedBugTreatmentDesc || 'Property-specific treatment. Inspection and treatment recommendations based on confirmed activity and property conditions.',
      link: '/bed-bug-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="6" cy="12" rx="4" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="18" cy="12" rx="4" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <circle cx="4" cy="11" r="0.8" fill="currentColor"/>
          <circle cx="20" cy="11" r="0.8" fill="currentColor"/>
          <path d="M3 8 L0 4 M21 8 L24 4 M3 16 L0 20 M21 16 L24 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M5 12 L7 14 M17 12 L19 14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.fleaTickTreatment || 'Flea & Tick Treatment',
      description: t.services.fleaTickTreatmentDesc || 'Targeted treatment. Focused service for flea and tick concerns, with preparation guidance when applicable.',
      link: '/flea-tick-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="12" cy="16" rx="3" ry="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="12" cy="10" rx="2" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15"/>
          <circle cx="11" cy="9" r="0.7" fill="currentColor"/>
          <circle cx="13" cy="9" r="0.7" fill="currentColor"/>
          <path d="M8 16 L4 10 M16 16 L20 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="8" cy="14" rx="6" ry="4" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.3" strokeDasharray="3 2"/>
          <ellipse cx="16" cy="14" rx="6" ry="4" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.3" strokeDasharray="3 2"/>
        </svg>
      ),
      title: t.services.mosquitoControl || 'Mosquito Control',
      description: t.services.mosquitoControlDesc || 'Outdoor mosquito service. Treatments focused on outdoor resting and breeding areas based on property conditions.',
      link: '/mosquito-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <rect x="4" y="10" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <rect x="11" y="10" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <rect x="18" y="10" width="2" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
          <path d="M4 10 L7 4 Q12 -2 17 4 L20 10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
          <ellipse cx="12" cy="4" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
        </svg>
      ),
      title: t.services.hoaPropertyManagement || 'HOA & Property Management',
      description: t.services.hoaPropertyManagementDesc || 'Custom service plans. Dependable scheduling, communication, common-area service and documentation for residential communities.',
      link: '/communities',
      featured: false,
    },
  ];

  return (
    <section className="section bg-surface" aria-labelledby="services-title">
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
            {t.services.title}
          </motion.span>
          <motion.h2
            id="services-title"
            className="section-title"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.services.subtitle}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Choose a focused service or tell us what you are seeing and we can discuss the appropriate option for your property.
          </motion.p>
        </motion.header>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ minWidth: 0 }}
        >
          {services.map((service) => (
<motion.article
               key={service.link}
               className="card glass-card card-volume group relative overflow-hidden min-w-0"
               variants={itemVariants}
               whileHover={{ y: -8, boxShadow: 'var(--shadow-elevated-hover)' }}
               transition={{ duration: 0.3 }}
             >
              <div className="p-6">
                <motion.div
                  className="icon-wrapper mb-5"
                  aria-hidden="true"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
                {service.price && (
                  <p className="text-lg font-bold text-primary mb-3">{service.price}</p>
                )}
                <p className="text-text-muted leading-relaxed mb-6 flex-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="link-arrow group relative overflow-hidden"
                  aria-label={`Learn more about ${service.title}`}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {t.services.learnMore || 'Learn more'} {service.title}
                  <motion.svg
                    className="w-5 h-5 flex-shrink-0"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}