import { getPhone, getPhoneHref, getEmail, getEmailHref } from '../utils/contactObfuscation';

export const CONTACT_INFO = {
  get phone() { return getPhone(); },
  get phoneHref() { return getPhoneHref(); },
  get email() { return getEmail(); },
  get emailHref() { return getEmailHref(); },
};

export const NAV_ITEMS = [
  { label: 'Services', path: '/services' },
  { label: 'Spider $35', path: '/spider-control' },
  { label: 'Roach Clean-Up', path: '/roach-cleanup' },
  { label: 'Communities', path: '/communities' },
  { label: 'Service Areas', path: '/#service-areas' },
];

export const SERVICE_OPTIONS = [
  'General Pest Control',
  'Monthly Spider Control',
  'German Roach Clean-Up',
  'Rodent Control',
  'Bed Bug Treatment',
  'Flea & Tick Treatment',
  'Mosquito Control',
  'HOA & Property Management',
  'Other / Not Sure',
];

export const QUICK_REPLIES = [
  'Spider control pricing',
  'German roach program details',
  'Service areas covered',
  'Request a quote',
  'Business hours',
];

export const SERVICE_AREAS = [
  { name: 'Fort Myers', description: 'Primary service area.', link: '/services' },
  { name: 'San Carlos Park', description: 'Local neighborhood service.', link: '/san-carlos-park' },
  { name: 'Estero', description: 'Residential pest-control options.', link: '/estero' },
  { name: 'Bonita Springs', description: 'Residential pest-control options.', link: '/bonita-springs' },
];

export const HOA_FEATURES = [
  'Dependable scheduling',
  'Clear management communication',
  'Service documentation and recommendations',
  'Custom scope, frequency and callback structure',
];

export const FAQ_ITEMS = [
  {
    question: 'How much does spider control cost?',
    answer: 'Monthly exterior spider control starts at $35 per month for qualifying residential properties.',
  },
  {
    question: 'How much is the German Roach Clean-Up program?',
    answer: 'The four-visit German Roach Clean-Up program starts at $225 for qualifying residential properties. Final pricing depends on infestation level and property conditions.',
  },
  {
    question: 'Do you offer recurring pest control?',
    answer: 'Yes. Routine residential pest-control options are available, including recurring service based on the property and pest concerns.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Veritas HomeServices LLC primarily serves Fort Myers, San Carlos Park, Estero, Bonita Springs and nearby Southwest Florida communities.',
  },
  {
    question: 'How do I request service?',
    answer: 'Use the online quote form or call or text 239-227-0624.',
  },
];

export const AI_RESPONSES = {
  spider: "Monthly exterior spider control starts at $35/month for qualifying residential properties. This includes exterior treatment and accessible web removal.",
  roach: "Our German Roach Clean-Up is a structured 4-visit program starting at $225 for qualifying residential properties. Final pricing depends on infestation level and property conditions.",
  area: "We primarily serve Fort Myers, San Carlos Park, Estero, Bonita Springs, and nearby Southwest Florida communities.",
  quote: "You can request a free quote using our online form or by calling/texting 239-227-0624. I can help you with that!",
  hours: "We're available Monday-Friday 8am-6pm, Saturday 8am-12pm. For urgent issues, call 239-227-0624.",
  bedBug: "Bed bug treatment is property-specific. We start with an inspection and provide treatment recommendations based on confirmed activity and property conditions.",
  rodent: "Rodent control includes inspection, monitoring, and targeted recommendations based on conditions found. We also offer bait-station monitoring for communities.",
  fleaTick: "Flea & tick treatment is a focused service with preparation guidance when applicable. We treat based on your specific property conditions.",
  mosquito: "Mosquito control targets outdoor resting and breeding areas based on property conditions. It's a seasonal service for Southwest Florida.",
  hoa: "We offer custom service plans for HOAs and property managers including scheduled prevention, common-area treatment, documentation, and callback terms defined by agreement.",
  default: "I can help with pricing, services, service areas, quotes, or general questions. What would you like to know?",
};

export const AI_KEYWORDS = {
  spider: ['spider'],
  roach: ['roach', 'german'],
  area: ['area', 'serve', 'location'],
  quote: ['quote', 'request', 'estimate'],
  hours: ['hour', 'open', 'time'],
  bedBug: ['bed bug', 'bedbug'],
  rodent: ['rodent', 'mouse', 'rat'],
  fleaTick: ['flea', 'tick'],
  mosquito: ['mosquito'],
  hoa: ['hoa', 'community', 'property manager'],
};