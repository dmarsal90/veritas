import { useLanguage } from '../../context/LanguageContext';

const trustBadges = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    textKey: 'licensed'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    textKey: 'local'
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    textKey: 'guarantee'
  },
];

export default function TrustBadges({ className = '', variant = 'default' }) {
  const { t } = useLanguage();

  if (variant === 'quote') {
    const quoteBadges = [
      { 
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        textKey: 'local'
      },
      { 
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        textKey: 'licensed'
      },
      { 
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="w-5 h-5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        textKey: 'fastFollowup'
      },
    ];

    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 ${className}`}>
        {quoteBadges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-sm font-medium text-text">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">{badge.icon}</span>
            {(t.quoteForm.badges && t.quoteForm.badges[badge.textKey]) || badge.textKey}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 ${className}`}>
      {trustBadges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-sm font-medium text-text-muted">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">{badge.icon}</span>
          {t.hero.trust[badge.textKey] || badge.textKey}
        </div>
      ))}
    </div>
  );
}