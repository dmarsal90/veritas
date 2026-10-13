import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

const MotionLink = motion.create(Link);

export default function ServiceCard({ service, compact = false }) {
  const { t } = useLanguage();

  const iconWrapperVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 3 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 4 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  };

  const padding = compact ? 'p-4 sm:p-5' : 'p-4 sm:p-6';
  const iconMargin = compact ? 'mb-4 sm:mb-5' : 'mb-5';
  const titleSize = compact ? 'text-lg sm:text-xl' : 'text-xl';
  const priceSize = compact ? 'text-base sm:text-lg' : 'text-lg';
  const descSize = compact ? 'text-sm sm:text-base' : 'text-text-muted leading-relaxed';
  const descMargin = compact ? 'mb-4 sm:mb-5' : 'mb-6';

  return (
    <motion.article
      className={`bg-surface border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group relative overflow-hidden min-w-0 ${compact ? '' : 'flex flex-col'}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${padding} ${compact ? '' : 'flex flex-col'}`}>
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent text-primary ${iconMargin}`}
          aria-hidden="true"
          variants={iconWrapperVariants}
          whileHover="hover"
        >
          {service.icon}
        </motion.div>
        <h3 className={`${titleSize} font-bold text-text mb-2`}>{service.title}</h3>
        {service.price && (
          <p className={`${priceSize} font-bold text-primary ${compact ? 'mb-2' : 'mb-3'}`}>{service.price}</p>
        )}
        <p className={`${descSize} ${descMargin} ${compact ? '' : 'flex-1'}`}>{service.description}</p>
        <MotionLink
          to={service.link}
          className="inline-flex items-center gap-1.5 font-semibold text-primary transition-all hover:gap-2.5 group relative overflow-hidden"
          variants={linkVariants}
          whileHover="hover"
        >
          {t.services.learnMore || 'Learn more'} {service.title}
          <motion.svg
            className="w-5 h-5 flex-shrink-0"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </motion.svg>
        </MotionLink>
      </div>
    </motion.article>
  );
}