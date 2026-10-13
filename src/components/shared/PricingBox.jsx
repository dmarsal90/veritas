import { useLanguage } from '../../context/LanguageContext';

export default function PricingBox({ 
  className = '', 
  price, 
  period, 
  description, 
  features = [],
  buttonText,
  buttonLink,
  variant = 'default'
}) {
  const { t } = useLanguage();

  if (variant === 'spider') {
    return (
      <div className={`bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 ${className}`}>
        <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">{t.pricing.monthlyExteriorSpiderService || 'Monthly exterior spider service'}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl sm:text-5xl font-bold text-primary">{price || '$35'}</span>
          <span className="text-text-muted">{period || '/month'}</span>
        </div>
        <p className="text-text-muted leading-relaxed mb-6">{description || t.pricing.spiderDescription || 'Targeted exterior treatment and accessible spider-web removal. Final pricing depends on property size, access and service conditions. Treatments follow applicable labels and the agreed service scope.'}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 w-full sm:w-auto transition-all duration-200"
          >
            {buttonText}
          </a>
        )}
      </div>
    );
  }

  if (variant === 'roach') {
    return (
      <div className={`bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 ${className}`}>
        <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">{t.pricing.fourVisitProgram || '4-Visit Residential Program'}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl sm:text-5xl font-bold text-primary">From {price || '$225'}</span>
        </div>
        <p className="text-text-muted leading-relaxed mb-6">{description || t.pricing.roachDescription || 'For qualifying residential properties. Final pricing depends on infestation level, property size, access, preparation and other site conditions.'}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 w-full sm:w-auto transition-all duration-200"
          >
            {buttonText}
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ${className}`}>
      {price && (
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {period && <span className="text-text-muted">{period}</span>}
        </div>
      )}
      {description && <p className="text-text-muted leading-relaxed mb-6">{description}</p>}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-green-800 text-white shadow-sm hover:bg-green-900 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600/50 w-full sm:w-auto transition-all duration-200"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}