import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { createValidator, validators, sanitizeFormData, rateLimiter } from '../../../utils/validation';
import { api } from '../../../services/api';
import { SERVICE_OPTIONS } from '../../../constants';
import { useLanguage } from '../../../context/LanguageContext';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
  service: '',
  pestDetails: '',
  preferredContact: 'phone',
  preferredTime: '',
};

function getClientIdentifier() {
  return `${navigator.userAgent}-${screen.width}x${screen.height}`;
}

export default function QuoteForm() {
  const { t } = useLanguage();
  const clientId = getClientIdentifier();
  
  const validationRules = {
    firstName: [validators.required()],
    lastName: [validators.required()],
    email: [validators.required(), validators.email()],
    phone: [validators.required(), validators.phone()],
    address: [validators.required()],
    city: [validators.required()],
    zipCode: [validators.required(), validators.zipCode()],
    service: [validators.required(t.quoteForm.required)],
    pestDetails: [validators.maxLength(1000, t.quoteForm.required)],
    preferredContact: [validators.required()],
    preferredTime: [validators.maxLength(100, 'Preferred time too long')],
  };

  const validate = createValidator(validationRules);
  
  const [apiError, setApiError] = useState('');

  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm(initialValues, validate, async (formData) => {
    const rateLimit = rateLimiter.check(clientId, 3, 300000);
    if (!rateLimit.allowed) {
      throw new Error(`Too many requests. Please wait ${Math.ceil(rateLimit.retryAfter / 1000 / 60)} minutes before trying again.`);
    }

    const sanitizedData = sanitizeFormData(formData);
    await api.submitQuote(sanitizedData);
    rateLimiter.reset(clientId);
  });

  const handleSubmitWithRateLimit = (e) => {
    setApiError('');
    const rateLimit = rateLimiter.check(clientId, 3, 300000);
    if (!rateLimit.allowed) {
      e.preventDefault();
      alert(`Too many requests. Please wait ${Math.ceil(rateLimit.retryAfter / 1000 / 60)} minutes before trying again.`);
      return;
    }
    handleSubmit(e).catch((err) => {
      setApiError(err.message || t.quoteForm.error);
    });
  };

  const renderError = (field) => (
    errors[field] && touched[field] && (
      <p className="mt-1.5 text-sm text-error">{errors[field]}</p>
    )
  );

  const inputClass = (field) => (
    `w-full px-4 py-3 text-base border rounded-lg bg-surface text-text placeholder-text-muted transition-all duration-150 ${
      errors[field] && touched[field]
        ? 'border-error focus:border-error focus:ring-2 focus:ring-error/20'
        : 'border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20'
    }`
  );

  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="quote-title">
      <div className="page-container">
        <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <p className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-primary bg-primary/10 rounded-full mb-4">
            {t.quoteForm.title}
          </p>
          <h2 id="quote-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text mb-4">
            {t.quoteForm.subtitle}
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          {submitStatus === 'success' ? (
            <div className="bg-surface rounded-2xl border border-border p-8 lg:p-12 text-center">
              <svg className="w-16 h-16 text-success mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3 className="text-2xl font-bold text-text mb-4">Quote Request Sent!</h3>
              <p className="text-text-muted leading-relaxed mb-8">
                Thank you! We'll review your information and follow up within 24 hours to discuss service options.
              </p>
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                {t.quoteForm.submit}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitWithRateLimit} className="bg-surface rounded-2xl border border-border p-6 lg:p-8 shadow-sm" noValidate>
              {apiError && (
                <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error" role="alert">
                  {apiError}
                </div>
              )}
              {submitStatus === 'error' && !apiError && (
                <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error" role="alert">
                  {t.quoteForm.error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.firstName} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('firstName')}
                    required
                    autoComplete="given-name"
                  />
                  {renderError('firstName')}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.lastName} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('lastName')}
                    required
                    autoComplete="family-name"
                  />
                  {renderError('lastName')}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.email} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('email')}
                    required
                    autoComplete="email"
                  />
                  {renderError('email')}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.phone} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('phone')}
                    required
                    autoComplete="tel"
                    placeholder="(239) 555-0123"
                  />
                  {renderError('phone')}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="address" className="block text-sm font-medium text-text mb-2">
                  {t.quoteForm.address} <span className="text-error" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass('address')}
                  required
                  autoComplete="street-address"
                  placeholder="123 Main St"
                />
                {renderError('address')}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.city} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('city')}
                    required
                    autoComplete="address-level2"
                  />
                  {renderError('city')}
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.zipCode} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('zipCode')}
                    required
                    autoComplete="postal-code"
                    placeholder="33901"
                  />
                  {renderError('zipCode')}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text mb-2">
                    {t.quoteForm.serviceType} <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('service')}
                    required
                  >
                    <option value="">{t.quoteForm.serviceType}</option>
                    {SERVICE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {renderError('service')}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="pestDetails" className="block text-sm font-medium text-text mb-2">
                  {t.quoteForm.pestIssues}
                </label>
                <textarea
                  id="pestDetails"
                  name="pestDetails"
                  value={values.pestDetails}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass('pestDetails') + ' resize-y'}
                  placeholder="What are you seeing? Where? How long has it been going on?"
                  maxLength={1000}
                />
                {renderError('pestDetails')}
              </div>

              <fieldset className="mb-5">
                <legend className="text-sm font-semibold text-text mb-4">{t.quoteForm.propertyType}</legend>
                <div className="flex flex-wrap gap-4">
                  {['phone', 'text', 'email'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={option}
                        checked={values.preferredContact === option}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-2 focus:ring-primary/20 accent-primary"
                      />
                      <span className="text-text">
                        {option === 'phone' ? 'Phone Call' : option === 'text' ? 'Text Message' : 'Email'}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mb-6">
                <label htmlFor="preferredTime" className="block text-sm font-medium text-text mb-2">
                  {t.quoteForm.preferredDate}
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={values.preferredTime}
                  onChange={handleChange}
                  className={inputClass('preferredTime')}
                  placeholder="e.g., Weekday mornings, After 5pm, Anytime"
                  maxLength={100}
                />
              </div>

              <div className="pt-4 border-t border-border">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      {t.quoteForm.submitting}
                    </>
                  ) : (
                    t.quoteForm.submit
                  )}
                </button>
                <p className="mt-4 text-sm text-text-muted text-center">
                  By submitting, you agree to be contacted regarding your pest control inquiry. We respect your privacy.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}