import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const spiderCities = [
  { nameKey: 'fortMyers', link: '/spider-control-fort-myers' },
  { nameKey: 'bonitaSprings', link: '/spider-control-bonita-springs' },
  { nameKey: 'naples', link: '/spider-control-naples' },
];

export default function SpiderCityLinks({ className = '', title, variant = 'default' }) {
  const { t } = useLanguage();

  if (variant === 'inline') {
    return (
      <nav className={className} aria-label="Spider control by city">
        <ul className="flex flex-wrap gap-3" role="list">
          {spiderCities.map((city) => (
            <li key={city.link}>
              <Link
                to={city.link}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text bg-background border border-border rounded-lg hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors duration-150"
              >
                {t.spiderCities[city.nameKey] || city.nameKey}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-lg font-semibold text-text mb-6">{title || t.spiderCities.sectionTitle}</h3>
      <nav aria-label="Spider control by city">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto" role="list">
          {spiderCities.map((city) => (
            <li key={city.link}>
              <Link
                to={city.link}
                className="flex items-center justify-center px-6 py-5 text-base font-semibold text-text bg-surface border border-border rounded-xl shadow-md hover:shadow-lg hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                {t.spiderCities[city.nameKey] || city.nameKey}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}