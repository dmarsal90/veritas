import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function QuoteFormCTA({ 
  className = '', 
  title, 
  subtitle, 
  buttonText, 
  linkText = '/request-service',
  phone = '239-227-0624',
  variant = 'default'
}) {
  const { t } = useLanguage();

  const ctaTitle = title || t.cta.buttonOnline || 'Request Service';
  const ctaSubtitle = subtitle || t.cta.description || 'Use our online form or call us to discuss what you are seeing and the service options available.';
  const ctaButton = buttonText || t.cta.buttonOnline || 'Open Quote Form';
  const ctaPhone = t.cta.phone || `Call ${phone}`;

  if (variant === 'compact') {
    return (
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
        <Link
          to={linkText}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 transition-all duration-200"
        >
          {ctaButton}
        </Link>
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-amber-600 text-gray-900 shadow-sm hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {ctaPhone}
        </a>
      </div>
    );
  }

return (
    <div className={`text-center ${className}`}>
      <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{ctaTitle}</h3>
      <p className="text-text-muted leading-relaxed mb-6 max-w-md mx-auto">{ctaSubtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to={linkText}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 w-full sm:w-auto transition-all duration-200"
        >
          {ctaButton}
        </Link>
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-amber-600 text-gray-900 shadow-sm hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 w-full sm:w-auto transition-all duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {ctaPhone}
        </a>
      </div>
    </div>
  );
}