import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const buttonVariants = {
  primary:
    'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
  secondary:
    'bg-[var(--color-surface-elevated)] text-[var(--color-ink)] border border-[var(--color-border)] hover:border-purple-400/50',
  ghost: 'text-[var(--color-ink)] hover:bg-[var(--color-border)]/60',
   accent:
    'bg-[#F4CE14] text-slate-950 shadow-lg shadow-[#F4CE14]/30 hover:shadow-[#F4CE14]/40',
}

export function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function ButtonLink({ to, children, variant = 'primary', className = '', wrapperClassName = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex ${wrapperClassName}`}
    >
      <Link
        to={to}
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${buttonVariants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
