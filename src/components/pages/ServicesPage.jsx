import { useLanguage } from '../../context/LanguageContext';
import { SERVICE_CATALOG } from '../../constants/services';
import { ServicePageLayout, ServiceCard, ServiceAreaLinks, FAQSection, QuoteFormCTA, SpiderCityLinks, ProcessSteps, Seo } from '../shared';

export default function ServicesPage() {
  const { t } = useLanguage();
  const copy = t.pages.services;

  const hero = {
    titleId: 'services-title',
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
      <Seo title={copy.title} description={copy.subtitle} path="/pest-control-fort-myers" />

      <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold text-text mb-4">{copy.introTitle}</h2>
        <p className="text-text-muted leading-relaxed">{copy.introBody}</p>
      </div>

      <section className="py-16 md:py-24" aria-labelledby="services-grid-title">
        <div className="w-full max-w-[85%] mx-auto px-6">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 id="services-grid-title" className="text-3xl md:text-4xl font-bold leading-tight text-text mb-4">
              {copy.gridTitle}
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">{copy.gridSubtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATALOG.map((service, index) => (
              <ServiceCard
                key={service.key}
                service={{
                  icon: service.icon,
                  title: t.services[service.key],
                  description: t.services[`${service.key}Desc`],
                  link: service.link,
                  price: service.priceKey ? t.hero[service.priceKey] : undefined,
                }}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        title={copy.processTitle}
        subtitle={copy.processSubtitle}
        className="mb-16 lg:mb-20"
      />

      <ServiceAreaLinks
        title={copy.areasTitle}
        variant="default"
        className="mb-16 lg:mb-20"
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
