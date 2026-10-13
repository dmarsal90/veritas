import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export default function ChecklistBox({ 
  className = '', 
  title, 
  items = [], 
  variant = 'default' 
}) {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  if (variant === 'roach') {
    const roachItems = [
      'roachChecklistVisit1',
      'roachChecklistVisit2',
      'roachChecklistVisit3',
      'roachChecklistVisit4',
    ];
    return (
      <div className={`bg-background rounded-2xl border border-border p-6 sm:p-8 ${className}`}>
        <h3 className="text-xl sm:text-2xl font-bold text-text mb-6">{title || t.pricing.whatProgramIncludes || 'What the program includes'}</h3>
        <motion.ul
          className="space-y-4"
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {roachItems.map((itemKey, _index) => (
            <motion.li key={itemKey} className="flex items-start gap-3" variants={itemVariants}>
              <svg className="w-6 h-6 flex-shrink-0 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text leading-relaxed">{t.pricing[itemKey] || itemKey}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  }

  if (variant === 'hoa') {
    const hoaItems = [
      'checklistGeneralPest',
      'checklistPreventative',
      'checklistRodentStations',
      'checklistSpecialized',
      'checklistReports',
    ];
    return (
      <div className={`bg-background rounded-2xl border border-border p-6 sm:p-8 ${className}`}>
        <h3 className="text-xl sm:text-2xl font-bold text-text mb-6">{title || t.hoa.builtAroundProperty || 'Built Around the Property'}</h3>
        <motion.ul
          className="space-y-4"
          role="list"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {hoaItems.map((itemKey, _index) => (
            <motion.li key={itemKey} className="flex items-start gap-3" variants={itemVariants}>
              <svg className="w-6 h-6 flex-shrink-0 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text leading-relaxed">{t.hoa[itemKey] || itemKey}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  }

  return (
    <div className={`bg-background rounded-2xl border border-border p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold text-text mb-4">{title}</h3>}
      <motion.ul
        className="space-y-3"
        role="list"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
            <svg className="w-5 h-5 flex-shrink-0 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-text">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}