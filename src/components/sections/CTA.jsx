import { Link } from 'react-router-dom';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useLanguage } from '../../context/LanguageContext';

export default function CTA() {
  const { phone, phoneHref } = useContactInfo();
  const { t } = useLanguage();

  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="page-container">
        <div className="bg-gradient-to-br from-text via-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white animate-fade-in">
          <span className="badge badge-secondary mb-6">
            {t.cta.badge || 'READY TO GET STARTED?'}
          </span>
          <h2 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white text-balance">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t.cta.description || 'Tell us about your property and pest concern. We\'ll follow up to discuss service availability, scope and pricing.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="btn btn-secondary"
            >
              {t.cta.buttonOnline || 'Request Service Online'}
            </Link>
            <a
              href={phoneHref}
              className="btn btn-outline text-white border-white hover:bg-white/10"
              aria-label={t.hero.call}
            >
              <svg className="w-5 h-5 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}