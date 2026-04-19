import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { CalendarStrip } from '../components/ui/CalendarStrip.jsx'
import { upcomingEvents, pastEvents } from '../data/events.js'

export function Events() {
  return (
    <div className="space-y-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          Events
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Show up <span className="gradient-text">as you are</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          Join our upcoming AI learning sessions, workshops, and community events designed to accelerate your AI journey.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <SectionTitle
            align="left"
            eyebrow="Upcoming"
            title="Save the dates"
            subtitle="Exciting AI events and learning opportunities coming soon"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((e, i) => (
              <Card key={e.id} delay={i * 0.06} className="overflow-hidden p-0">
                <div className="relative h-40">
                  <img src={e.image} alt="" className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {e.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    {e.date} · {e.time}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-ink)]">{e.title}</h3>
                  <p className="mt-1 text-xs text-[var(--color-ink-muted)]">{e.location}</p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-2.5 text-sm font-semibold text-white shadow-md"
                  >
                    RSVP (UI)
                  </motion.button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <CalendarStrip />
          <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 text-sm text-[var(--color-ink-muted)]">
            Tip: highlight dates that align with your real programming cadence—workshops, AMAs, or club
            partner days.
          </div>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Archive" title="Past events gallery" subtitle="Memorable moments from our AI learning community" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((ev, i) => (
            <motion.figure
              key={ev.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={ev.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-semibold text-white">
                  {ev.title}
                  <span className="mt-1 block text-[11px] font-medium text-white/80">{ev.date}</span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  )
}
