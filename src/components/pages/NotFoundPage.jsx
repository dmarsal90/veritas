import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import Seo from '../shared/Seo';

export default function NotFoundPage() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const nf = t.notFound;

  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="notfound-title">
      <Seo title={nf.title} description={nf.description} noindex />
      <div className="w-full max-w-[85%] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary">{nf.eyebrow}</p>
          <h1 id="notfound-title" className="mt-3 text-4xl md:text-5xl font-extrabold text-text leading-tight">
            {nf.title}
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-md">{nf.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full bg-primary text-white hover:bg-primary-dark hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {nf.backHome}
            </Link>
            <Link
              to="/request-service"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {nf.requestQuote}
            </Link>
          </div>

          <nav aria-label="Popular pages" className="mt-8 text-sm text-text-muted">
            <span className="font-semibold text-text">{nf.popularPages}</span>
            <Link className="ml-2 underline hover:text-primary" to="/pest-control-fort-myers">{nf.popularPestControl}</Link>
            {' · '}
            <Link className="underline hover:text-primary" to="/spider-control-fort-myers">{nf.popularSpiderControl}</Link>
            {' · '}
            <Link className="underline hover:text-primary" to="/german-roach-cleanup-fort-myers">{nf.popularRoachCleanup}</Link>
          </nav>
        </div>

        <div className="flex justify-center" role="img" aria-label={nf.imageAlt}>
          <svg viewBox="0 0 360 260" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fontFamily="var(--font-heading)" fontWeight="800" fontSize="170" textAnchor="middle" className="fill-surface stroke-primary" strokeWidth="6" strokeLinejoin="round">
              <text x="62" y="232">4</text>
              <text x="180" y="232">0</text>
              <text x="298" y="232">4</text>
            </g>
            <motion.g
              style={{ transformOrigin: '180px 0px' }}
              animate={reduceMotion ? {} : { rotate: [-3, 3, -3] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.line
                x1="180" y1="0" x2="180" y2="88"
                className="stroke-primary"
                strokeWidth="2.5"
                style={{ transformOrigin: '180px 0px' }}
                animate={reduceMotion ? {} : { scaleY: [1, 1.27, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.g
                animate={reduceMotion ? {} : { y: [0, 24, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.g
                  className="stroke-primary-dark"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transformOrigin: '180px 118px' }}
                  animate={reduceMotion ? {} : { scaleY: [0.94, 1.07] }}
                  transition={{ duration: 0.45, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                >
                  <path d="M168 100 L145 80 L135 92" />
                  <path d="M167 106 L140 100 L128 114" />
                  <path d="M167 112 L142 122 L132 138" />
                  <path d="M169 118 L150 140 L145 156" />
                  <path d="M192 100 L215 80 L225 92" />
                  <path d="M193 106 L220 100 L232 114" />
                  <path d="M193 112 L218 122 L228 138" />
                  <path d="M191 118 L210 140 L215 156" />
                </motion.g>
                <ellipse cx="180" cy="116" rx="15" ry="19" className="fill-primary-dark" />
                <circle cx="180" cy="94" r="10" className="fill-primary" />
                <circle cx="176" cy="92" r="2" className="fill-surface" />
                <circle cx="184" cy="92" r="2" className="fill-surface" />
              </motion.g>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
}
