import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { members } from '../data/members.js'

const roles = ['All', 'Learner', 'Mentor', 'Ambassador']

export function Members() {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('All')

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const hay = `${m.name} ${m.role} ${m.focus}`.toLowerCase()
      const matchQ = !query.trim() || hay.includes(query.toLowerCase())
      const matchR =
        role === 'All' ||
        (role === 'Learner' && m.role.toLowerCase().includes('learner')) ||
        (role === 'Mentor' && m.role.toLowerCase().includes('mentor')) ||
        (role === 'Ambassador' && m.role.toLowerCase().includes('ambassador'))
      return matchQ && matchR
    })
  }, [query, role])

  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
          Members
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          People who make the <span className="gradient-text">vibgyor</span> vivid
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          Cards link to lightweight profile pages—great for mentors, ambassadors, and standout learners.
        </p>
      </header>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search members…"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] py-3 pl-10 pr-4 text-sm outline-none ring-purple-500/30 focus:ring-2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <motion.button
              key={r}
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => setRole(r)}
              className={`rounded-full px-4 py-2 text-xs font-semibold capitalize ${
                r === role
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white'
                  : 'border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-ink-muted)]'
              }`}
            >
              {r}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m, i) => (
          <Card key={m.id} delay={i * 0.05} className="overflow-hidden p-0">
            <div className="flex items-center gap-4 p-5">
              <img src={m.image} alt="" className="h-16 w-16 rounded-2xl object-cover ring-2 ring-purple-500/20" />
              <div>
                <Link to={`/members/${m.id}`} className="font-display text-lg font-bold text-[var(--color-ink)] hover:text-purple-600 dark:hover:text-purple-300">
                  {m.name}
                </Link>
                <p className="text-xs text-[var(--color-ink-muted)]">{m.role}</p>
              </div>
            </div>
            <div className="border-t border-[var(--color-border)] px-5 py-4 text-sm text-[var(--color-ink-muted)]">
              <span className="font-semibold text-[var(--color-ink)]">Focus:</span> {m.focus}
            </div>
            <div className="flex items-center justify-between border-t border-[var(--color-border)] px-5 py-3">
              <Link to={`/members/${m.id}`} className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                View profile →
              </Link>
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold"
              >
                Follow (UI)
              </motion.button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
