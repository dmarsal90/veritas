// Security utilities for server-side use (if adding a backend)
// These can be used with Express, Fastify, or any Node.js framework

export const securityHeaders = {
  contentSecurityPolicy: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s+/g, ' ').trim(),

  hsts: 'max-age=31536000; includeSubDomains; preload',
  xFrameOptions: 'DENY',
  xContentTypeOptions: 'nosniff',
  referrerPolicy: 'strict-origin-when-cross-origin',
  permissionsPolicy: 'camera=(), microphone=(), geolocation=()',
};

export function applySecurityHeaders(res) {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    const headerName = key
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^./, c => c.toUpperCase());
    res.setHeader(headerName, value);
  });
}

export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
};

export const quoteRateLimitConfig = {
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: { error: 'Too many quote requests, please try again in 5 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
};

export function sanitizeHtml(input) {
  if (typeof input !== 'string') return input;
  return input
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&#x2F;');
}

export function validateQuoteData(data) {
  const errors = [];
  
  if (!data.firstName || !data.firstName.trim()) {
    errors.push('First name is required');
  }
  if (!data.lastName || !data.lastName.trim()) {
    errors.push('Last name is required');
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  if (!data.phone || !/^[\d\s\-()+]{10,}$/.test(data.phone)) {
    errors.push('Valid phone number is required');
  }
  if (!data.address || !data.address.trim()) {
    errors.push('Address is required');
  }
  if (!data.city || !data.city.trim()) {
    errors.push('City is required');
  }
  if (!data.zipCode || !/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
    errors.push('Valid ZIP code is required');
  }
  if (!data.service) {
    errors.push('Service selection is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: {
      firstName: sanitizeHtml(data.firstName?.trim()),
      lastName: sanitizeHtml(data.lastName?.trim()),
      email: sanitizeHtml(data.email?.trim().toLowerCase()),
      phone: sanitizeHtml(data.phone?.trim()),
      address: sanitizeHtml(data.address?.trim()),
      city: sanitizeHtml(data.city?.trim()),
      zipCode: sanitizeHtml(data.zipCode?.trim()),
      service: sanitizeHtml(data.service),
      pestDetails: sanitizeHtml(data.pestDetails?.trim() || ''),
      preferredContact: data.preferredContact,
      preferredTime: sanitizeHtml(data.preferredTime?.trim() || ''),
      submittedAt: new Date().toISOString(),
    },
  };
}
