import { useLanguage } from '../../context/LanguageContext';
import { ServicePageLayout, FeatureCards, ChecklistBox, FAQSection, QuoteFormCTA, Seo } from '../shared';

export default function CommunitiesPage() {
  const { t } = useLanguage();
  const copy = t.pages.communities;

  const hero = {
    titleId: 'communities-title',
    badge: t.hoa.badge,
    title: copy.title,
    subtitle: copy.subtitle,
    cta: {
      primary: { text: copy.ctaPrimary, link: '/request-service' },
      secondary: { text: copy.ctaSecondary, link: 'mailto:communities@veritaservicesllc.com' },
    },
  };

  return (
    <ServicePageLayout hero={hero} trustBadges={true}>
      <Seo title={copy.title} description={copy.subtitle} path="/hoa-property-management-pest-control" />

      <FeatureCards
        title={copy.featuresTitle}
        subtitle={copy.featuresSubtitle}
        className="mb-16 lg:mb-20"
      />

      <ChecklistBox
        variant="hoa"
        className="mb-16 lg:mb-20 max-w-3xl mx-auto"
      />

      <FAQSection
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        faqs={copy.faq.map((item) => ({ question: item.q, answer: item.a }))}
        className="mb-16 lg:mb-20"
      />

      <QuoteFormCTA
        title={copy.quoteCtaTitle}
        subtitle={copy.quoteCtaSubtitle}
        buttonText={copy.quoteCtaButton}
        className="mb-16 lg:mb-20"
      />
    </ServicePageLayout>
  );
}
