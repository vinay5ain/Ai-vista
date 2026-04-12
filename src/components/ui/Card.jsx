import { motion } from 'framer-motion'

export function Card({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)] ${className}`}
      {...props}
    >
      {children}
    </motion.article>
  )
}
