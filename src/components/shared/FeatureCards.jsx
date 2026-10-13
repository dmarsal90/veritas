import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const hoaFeatures = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    titleKey: 'scheduledService',
    descKey: 'scheduledServiceDesc'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    titleKey: 'serviceDocumentation',
    descKey: 'serviceDocumentationDesc'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <ellipse cx="8" cy="16" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
        <ellipse cx="16" cy="16" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="6" cy="14" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="14" r="1.5" fill="currentColor"/>
        <path d="M6 20 L4 24 M18 20 L20 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M8 16 Q6 19 4 22 M16 16 Q18 19 20 22" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="3 2"/>
      </svg>
    ),
    titleKey: 'rodentStations',
    descKey: 'rodentStationsDesc'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    titleKey: 'flexibleAreas',
    descKey: 'flexibleAreasDesc'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    titleKey: 'definedCallbacks',
    descKey: 'definedCallbacksDesc'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    titleKey: 'clearCommunication',
    descKey: 'clearCommunicationDesc'
  },
];

export default function FeatureCards({ className = '', title, subtitle }) {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={`py-16 md:py-24 ${className}`} aria-labelledby="features-title">
      <div className="w-full max-w-[85%] mx-auto px-6">
        {(title || subtitle) && (
          <motion.header
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {title && (
              <motion.h2
                id="features-title"
                className="text-3xl md:text-4xl font-bold leading-tight text-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-lg leading-relaxed text-text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.header>
        )}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {hoaFeatures.map((feature, _index) => (
            <motion.div
              key={feature.titleKey}
              className="bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent text-primary mb-5 mx-auto" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text mb-3">{t.hoa[feature.titleKey] || feature.titleKey}</h3>
              <p className="text-text-muted leading-relaxed">{t.hoa[feature.descKey] || feature.descKey}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}