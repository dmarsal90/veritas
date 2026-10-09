import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Banner() {
  const { t } = useLanguage();

  return (
    <div className="bg-primary/90 text-white text-sm font-medium backdrop-blur-sm" role="region" aria-label="Announcement">
      <div className="container flex items-center justify-between gap-4 h-10 md:h-10 flex-wrap">
        <div className="banner-text">
          <span>{t.banner.text}</span>
        </div>
        <NavLink
          to="/quote"
          className="text-white font-semibold whitespace-nowrap transition-opacity duration-150 hover:opacity-80 flex items-center gap-1.5"
        >
          <svg className="w-4 h-4 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          {t.banner.phone}
        </NavLink>
      </div>
    </div>
  );
}