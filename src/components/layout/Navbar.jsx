import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext.jsx'
import { BrandLogo } from '../ui/BrandLogo.jsx'
import { ButtonLink } from '../ui/Button.jsx'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/community', label: 'Community' },
  { to: '/events', label: 'Events' },
  { to: '/members', label: 'Members' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-500/15 text-purple-700 dark:text-purple-200'
      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
  }`
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/80 bg-[var(--color-surface)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span layout className="rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10">
            <BrandLogo className="h-9 w-9" />
          </motion.span>
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold tracking-tight text-[var(--color-ink)] sm:text-base">
              AI VISTAAR
            </p>
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-muted)] sm:block">
              Vibgyor of Technology
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-2 text-sm font-semibold text-[var(--color-ink)]"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
          <span className="hidden sm:inline-flex">
            <ButtonLink to="/community">Join community</ButtonLink>
          </span>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            className="inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-[var(--color-ink)] lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} block px-3 py-3 text-base`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2">
                <ButtonLink to="/community" className="w-full justify-center">
                  Join community
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
