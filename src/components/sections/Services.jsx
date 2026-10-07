import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 11v6"/>
          <path d="M12 12h.01"/>
        </svg>
      ),
      title: t.services.generalPestControl || 'General Pest Control',
      description: t.services.generalPestControlDesc || 'Routine residential protection with interior/exterior options for common household pest concerns, with recurring service available.',
      link: '/services',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 12l-2 2 4 4 6-6"/>
        </svg>
      ),
      title: t.services.monthlySpiderControl || 'Monthly Spider Control',
      description: t.services.monthlySpiderControlDesc || 'Starting at $35/month. Exterior treatment plus removal of accessible spider webs on qualifying residential properties.',
      link: '/spider-control',
      price: 'From $35/mo',
      featured: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          <path d="M12 12v4"/>
          <path d="M12 12h.01"/>
        </svg>
      ),
      title: t.services.germanRoachCleanup || 'German Roach Clean-Up',
      description: t.services.germanRoachCleanupDesc || '4 visits from $225. Focused four-visit program for qualifying residential properties with German cockroach activity.',
      link: '/roach-cleanup',
      price: 'From $225',
      featured: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <ellipse cx="14" cy="14" rx="3" ry="5"/>
          <path d="M14 9v5"/>
          <circle cx="14" cy="6" r="2" fill="currentColor"/>
          <path d="M11 8h6"/>
          <path d="M14 19v3"/>
        </svg>
      ),
      title: t.services.rodentControl || 'Rodent Control',
      description: t.services.rodentControlDesc || 'Inspection + targeted plan. Rodent inspection, monitoring and control recommendations based on conditions found.',
      link: '/rodent-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M9 4v16"/>
          <path d="M15 4v16"/>
          <path d="M3 12h18"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      title: t.services.bedBugTreatment || 'Bed Bug Treatment',
      description: t.services.bedBugTreatmentDesc || 'Property-specific treatment. Inspection and treatment recommendations based on confirmed activity and property conditions.',
      link: '/bed-bug-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <path d="M9 9h.01"/>
          <path d="M15 9h.01"/>
        </svg>
      ),
      title: t.services.fleaTickTreatment || 'Flea & Tick Treatment',
      description: t.services.fleaTickTreatmentDesc || 'Targeted treatment. Focused service for flea and tick concerns, with preparation guidance when applicable.',
      link: '/flea-tick-treatment',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v4"/>
          <path d="M12 18v4"/>
          <path d="M4.93 4.93l2.83 2.83"/>
          <path d="M16.24 16.24l2.83 2.83"/>
          <path d="M2 12h4"/>
          <path d="M18 12h4"/>
          <path d="M4.93 19.07l2.83-2.83"/>
          <path d="M16.24 7.76l2.83-2.83"/>
        </svg>
      ),
      title: t.services.mosquitoControl || 'Mosquito Control',
      description: t.services.mosquitoControlDesc || 'Outdoor mosquito service. Treatments focused on outdoor resting and breeding areas based on property conditions.',
      link: '/mosquito-control',
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-6 h-6">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <path d="M9 22V12h6v10"/>
          <path d="M5 12h14"/>
        </svg>
      ),
      title: t.services.hoaPropertyManagement || 'HOA & Property Management',
      description: t.services.hoaPropertyManagementDesc || 'Custom service plans. Dependable scheduling, communication, common-area service and documentation for residential communities.',
      link: '/communities',
      featured: false,
    },
  ];

  return (
    <section className="section bg-surface" aria-labelledby="services-title">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.services.title}
          </span>
          <h2 id="services-title" className="section-title">
            {t.services.subtitle}
          </h2>
          <p className="section-description">
            Choose a focused service or tell us what you are seeing and we can discuss the appropriate option for your property.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.link}
              className={`card group relative overflow-hidden ${
                service.featured ? 'card-featured' : ''
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 left-4 z-10 badge badge-primary">
                  {t.services.featured || 'Most Popular'}
                </span>
              )}
              <div className="p-6">
                <div className="icon-wrapper mb-5 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
                {service.price && (
                  <p className="text-lg font-bold text-primary mb-3">{service.price}</p>
                )}
                <p className="text-text-muted leading-relaxed mb-6 flex-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="link-arrow"
                >
                  {t.services.learnMore || 'Learn more'}
                  <svg className="w-5 h-5 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}