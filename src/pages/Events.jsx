import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { CalendarStrip } from '../components/ui/CalendarStrip.jsx'
import { upcomingEvents, pastEvents } from '../data/events.js'

export function Events() {
  return (
    <div className="space-y-16">
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
              {ev.description && (
                <div className="p-4">
                  <p className="text-xs text-[var(--color-ink-muted)] line-clamp-3">{ev.description}</p>
                  {ev.organizedBy && (
                    <p className="mt-2 text-xs font-semibold text-purple-600">Organized by: {ev.organizedBy}</p>
                  )}
                </div>
              )}
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  )
}
