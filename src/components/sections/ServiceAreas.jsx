import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function ServiceAreas() {
  const { t } = useLanguage();

  return (
    <section className="section bg-surface" aria-labelledby="areas-title" id="service-areas">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.serviceAreas.title}
          </span>
          <h2 id="areas-title" className="section-title">
            {t.serviceAreas.subtitle}
          </h2>
          <p className="section-description">
            Local residential pest control throughout our primary service area.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.serviceAreas.areas.map((area) => (
            <Link
              key={area.name}
              to={area.link}
              className="card p-6 lg:p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{area.name}</h3>
              <p className="text-text-muted leading-relaxed">{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}