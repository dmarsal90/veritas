import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ServicePageLayout, FAQSection, QuoteFormCTA, SpiderCityLinks, PricingBox, ChecklistBox, Seo } from '../shared';

const whyFollowUpIcons = [
  (
    <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg key="clipboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
];

export default function RoachCleanupPage() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const copy = t.pages.roachCleanup;

  const hero = {
    titleId: 'roach-title',
    badge: copy.badge,
    title: copy.title,
    subtitle: copy.subtitle,
    cta: {
      primary: { text: copy.ctaPrimary, link: '/request-service' },
      secondary: { text: t.common.callCta, link: 'tel:2392270624' },
    },
  };

  return (
    <ServicePageLayout hero={hero} trustBadges={true}>
      <Seo title={copy.title} description={copy.subtitle} path="/german-roach-cleanup-fort-myers" />

      <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold text-text mb-4">{copy.introTitle}</h2>
        <p className="text-text-muted leading-relaxed mb-8">{copy.introBody}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.whyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex gap-4 p-4 sm:p-6 bg-background rounded-xl border border-border"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center" aria-hidden="true">
                {whyFollowUpIcons[index]}
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-2">{item.title}</h4>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PricingBox
        variant="roach"
        price="$225"
        period=""
        description={t.pricing.roachDescription}
        buttonText={t.common.getMyQuote}
        buttonLink="/request-service"
        className="mb-16 lg:mb-20 max-w-md mx-auto"
      />

      <ChecklistBox
        variant="roach"
        className="mb-16 lg:mb-20 max-w-2xl mx-auto"
      />

      <FAQSection
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        faqs={copy.faq.map((item) => ({ question: item.q, answer: item.a }))}
        className="mb-16 lg:mb-20"
      />

      <QuoteFormCTA className="mb-16 lg:mb-20" />

      <SpiderCityLinks className="mb-16 lg:mb-20" />
    </ServicePageLayout>
  );
}
