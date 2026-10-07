import { useLanguage } from '../../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="section bg-surface" aria-labelledby="process-title">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.process.title}
          </span>
          <h2 id="process-title" className="section-title">
            {t.process.subtitle || 'Getting Started Is Easy'}
          </h2>
        </header>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list">
          {t.process.steps.map((step, index) => (
            <li key={index} className="card p-6 relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}