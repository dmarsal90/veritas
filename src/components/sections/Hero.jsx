import { Link } from 'react-router-dom';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { phone, phoneHref } = useContactInfo();
  const { t } = useLanguage();

  return (
    <section className="section bg-background" aria-labelledby="hero-title">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="hero-content animate-fade-in">
            <span className="badge badge-primary mb-6">
              {t.hero.badge}
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/quote"
                className="btn btn-primary"
              >
                {t.hero.getQuote}
              </Link>
              <a
                href={phoneHref}
                className="btn btn-outline"
                aria-label={t.hero.call}
              >
                <svg className="w-5 h-5 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
            <ul className="flex flex-wrap gap-6 md:gap-8 text-text-muted" aria-label="Trust indicators">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t.hero.trust.licensed}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t.hero.trust.local}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t.hero.trust.guarantee}
              </li>
            </ul>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <div className="card card-featured overflow-hidden max-w-md mx-auto">
              <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center relative overflow-hidden">
                <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-light)_0%,_transparent_70%)]" />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-semibold text-text mb-6">{t.hero.featuredOffers}</h3>
                <div className="space-y-4 mb-6">
                  <article className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <div className="icon-wrapper flex-shrink-0">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text">{t.hero.monthlySpiderControl}</h4>
                      <p className="text-lg font-bold text-primary">{t.hero.from35mo}</p>
                      <p className="text-sm text-text-muted">{t.hero.spiderControlDesc}</p>
                    </div>
                  </article>
                  <article className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200">
                    <div className="icon-wrapper flex-shrink-0">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text">{t.hero.germanRoachCleanup}</h4>
                      <p className="text-lg font-bold text-primary">{t.hero.from225}</p>
                      <p className="text-sm text-text-muted">{t.hero.roachCleanupDesc}</p>
                    </div>
                  </article>
                </div>
                <Link
                  to="/quote"
                  className="btn btn-primary w-full"
                >
                  {t.hero.getQuote}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}