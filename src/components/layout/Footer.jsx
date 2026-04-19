import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { socialLinks } from '../../data/social.js'
import { BrandLogo } from '../ui/BrandLogo.jsx'

const explore = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/events', label: 'Events' },
  { to: '/members', label: 'Members' },
]

const legal = [
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <BrandLogo className="h-10 w-10" />
              <div>
                <p className="font-display text-base font-extrabold text-[var(--color-ink)]">AI VISTAAR</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)]">
                  Vibgyor of Technology
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              A nonprofit-minded community for AI learners ages 12–30—learning, networking, and events,
              together.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-[var(--color-ink)]">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[var(--color-ink-muted)] transition-colors hover:text-purple-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/community"
                  className="text-[var(--color-ink-muted)] transition-colors hover:text-purple-600"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[var(--color-ink-muted)] transition-colors hover:text-purple-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-[var(--color-ink)]">Legal</p>
            <ul className="mt-4 space-y-2 text-sm">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[var(--color-ink-muted)] transition-colors hover:text-purple-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-[var(--color-ink)]">Connect</p>
            <ul className="mt-4 space-y-3 text-sm">
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <motion.a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 2 }}
                    className="flex flex-col gap-0.5 text-[var(--color-ink-muted)] transition-colors hover:text-purple-600"
                  >
                    <span className="font-semibold text-[var(--color-ink)]">{s.label}</span>
                    <span className="text-xs">{s.handle}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-ink-muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AI VISTAAR. Community UI demo—no backend.</p>
          <p className="rounded-full bg-[var(--color-surface)] px-3 py-1 ring-1 ring-[var(--color-border)]">
            Built with React · Tailwind · Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
