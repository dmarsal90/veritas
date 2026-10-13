import { useLanguage } from '../../../context/LanguageContext';
import { ServicePageLayout, ServiceDetailCard, PricingBox, FAQSection, QuoteFormCTA, SpiderCityLinks, ChecklistBox, Seo } from '../../shared';

const detailIcons = [
  (
    <svg key="compass" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <path d="M21 12a9 9 0 1 1-18 0" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
    </svg>
  ),
  (
    <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8M12 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

/**
 * Shared template for the "monthly spider control" pages (Fort Myers, Bonita
 * Springs, Naples). Identical structure; only hero + FAQ[0] + requestItems[0]
 * differ per city.
 */
export default function SpiderControlCityTemplate({ cityKey, path, titleId }) {
  const { t } = useLanguage();
  const base = t.pages.spiderControlCity;
  const city = base[cityKey];

  const hero = {
    titleId,
    badge: city.badge,
    title: city.title,
    subtitle: base.subtitle,
    cta: {
      primary: { text: base.ctaPrimary, link: '/request-service' },
      secondary: { text: t.common.callCta, link: 'tel:2392270624' },
    },
  };

  const requestItems = [city.requestItemFirst, ...base.requestItemsCommon];
  const faqs = [city.faqFirst, ...base.faqCommon].map((item) => ({ question: item.q, answer: item.a }));

  return (
    <ServicePageLayout hero={hero} trustBadges={true}>
      <Seo title={city.title} description={base.subtitle} path={path} />

      <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold text-text mb-4">{base.introTitle}</h2>
        <p className="text-text-muted leading-relaxed">{base.introBody}</p>
      </div>

      <section className="py-16 md:py-24" aria-labelledby={`${titleId}-details`}>
        <div className="w-full max-w-[85%] mx-auto px-6">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 id={`${titleId}-details`} className="text-3xl md:text-4xl font-bold leading-tight text-text mb-4">
              {base.detailsTitle}
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">{base.detailsSubtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {base.detailCards.map((card, index) => (
              <ServiceDetailCard key={card.title} icon={detailIcons[index]} title={card.title} description={card.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      <PricingBox
        variant="spider"
        price="$35"
        period="/month"
        description={t.pricing.spiderDescription}
        buttonText={t.common.getMyQuote}
        buttonLink="/request-service"
        className="mb-16 lg:mb-20 max-w-md mx-auto"
      />

      <ChecklistBox
        title={base.requestItemsTitle}
        variant="default"
        items={requestItems}
        className="mb-16 lg:mb-20 max-w-2xl mx-auto"
      />

      <FAQSection
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        faqs={faqs}
        className="mb-16 lg:mb-20"
      />

      <QuoteFormCTA className="mb-16 lg:mb-20" />

      <SpiderCityLinks className="mb-16 lg:mb-20" />

      <QuoteFormCTA
        variant="compact"
        buttonText={base.ctaPrimary}
        linkText="/request-service"
        className="mb-16 lg:mb-20"
      />
    </ServicePageLayout>
  );
}
