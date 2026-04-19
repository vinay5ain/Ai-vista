import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/Button.jsx'

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-display text-7xl font-extrabold gradient-text"
      >
        404
      </motion.p>
      <h1 className="mt-4 font-display text-2xl font-bold text-[var(--color-ink)]">This path is still learning</h1>
      <p className="mt-2 max-w-md text-sm text-[var(--color-ink-muted)]">
        The page you wanted isn’t in this static build. Try the navigation above or head home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/">Go home</ButtonLink>
        <ButtonLink to="/events" variant="secondary">
          View events
        </ButtonLink>
      </div>
      <Link to="/faq" className="mt-6 text-sm font-semibold text-purple-600">
        Read the FAQ
      </Link>
    </div>
  )
}
