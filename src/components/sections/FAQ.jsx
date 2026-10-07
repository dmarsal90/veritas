import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="section bg-background" aria-labelledby="faq-title">
      <div className="page-container">
        <header className="section-header animate-fade-in">
          <span className="section-label badge badge-primary">
            {t.faq.title}
          </span>
          <h2 id="faq-title" className="section-title">
            {t.faq.subtitle || 'Frequently Asked Questions'}
          </h2>
        </header>
        <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
          {t.faq.questions.map((faq, index) => (
            <details
              key={index}
              className="group card overflow-hidden"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(index);
                }}
              >
                <span className="text-base lg:text-lg font-semibold text-text pr-8">{faq.q}</span>
                <svg className="w-6 h-6 text-text-muted flex-shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </summary>
              <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-border bg-background/50 animate-in fade-in-0 duration-200">
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}