export const validators = {
  required: (message = 'This field is required') => (value) => 
    value && value.trim() ? '' : message,

  email: (message = 'Valid email is required') => (value) =>
    value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : message,

  phone: (message = 'Valid phone number is required') => (value) =>
    value && /^[\d\s\-()+]{10,}$/.test(value.trim()) ? '' : message,

  zipCode: (message = 'Valid ZIP code is required') => (value) =>
    value && /^\d{5}(-\d{4})?$/.test(value.trim()) ? '' : message,

  minLength: (min, message) => (value) =>
    value && value.length >= min ? '' : message || `Minimum ${min} characters required`,

  maxLength: (max, message) => (value) =>
    value && value.length <= max ? '' : message || `Maximum ${max} characters allowed`,

  pattern: (regex, message) => (value) =>
    value && regex.test(value) ? '' : message || 'Invalid format',
};

export function createValidator(rules) {
  return (values) => {
    const errors = {};
    Object.keys(rules).forEach(field => {
      const fieldRules = rules[field];
      const value = values[field];
      
      for (const rule of fieldRules) {
        const error = rule(value);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    });
    return errors;
  };
}

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 5000);
};

export const sanitizeFormData = (data) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(data)) {
    sanitized[key] = sanitizeInput(value);
  }
  return sanitized;
};

export const rateLimiter = {
  attempts: new Map(),
  
  check(key, maxAttempts = 5, windowMs = 60000) {
    const now = Date.now();
    const userAttempts = this.attempts.get(key) || [];
    
    const validAttempts = userAttempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return { allowed: false, retryAfter: windowMs - (now - validAttempts[0]) };
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return { allowed: true };
  },
  
  reset(key) {
    this.attempts.delete(key);
  },
};