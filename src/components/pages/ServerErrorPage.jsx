import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useContactInfo } from '../../hooks/useContactInfo';
import Seo from '../shared/Seo';

export default function ServerErrorPage() {
  const { t } = useLanguage();
  const { phone, phoneHref, email, emailHref } = useContactInfo();
  const reduceMotion = useReducedMotion();
  const se = t.serverError;

  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="servererror-title">
      <Seo title={se.title} description={se.description} noindex />
      <div className="w-full max-w-[85%] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2">
          <p className="text-sm font-semibold tracking-widest text-primary">{se.eyebrow}</p>
          <h1 id="servererror-title" className="mt-3 text-4xl md:text-5xl font-extrabold text-text leading-tight">
            {se.title}
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-md">{se.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full bg-primary text-white hover:bg-primary-dark hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {se.tryAgain}
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {se.backHome}
            </Link>
          </div>

          <p className="mt-8 text-sm text-text-muted">
            {se.needServiceNow}{' '}
            <a href={phoneHref} className="font-semibold text-primary underline underline-offset-2">{phone}</a>
            {' '}{se.orEmail}{' '}
            <a href={emailHref} className="font-semibold text-primary underline underline-offset-2">{email}</a>.
          </p>
        </div>

        <div className="md:order-1 flex justify-center" role="img" aria-label={se.imageAlt}>
          <motion.svg
            viewBox="0 0 240 270"
            className="w-full max-w-xs"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={reduceMotion ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.g
              animate={reduceMotion ? {} : { x: [0, -6, 6, -4, 3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3.4, ease: 'easeInOut' }}
            >
              <path
                d="M120 10 L220 48 V120 C220 185 175 230 120 258 C65 230 20 185 20 120 V48 Z"
                className="fill-primary stroke-primary-dark"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <motion.path
                d="M120 18 L108 62 L130 92 L112 118"
                className="stroke-surface"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              />
              <motion.path
                d="M116 182 L134 208 L120 232 L122 254"
                className="stroke-surface"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              />
              <motion.text
                x="120" y="164" textAnchor="middle"
                fontFamily="var(--font-heading)" fontWeight="800" fontSize="60"
                className="fill-surface"
                animate={reduceMotion ? {} : { opacity: [1, 1, 0.55, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                500
              </motion.text>
              <g className="fill-surface">
                {[
                  { cx: 112, cy: 120, r: 3.5, delay: 0 },
                  { cx: 132, cy: 94, r: 3, delay: 0.5 },
                  { cx: 116, cy: 182, r: 3.5, delay: 1 },
                  { cx: 136, cy: 206, r: 2.5, delay: 0.25 },
                ].map((spark) => (
                  <motion.circle
                    key={`${spark.cx}-${spark.cy}`}
                    cx={spark.cx} cy={spark.cy} r={spark.r}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={reduceMotion ? {} : { opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: spark.delay, ease: 'easeInOut' }}
                  />
                ))}
              </g>
            </motion.g>
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
