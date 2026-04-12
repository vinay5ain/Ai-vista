import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button.jsx'
import { socialLinks } from '../data/social.js'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3200)
  }

  return (
    <div className="space-y-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Say hello <span className="gradient-text">the old-fashioned way</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          This form is UI-only—no messages are sent. Use the email and social links for real outreach.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div>
            <label className="text-xs font-semibold text-[var(--color-ink-muted)]">Name</label>
            <input
              required
              className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm outline-none ring-purple-500/30 focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[var(--color-ink-muted)]">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm outline-none ring-purple-500/30 focus:ring-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[var(--color-ink-muted)]">Topic</label>
            <select className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm outline-none ring-purple-500/30 focus:ring-2">
              <option>Partnership</option>
              <option>Mentorship</option>
              <option>Events</option>
              <option>General</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-[var(--color-ink-muted)]">Message</label>
            <textarea
              rows={4}
              required
              className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm outline-none ring-purple-500/30 focus:ring-2"
              placeholder="How can we collaborate?"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send message (UI)
          </Button>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-300"
            >
              Thanks! This demo doesn’t transmit data—reach out via email for a real conversation.
            </motion.p>
          )}
        </motion.form>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">Social</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-300"
                  >
                    {s.label}
                  </a>
                  <p className="text-xs text-[var(--color-ink-muted)]">{s.handle}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]">
            <div className="border-b border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)]">
              Map embed (optional)
            </div>
            <iframe
              title="Map preview"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=SVNIT+Surat&output=embed"
            />
            <p className="px-5 py-3 text-xs text-[var(--color-ink-muted)]">
              Placeholder location for inspiration—replace with your chapter city or HQ.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
