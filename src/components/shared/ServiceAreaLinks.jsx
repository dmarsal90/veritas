import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const serviceAreas = [
  { nameKey: 'fortMyers', descKey: 'fortMyersDesc', link: '/pest-control-fort-myers' },
  { nameKey: 'sanCarlosPark', descKey: 'sanCarlosParkDesc', link: '/pest-control-san-carlos-park' },
  { nameKey: 'estero', descKey: 'esteroDesc', link: '/pest-control-estero' },
  { nameKey: 'bonitaSprings', descKey: 'bonitaSpringsDesc', link: '/pest-control-bonita-springs' },
];

const MotionLink = motion.create(Link);

export default function ServiceAreaLinks({ className = '', title, variant = 'default' }) {
  const { t } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {serviceAreas.map((area) => (
          <Link
            key={area.link}
            to={area.link}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text bg-background border border-border rounded-lg hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors duration-150"
          >
            {t.serviceAreas[area.nameKey] || area.nameKey}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="text-lg font-semibold text-text mb-4">{title}</h3>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
        {serviceAreas.map((area) => (
          <li key={area.link}>
            <MotionLink
              to={area.link}
              className="block bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-bold text-text mb-1">{t.serviceAreas[area.nameKey] || area.nameKey}</h4>
              <p className="text-sm text-text-muted">{t.serviceAreas[area.descKey] || area.descKey}</p>
            </MotionLink>
          </li>
        ))}
      </ul>
    </div>
  );
}