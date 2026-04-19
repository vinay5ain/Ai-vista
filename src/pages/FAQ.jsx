import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqItems } from '../data/faq.js'

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          FAQ
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Answers, <span className="gradient-text">without the fluff</span>
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)]">
          Find answers to common questions about AI VISTAAR, our programs, and how to get started with AI learning.
        </p>
      </header>

      <div className="space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = open === i
          return (
            <motion.div
              key={item.q}
              layout
              className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-base font-semibold text-[var(--color-ink)]">{item.q}</span>
                <span className="text-lg text-purple-600">{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[var(--color-border)]"
                  >
                    <p className="px-5 py-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
