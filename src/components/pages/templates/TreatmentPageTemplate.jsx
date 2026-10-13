import { useLanguage } from '../../../context/LanguageContext';
import { SERVICE_CATALOG } from '../../../constants/services';
import { ServicePageLayout, ServiceCard, ServiceAreaLinks, FAQSection, QuoteFormCTA, SpiderCityLinks, ProcessSteps, Seo } from '../../shared';

/**
 * Shared template for the four near-identical "treatment" pages (bed bug, rodent,
 * flea & tick, mosquito). They differ only in hero copy, intro copy and FAQ — the
 * service grid, process steps, area links and CTAs are the same everywhere.
 */
export default function TreatmentPageTemplate({ pestKey, path, titleId }) {
  const { t } = useLanguage();
  const copy = t.pages.treatment[pestKey];
  const common = t.pages.treatmentCommon;

  const hero = {
    titleId,
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
      <Seo title={copy.title} description={copy.subtitle} path={path} />

      <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
        <h2 className="text-2xl font-bold text-text mb-4">{copy.introTitle}</h2>
        <p className="text-text-muted leading-relaxed">{copy.introBody}</p>
      </div>

      <section className="py-16 md:py-24" aria-labelledby={`${titleId}-grid`}>
        <div className="w-full max-w-[85%] mx-auto px-6">
          <header className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 id={`${titleId}-grid`} className="text-3xl md:text-4xl font-bold leading-tight text-text mb-4">
              {t.pages.services.gridTitle}
            </h2>
            <p className="text-lg leading-relaxed text-text-muted">{t.pages.services.gridSubtitle}</p>
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
        title={common.processTitle}
        subtitle={common.processSubtitle}
        className="mb-16 lg:mb-20"
      />

      <ServiceAreaLinks
        title={common.areasTitle}
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
