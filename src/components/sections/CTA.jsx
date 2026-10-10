import { motion, useReducedMotion, useMotionValue, useTransform } from 'motion/react';
import { useContactInfo } from '../../hooks/useContactInfo';
import { useLanguage } from '../../context/LanguageContext';

export default function CTA() {
  const { phoneHref } = useContactInfo();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 30);
    mouseY.set(y * 30);
  };

  const handleMouseLeave = () => {
    if (reduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const translateX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="page-container">
        <motion.div
          className="cta-gradient-fixed rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-light)_0%,_transparent_60%)]"
            style={{
              opacity: 0.6,
              transform: reduceMotion ? undefined : { x: translateX, y: translateY },
              transition: reduceMotion ? undefined : { type: 'spring', stiffness: 80, damping: 20 }
            }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_0%,_transparent_50%,_rgba(255,255,255,0.02)_100%)]"
            aria-hidden="true"
          />
          <motion.span
            className="badge badge-secondary mb-6 inline-block relative z-10"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.cta.badge || 'READY TO GET STARTED?'}
          </motion.span>
          <motion.h2
            id="cta-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white text-balance relative z-10"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto relative z-10"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.cta.description || 'Tell us about your property and pest concern. We\'ll follow up to discuss service availability, scope and pricing.'}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.Link
              to="/quote"
              className="btn btn-secondary btn-magnetic group relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: '0 0 0 1px white, 0 20px 40px -12px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.cta.buttonOnline || 'Request Service Online'}</span>
              <motion.svg
                className="w-5 h-5 ml-2 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.Link>
            <motion.a
              href={phoneHref}
              className="btn btn-outline text-white border-white hover:bg-white/10 group relative overflow-hidden"
              aria-label={t.hero.call}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: '0 0 0 1px white, 0 20px 40px -12px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg
                className="w-5 h-5 flex-shrink-0 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </motion.svg>
              <span className="relative z-10">{t.hero.callNow}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}