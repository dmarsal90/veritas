import { useLanguage } from '../../context/LanguageContext';

export default function WhyVeritas() {
  const { t } = useLanguage();

  return (
    <section className="section bg-surface" aria-labelledby="why-title">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.whyVeritas.title}
          </span>
          <h2 id="why-title" className="section-title">
            {t.whyVeritas.subtitle}
          </h2>
        </header>
        <p className="section-description text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          Good pest control starts with reliability, communication and a service plan built around the property rather than a one-size-fits-all approach.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6" role="list">
          {t.whyVeritas.reasons.map((reason, index) => (
            <li key={index} className="card p-5 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span className="text-text leading-relaxed">{reason}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}