import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials.js'

export function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-soft)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
          className="relative flex flex-col gap-6 md:flex-row md:items-center"
        >
          <img
            src={t.avatar}
            alt=""
            className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-4 ring-purple-500/20"
          />
          <div>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">“{t.quote}”</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-[var(--color-ink)]">{t.name}</span>
              <span className="text-[var(--color-ink-muted)]">· {t.role}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="relative mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-gradient-to-r from-blue-500 to-pink-500' : 'w-2 bg-[var(--color-border)]'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
          >
            Prev
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  )
}
