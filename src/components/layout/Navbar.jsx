import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { BrandLogo } from '../ui/BrandLogo.jsx'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-gradient-to-r from-yellow-300/20 to-blue-400/20 text-blue-600'
      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
  }`
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/80 bg-[var(--color-surface)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span layout className="rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5">
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
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRHczfuEWb0SoDf8TlHHMb2BtTaSaWLfO9qYnuJct4-ipkPA/viewform?usp=sharing&ouid=115423476678648782359"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-xl border border-transparent bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-400/25 transition-colors hover:shadow-blue-400/40 sm:inline-flex"
          >
            Join Community
          </motion.a>
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
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdRHczfuEWb0SoDf8TlHHMb2BtTaSaWLfO9qYnuJct4-ipkPA/viewform?usp=sharing&ouid=115423476678648782359"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-400/25"
                >
                  Join Community
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
