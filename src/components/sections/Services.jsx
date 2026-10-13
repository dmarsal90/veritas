import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ServiceCard, 
  ProcessSteps, 
  ServiceAreaLinks, 
  FAQSection, 
  QuoteFormCTA, 
  SpiderCityLinks 
} from '../shared';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <path d="M12 2.5 L20 5.5 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V5.5 Z" strokeLinejoin="round" />
        <path d="M8.5 12 L10.5 14 L15.5 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'General Pest Control',
    description: 'Routine residential protection with interior/exterior options for common household pest concerns, with recurring service available.',
    link: '/pest-control-fort-myers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13.5" rx="3.2" ry="4.2" />
        <circle cx="12" cy="7.5" r="2.1" />
        <path d="M9.3 11 L4.2 8.3 M9 12.8 L3 12.3 M9 14.6 L4 17.3 M9.3 16.4 L5 20.2" strokeLinecap="round" />
        <path d="M14.7 11 L19.8 8.3 M15 12.8 L21 12.3 M15 14.6 L20 17.3 M14.7 16.4 L19 20.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Monthly Spider Control',
    description: 'Starting at $35/month. Exterior treatment plus removal of accessible spider webs on qualifying residential properties.',
    link: '/spider-control-fort-myers',
    price: 'From $35/mo',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13" rx="5.5" ry="7.2" />
        <line x1="12" y1="6.5" x2="12" y2="19.5" strokeOpacity="0.4" />
        <path d="M9.8 6.5 L7.8 3 M14.2 6.5 L16.2 3" strokeLinecap="round" />
        <path d="M7 9.5 L2.3 7.5 M7 13 L2 13 M7 16.5 L2.3 19" strokeLinecap="round" />
        <path d="M17 9.5 L21.7 7.5 M17 13 L22 13 M17 16.5 L21.7 19" strokeLinecap="round" />
      </svg>
    ),
    title: 'German Roach Clean-Up',
    description: '4 visits from $225. Focused four-visit program for qualifying residential properties with German cockroach activity.',
    link: '/german-roach-cleanup-fort-myers',
    price: 'From $225',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <circle cx="6.8" cy="6.3" r="3" />
        <circle cx="17.2" cy="6.3" r="3" />
        <circle cx="12" cy="13.2" r="7" />
        <circle cx="9.3" cy="11.8" r="0.7" fill="currentColor" />
        <circle cx="14.7" cy="11.8" r="0.7" fill="currentColor" />
        <path d="M12 14.6 L10.8 16.1 M12 14.6 L13.2 16.1" strokeLinecap="round" />
        <path d="M5.3 15.2 L1.5 14.2 M5.6 16.8 L1.8 17.3 M5.3 18.4 L2 20" strokeLinecap="round" />
        <path d="M18.7 15.2 L22.5 14.2 M18.4 16.8 L22.2 17.3 M18.7 18.4 L22 20" strokeLinecap="round" />
      </svg>
    ),
    title: 'Rodent Control',
    description: 'Inspection + targeted plan. Rodent inspection, monitoring and control recommendations based on conditions found.',
    link: '/rodent-control-fort-myers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13" rx="7.5" ry="5.4" />
        <circle cx="12" cy="6.6" r="1.6" />
        <path d="M10.8 5.2 L9.6 3.5 M13.2 5.2 L14.4 3.5" strokeLinecap="round" />
        <path d="M6.5 10.5 L2.5 9.3 M5.6 13 L1.8 13 M6.5 15.8 L2.5 17.3" strokeLinecap="round" />
        <path d="M17.5 10.5 L21.5 9.3 M18.4 13 L22.2 13 M17.5 15.8 L21.5 17.3" strokeLinecap="round" />
        <path d="M8 9.5 L8 16.5 M12 8.7 L12 17.3 M16 9.5 L16 16.5" strokeOpacity="0.35" />
      </svg>
    ),
    title: 'Bed Bug Treatment',
    description: 'Property-specific treatment. Inspection and treatment recommendations based on confirmed activity and property conditions.',
    link: '/bed-bug-treatment-fort-myers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <circle cx="12" cy="14" r="4.3" />
        <circle cx="12" cy="8.2" r="1.3" />
        <path d="M8.6 11.5 L5.3 10.3 M8.2 14 L4.6 14 M8.6 16.5 L5.3 17.7" strokeLinecap="round" />
        <path d="M15.4 11.5 L18.7 10.3 M15.8 14 L19.4 14 M15.4 16.5 L18.7 17.7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Flea & Tick Treatment',
    description: 'Targeted treatment. Focused service for flea and tick concerns, with preparation guidance when applicable.',
    link: '/flea-tick-treatment-fort-myers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <path d="M12 2 L12 5.5" strokeLinecap="round" />
        <ellipse cx="12" cy="8" rx="1.7" ry="2.2" />
        <path d="M12 10.2 L12 16.5" strokeLinecap="round" />
        <ellipse cx="6.8" cy="9.6" rx="4.6" ry="2" transform="rotate(-24 6.8 9.6)" strokeOpacity="0.55" />
        <ellipse cx="17.2" cy="9.6" rx="4.6" ry="2" transform="rotate(24 17.2 9.6)" strokeOpacity="0.55" />
        <path d="M10 13 L4.8 11.6 M10 15.2 L4.3 16.2 M10 17.3 L5.8 20" strokeLinecap="round" />
        <path d="M14 13 L19.2 11.6 M14 15.2 L19.7 16.2 M14 17.3 L18.2 20" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mosquito Control',
    description: 'Outdoor mosquito service. Treatments focused on outdoor resting and breeding areas based on property conditions.',
    link: '/mosquito-control-fort-myers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <rect x="3" y="10.5" width="7" height="10.5" rx="0.6" />
        <rect x="14" y="5.5" width="7" height="15.5" rx="0.6" />
        <path d="M5.3 13.3h2.4M5.3 16.1h2.4M5.3 18.9h2.4" strokeLinecap="round" />
        <path d="M16.3 8.3h2.4M16.3 11.1h2.4M16.3 13.9h2.4M16.3 16.7h2.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'HOA & Property Management',
    description: 'Custom service plans. Dependable scheduling, communication, common-area service and documentation for residential communities.',
    link: '/hoa-property-management-pest-control',
  },
];

const faqs = [
  {
    question: 'What pest control services do you offer in Fort Myers?',
    answer: 'We offer general pest control, monthly spider control, German roach clean-up, rodent control, bed bug treatment, flea & tick treatment, mosquito control, and HOA/property management services.',
  },
  {
    question: 'How much does monthly spider control cost?',
    answer: 'Monthly exterior spider control starts at $35 per month for qualifying residential properties. This includes exterior treatment and accessible web removal.',
  },
  {
    question: 'Do you offer German roach treatment?',
    answer: 'Yes, our German Roach Clean-Up is a structured 4-visit program starting at $225 for qualifying residential properties. Final pricing depends on infestation level and property conditions.',
  },
  {
    question: 'Do you provide recurring pest control?',
    answer: 'Yes. Routine residential pest-control options are available, including recurring service based on the property and pest concerns.',
  },
];

export default function Services() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="section bg-surface" aria-labelledby="services-title">
      <div className="page-container">
        <motion.header
          className="section-header text-center max-w-3xl mx-auto mb-10 lg:mb-16"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20"
          variants={containerVariants}
          initial={reduceMotion ? {} : { opacity: 0 }}
          whileInView={reduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ minWidth: 0 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.link} service={service} />
          ))}
        </motion.div>

        <div className="prose prose-lg max-w-3xl mx-auto text-text-muted leading-relaxed mb-16 lg:mb-20">
          <h2 className="text-2xl font-bold text-text mb-4">A Practical Approach to Pest Control</h2>
          <p className="mb-4">
            Florida's warm climate can make pest activity a year-round concern. Veritas HomeServices LLC provides residential pest control in Fort Myers with service recommendations based on the property, pest activity and type of protection needed.
          </p>
        </div>

        <ProcessSteps 
          title={t.process.title} 
          subtitle={t.process.subtitle} 
        />

        <ServiceAreaLinks 
          title="Primary service areas"
          variant="default"
          className="my-16 lg:my-20"
        />

        <FAQSection
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          faqs={faqs}
        />

        <QuoteFormCTA 
          className="my-16 lg:my-20"
        />

        <SpiderCityLinks 
          title="Spider service by city"
          className="my-16 lg:my-20"
        />
      </div>
    </section>
  );
}