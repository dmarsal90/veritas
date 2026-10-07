import { Link } from 'react-router-dom';
import { useContactInfo } from '../../hooks/useContactInfo';
import { SERVICE_OPTIONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { phone, phoneHref, email, emailHref } = useContactInfo();
  const { t } = useLanguage();

  const footerLinks = {
    services: SERVICE_OPTIONS.slice(0, 7).map(label => ({ label, path: `/${label.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace('/', '-')}` })),
    local: [
      { label: t.footer.fortMyers || 'Fort Myers', path: '/services' },
      { label: t.footer.sanCarlosPark || 'San Carlos Park', path: '/san-carlos-park' },
      { label: t.footer.estero || 'Estero', path: '/estero' },
      { label: t.footer.bonitaSprings || 'Bonita Springs', path: '/bonita-springs' },
      { label: t.footer.hoasPropertyManagers || 'HOAs & Property Managers', path: '/communities' },
      { label: t.footer.requestQuote || 'Request a Quote', path: '/quote' },
    ],
  };

  return (
    <footer className="bg-text text-surface" role="contentinfo">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pt-12 pb-8">
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6" aria-label="Veritas HomeServices LLC - Home">
              <span className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center font-extrabold text-xl flex-shrink-0" aria-hidden="true">V</span>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-bold text-base text-surface whitespace-nowrap overflow-hidden text-ellipsis">VERITAS HOMESERVICES LLC</span>
                <span className="text-xs font-medium text-text-muted tracking-wider whitespace-nowrap">{t.footer.tagline}</span>
              </div>
            </Link>
            <p className="text-text-muted mb-6 max-w-xs opacity-80 leading-relaxed">
              {t.footer.description || 'Residential pest control serving Fort Myers, San Carlos Park, Estero, Bonita Springs and nearby Southwest Florida communities.'}
            </p>
            <div className="flex flex-col gap-3">
              <a href={phoneHref} className="flex items-center gap-2 text-text-muted hover:text-surface transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {phone}
              </a>
              <a href={emailHref} className="flex items-center gap-2 text-text-muted hover:text-surface transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                {email}
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Services">
            <h4 className="font-semibold text-surface mb-4">{t.footer.services}</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted hover:text-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Local Service">
            <h4 className="font-semibold text-surface mb-4">{t.footer.areas}</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.local.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted hover:text-surface transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>{t.footer.copyright || '© 2026 Veritas HomeServices LLC. Pest Control Business License No. JB500621.'}</p>
          <p className="max-w-2xl leading-relaxed">
            {t.footer.disclaimer || 'Service availability, scope and pricing depend on property conditions and written service terms. Pest-control service is intended to reduce and control covered pest activity and does not guarantee a completely pest-free environment.'}
          </p>
        </div>
      </div>
    </footer>
  );
}