import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function QuickStart() {
  const { t } = useLanguage();

  return (
    <section className="section bg-background" aria-labelledby="quickstart-title">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.quickStart.title}
          </span>
          <h2 id="quickstart-title" className="section-title">
            {t.quickStart.subtitle || 'Tell Us What You\'re Seeing'}
          </h2>
        </header>
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
          <p className="section-description mb-8">
            {t.quickStart.description}
          </p>
          <Link
            to="/quote"
            className="btn btn-primary"
          >
            {t.quickStart.button}
          </Link>
        </div>
      </div>
    </section>
  );
}