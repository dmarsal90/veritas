import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function HOA() {
  const { t } = useLanguage();

  return (
    <section className="section bg-background" aria-labelledby="hoa-title">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <span className="badge badge-primary mb-4">
              {t.hoa.badge || 'HOAs & PROPERTY MANAGERS'}
            </span>
            <h2 id="hoa-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text mb-4 text-balance">
              {t.hoa.title}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {t.hoa.description || 'Flexible service plans can include scheduled pest prevention, common-area treatment, rodent bait-station monitoring, documented recommendations and callback terms defined by agreement.'}
            </p>
            <Link
              to="/communities"
              className="btn btn-primary"
            >
              {t.hoa.cta || 'Community & Property Management Services'}
            </Link>
          </div>
          <div className="card p-6 lg:p-8 animate-slide-up">
            <h3 className="text-xl font-semibold text-text mb-6">
              {t.hoa.cardTitle || 'Built for property operations'}
            </h3>
            <ul className="space-y-4" role="list">
              {t.hoa.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-text leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}