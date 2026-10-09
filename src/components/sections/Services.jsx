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
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-12 h-12">
          <rect x="15" y="30" width="70" height="55" rx="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 30 L50 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 50 L75 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round"/>
          <circle cx="40" cy="65" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="65" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M40 65 L40 75 M60 65 L60 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="50" cy="88" rx="20" ry="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: t.services.generalPestControl || 'General Pest Control',
      description: t.services.generalPestControlDesc || 'Routine residential protection with interior/exterior options for common household pest concerns, with recurring service available.',
      link: '/services',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <g transform="translate(50, 50)">
            <line x1="0" y1="-40" x2="0" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <line x1="-40" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <line x1="-30" y1="-30" x2="30" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <line x1="30" y1="-30" x2="-30" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
            <ellipse cx="0" cy="0" rx="14" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
            <ellipse cx="0" cy="0" rx="24" ry="24" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
            <ellipse cx="0" cy="0" rx="34" ry="34" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.2"/>
            <ellipse cx="0" cy="0" rx="10" ry="7" fill="currentColor" fillOpacity="0.9"/>
            <ellipse cx="0" cy="-4" rx="6" ry="4" fill="currentColor" fillOpacity="0.9"/>
            <circle cx="-7" cy="-3" r="1.5" fill="currentColor"/>
            <circle cx="7" cy="-3" r="1.5" fill="currentColor"/>
            <path d="M-16 -10 Q-11 -6 -6 -3 M-19 -5 Q-13 -3 -7 1 M-21 0 Q-13 2 -7 5 M-22 5 Q-13 5 -7 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M16 -10 Q11 -6 6 -3 M19 -5 Q13 -3 7 1 M21 0 Q13 2 7 5 M22 5 Q13 5 7 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </g>
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
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="50" cy="50" rx="30" ry="18" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
          <ellipse cx="50" cy="50" rx="26" ry="15" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
          <ellipse cx="50" cy="40" rx="14" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
          <ellipse cx="50" cy="36" rx="10" ry="7" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
          <path d="M36 28 Q26 20 18 16 M64 28 Q74 20 82 16 M36 32 Q24 15 14 8 M64 32 Q76 15 86 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M28 42 Q22 36 18 28 M72 42 Q78 36 82 28 M26 50 Q18 46 12 40 M74 50 Q82 46 88 40 M24 56 Q16 56 8 56 M76 56 Q84 56 92 56 M24 62 Q16 68 8 72 M76 62 Q84 68 92 72" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M20 48 Q14 50 8 56 M80 48 Q86 50 92 56" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <ellipse cx="50" cy="68" rx="16" ry="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
          <path d="M34 68 Q30 74 28 80 M66 68 Q70 74 72 80" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
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
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <g transform="translate(50, 55) scale(0.8)">
            <ellipse cx="0" cy="5" rx="18" ry="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
            <ellipse cx="-20" cy="-12" rx="13" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
            <ellipse cx="-28" cy="-18" rx="6" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
            <circle cx="-32" cy="-19" r="2" fill="currentColor"/>
            <ellipse cx="-16" cy="-20" rx="6" ry="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.5"/>
            <ellipse cx="18" cy="-10" rx="10" ry="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
            <path d="M-35 -10 Q-42 -3 -45 6 Q-45 16 -35 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M-6 25 Q-12 35 -6 45 M6 25 Q12 35 6 45" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M-12 -12 Q-18 -20 -22 -25 M12 -12 Q18 -20 22 -25" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="3 2"/>
          </g>
        </svg>
      ),
      title: t.services.rodentControl || 'Rodent Control',
      description: t.services.rodentControlDesc || 'Inspection + targeted plan. Rodent inspection, monitoring and control recommendations based on conditions found.',
      link: '/rodent-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="50" cy="50" rx="24" ry="17" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
          <ellipse cx="50" cy="50" rx="20" ry="14" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
          <ellipse cx="50" cy="50" rx="16" ry="11" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.2"/>
          <ellipse cx="50" cy="50" rx="12" ry="8" stroke="currentColor" strokeWidth="0.5" fill="none" strokeOpacity="0.15"/>
          <ellipse cx="50" cy="36" rx="9" ry="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
          <circle cx="46" cy="34" r="1.5" fill="currentColor"/>
          <circle cx="54" cy="34" r="1.5" fill="currentColor"/>
          <path d="M42 28 Q34 22 28 18 M58 28 Q66 22 72 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M30 40 Q22 36 16 30 M70 40 Q78 36 84 30 M26 48 Q16 48 10 48 M74 48 Q84 48 90 48 M26 56 Q16 60 10 64 M74 56 Q84 60 90 64 M30 64 Q22 70 16 76 M70 64 Q78 70 84 76" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M44 50 L38 46 M56 50 L62 46" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.bedBugTreatment || 'Bed Bug Treatment',
      description: t.services.bedBugTreatmentDesc || 'Property-specific treatment. Inspection and treatment recommendations based on confirmed activity and property conditions.',
      link: '/bed-bug-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <g transform="translate(22, 35)">
            <ellipse cx="0" cy="0" rx="11" ry="7" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
            <ellipse cx="-7" cy="-6" rx="4" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
            <circle cx="-9" cy="-7" r="1.2" fill="currentColor"/>
            <path d="M-14 -10 Q-20 -18 -25 -24 M-14 10 Q-20 18 -25 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M-2 12 Q-7 20 -10 26 M2 12 Q7 20 10 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M-2 4 Q-6 10 -10 16 M2 4 Q6 10 10 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M14 2 Q18 8 20 12 M14 -2 Q18 -8 20 -12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </g>
          <g transform="translate(78, 65)">
            <ellipse cx="0" cy="0" rx="13" ry="11" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
            <ellipse cx="0" cy="0" rx="10" ry="8" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
            <ellipse cx="-5" cy="-4" rx="3" ry="2.5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12"/>
            <circle cx="-6" cy="-5" r="1" fill="currentColor"/>
            <path d="M-12 -7 Q-18 -12 -22 -18 M-12 7 Q-18 12 -22 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M-3 -12 Q-6 -20 -8 -26 M3 -12 Q6 -20 8 -26 M-5 12 Q-7 20 -9 26 M5 12 Q7 20 9 26 M12 7 Q16 12 20 18 M12 -7 Q16 -12 20 -18" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </g>
        </svg>
      ),
      title: t.services.fleaTickTreatment || 'Flea & Tick Treatment',
      description: t.services.fleaTickTreatmentDesc || 'Targeted treatment. Focused service for flea and tick concerns, with preparation guidance when applicable.',
      link: '/flea-tick-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <ellipse cx="50" cy="52" rx="7" ry="24" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12"/>
          <ellipse cx="50" cy="52" rx="5" ry="20" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
          <ellipse cx="50" cy="28" rx="6" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
          <circle cx="47" cy="27" r="1.2" fill="currentColor"/>
          <circle cx="53" cy="27" r="1.2" fill="currentColor"/>
          <path d="M50 33 L44 16 M50 33 L56 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M28 34 Q18 28 8 22 M72 34 Q82 28 92 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <ellipse cx="25" cy="40" rx="22" ry="15" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.4" strokeDasharray="5 3"/>
          <ellipse cx="75" cy="40" rx="22" ry="15" stroke="currentColor" strokeWidth="1.2" fill="none" strokeOpacity="0.4" strokeDasharray="5 3"/>
          <path d="M32 62 Q26 68 22 74 M68 62 Q74 68 78 74" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M42 62 Q36 68 30 74 M58 62 Q64 68 70 74" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M50 76 L50 88" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t.services.mosquitoControl || 'Mosquito Control',
      description: t.services.mosquitoControlDesc || 'Outdoor mosquito service. Treatments focused on outdoor resting and breeding areas based on property conditions.',
      link: '/mosquito-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-12 h-12">
          <rect x="18" y="42" width="26" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08"/>
          <rect x="21" y="47" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="33" y="47" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="21" y="62" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="33" y="62" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="21" y="77" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="33" y="77" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M18 42 L18 24 Q31 12 44 24 L44 42" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06"/>
          <rect x="44" y="42" width="26" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08"/>
          <rect x="47" y="47" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="59" y="47" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="47" y="62" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="59" y="62" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="47" y="77" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="59" y="77" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M44 42 L44 24 Q57 12 70 24 L70 42" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06"/>
          <rect x="70" y="42" width="12" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
          <rect x="72" y="50" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="78" y="50" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="72" y="60" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="78" y="60" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
          <ellipse cx="50" cy="18" rx="22" ry="13" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08"/>
          <ellipse cx="50" cy="18" rx="17" ry="9" stroke="currentColor" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
          <path d="M50 8 L50 14 M42 12 L58 12 M44 16 L56 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
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
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {t.services.learnMore || 'Learn more'}
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