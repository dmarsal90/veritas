// Shared service catalog used by ServicesPage and every location/service page that
// renders the full service grid. Single source of truth so the 8 pages that used to
// duplicate this list (and its links) can't drift out of sync.
export const SERVICE_CATALOG = [
  {
    key: 'generalPestControl',
    icon: (
      // Shield + checkmark — general protection, not a specific pest
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <path d="M12 2.5 L20 5.5 V11 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 11 V5.5 Z" strokeLinejoin="round" />
        <path d="M8.5 12 L10.5 14 L15.5 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: '/pest-control-fort-myers',
  },
  {
    key: 'monthlySpiderControl',
    icon: (
      // Spider — round abdomen + small head, four legs each side
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13.5" rx="3.2" ry="4.2" />
        <circle cx="12" cy="7.5" r="2.1" />
        <path d="M9.3 11 L4.2 8.3 M9 12.8 L3 12.3 M9 14.6 L4 17.3 M9.3 16.4 L5 20.2" strokeLinecap="round" />
        <path d="M14.7 11 L19.8 8.3 M15 12.8 L21 12.3 M15 14.6 L20 17.3 M14.7 16.4 L19 20.2" strokeLinecap="round" />
      </svg>
    ),
    link: '/spider-control-fort-myers',
    priceKey: 'from35mo',
  },
  {
    key: 'germanRoachCleanup',
    icon: (
      // Cockroach — elongated oval body, antennae, six legs
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13" rx="5.5" ry="7.2" />
        <line x1="12" y1="6.5" x2="12" y2="19.5" strokeOpacity="0.4" />
        <path d="M9.8 6.5 L7.8 3 M14.2 6.5 L16.2 3" strokeLinecap="round" />
        <path d="M7 9.5 L2.3 7.5 M7 13 L2 13 M7 16.5 L2.3 19" strokeLinecap="round" />
        <path d="M17 9.5 L21.7 7.5 M17 13 L22 13 M17 16.5 L21.7 19" strokeLinecap="round" />
      </svg>
    ),
    link: '/german-roach-cleanup-fort-myers',
    priceKey: 'from225',
  },
  {
    key: 'rodentControl',
    icon: (
      // Mouse — front-facing face: round ears + head, eyes, nose, whiskers
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <circle cx="6.8" cy="6.3" r="3" />
        <circle cx="17.2" cy="6.3" r="3" />
        <circle cx="12" cy="13.2" r="7" />
        <circle cx="9.3" cy="11.8" r="0.7" fill="currentColor" />
        <circle cx="14.7" cy="11.8" r="0.7" fill="currentColor" />
        <path d="M12 14.6 L10.8 16.1 M12 14.6 L13.2 16.1" strokeLinecap="round" />
        <path d="M5.3 15.2 L1.5 14.2 M5.6 16.8 L1.8 17.3 M5.3 18.4 L2 20" strokeLinecap="round" />
        <path d="M18.7 15.2 L22.5 14.2 M18.4 16.8 L22.2 17.3 M18.7 18.4 L22 20" strokeLinecap="round" />
      </svg>
    ),
    link: '/rodent-control-fort-myers',
  },
  {
    key: 'bedBugTreatment',
    icon: (
      // Bed bug — wide, flat oval body (its defining trait), tiny head, six short legs
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <ellipse cx="12" cy="13" rx="7.5" ry="5.4" />
        <circle cx="12" cy="6.6" r="1.6" />
        <path d="M10.8 5.2 L9.6 3.5 M13.2 5.2 L14.4 3.5" strokeLinecap="round" />
        <path d="M6.5 10.5 L2.5 9.3 M5.6 13 L1.8 13 M6.5 15.8 L2.5 17.3" strokeLinecap="round" />
        <path d="M17.5 10.5 L21.5 9.3 M18.4 13 L22.2 13 M17.5 15.8 L21.5 17.3" strokeLinecap="round" />
        <path d="M8 9.5 L8 16.5 M12 8.7 L12 17.3 M16 9.5 L16 16.5" strokeOpacity="0.35" />
      </svg>
    ),
    link: '/bed-bug-treatment-fort-myers',
  },
  {
    key: 'fleaTickTreatment',
    icon: (
      // Tick — small round, blood-fed body, tiny head, short stubby legs
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <circle cx="12" cy="14" r="4.3" />
        <circle cx="12" cy="8.2" r="1.3" />
        <path d="M8.6 11.5 L5.3 10.3 M8.2 14 L4.6 14 M8.6 16.5 L5.3 17.7" strokeLinecap="round" />
        <path d="M15.4 11.5 L18.7 10.3 M15.8 14 L19.4 14 M15.4 16.5 L18.7 17.7" strokeLinecap="round" />
      </svg>
    ),
    link: '/flea-tick-treatment-fort-myers',
  },
  {
    key: 'mosquitoControl',
    icon: (
      // Mosquito — slender body, proboscis, two angled wings, six legs
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <path d="M12 2 L12 5.5" strokeLinecap="round" />
        <ellipse cx="12" cy="8" rx="1.7" ry="2.2" />
        <path d="M12 10.2 L12 16.5" strokeLinecap="round" />
        <ellipse cx="6.8" cy="9.6" rx="4.6" ry="2" transform="rotate(-24 6.8 9.6)" strokeOpacity="0.55" />
        <ellipse cx="17.2" cy="9.6" rx="4.6" ry="2" transform="rotate(24 17.2 9.6)" strokeOpacity="0.55" />
        <path d="M10 13 L4.8 11.6 M10 15.2 L4.3 16.2 M10 17.3 L5.8 20" strokeLinecap="round" />
        <path d="M14 13 L19.2 11.6 M14 15.2 L19.7 16.2 M14 17.3 L18.2 20" strokeLinecap="round" />
      </svg>
    ),
    link: '/mosquito-control-fort-myers',
  },
  {
    key: 'hoaPropertyManagement',
    icon: (
      // Two buildings of different heights — community / property management
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="w-12 h-12">
        <rect x="3" y="10.5" width="7" height="10.5" rx="0.6" />
        <rect x="14" y="5.5" width="7" height="15.5" rx="0.6" />
        <path d="M5.3 13.3h2.4M5.3 16.1h2.4M5.3 18.9h2.4" strokeLinecap="round" />
        <path d="M16.3 8.3h2.4M16.3 11.1h2.4M16.3 13.9h2.4M16.3 16.7h2.4" strokeLinecap="round" />
      </svg>
    ),
    link: '/hoa-property-management-pest-control',
  },
];
