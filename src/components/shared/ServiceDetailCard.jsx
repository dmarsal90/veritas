import { motion } from 'motion/react';

export default function ServiceDetailCard({ icon, title, description, index = 0 }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
  };

  return (
    <motion.div
      className="flex gap-4 p-4 sm:p-6 bg-background rounded-xl border border-border"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-text mb-2">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}