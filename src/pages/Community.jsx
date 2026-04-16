import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { forumCategories, forumThreads, sampleComments } from '../data/forum.js'

const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdb0wJJX36uhFJF9dIAxXGZMXJn4xMelBBTb4dRRUbHGK-igA/viewform?usp=dialog'
const whatsappUrl = 'https://www.whatsapp.com/'

export function Community() {
  const [liked, setLiked] = useState({})
  const [started, setStarted] = useState(false)
  const toggleLike = (id) => setLiked((m) => ({ ...m, [id]: !m[id] }))
  const startJoin = () => {
    window.open(googleFormUrl, '_blank', 'noopener')
    setStarted(true)
  }

  return (
    <div className="space-y-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
          Community
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Join the community, <span className="gradient-text">start with the form</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          Click the Join Community button to open the Google form. After starting the form, a WhatsApp link appears so you can continue joining the learning group.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
            Join flow
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-[var(--color-ink)]">
            Start with the Google form
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            This simple flow helps new learners join the AI VISTAAR community. Open the form, submit your details, then continue to WhatsApp for the next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={startJoin}>Open Join Form</Button>
            {started && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-purple-400/50"
              >
                Open WhatsApp Group
              </a>
            )}
          </div>
          {started && (
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              After submitting the form, open WhatsApp to continue joining the community.
            </p>
          )}
        </Card>

        <Card className="border border-purple-500/10 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">
            Why this flow?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Using the Google form keeps signup easy and familiar. Once you’ve started the form, the WhatsApp step helps bring every learner into the community chat.
          </p>
        </Card>
      </section>

      <section>
        <SectionTitle
          align="left"
          eyebrow="Spaces"
          title="Discussion categories"
          subtitle="Each lane has its own vibe—pick what matches your week."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {forumCategories.map((c, i) => (
            <Card key={c.id} delay={i * 0.06} className="relative overflow-hidden">
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-25 blur-2xl`}
              />
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{c.description}</p>
              <p className="mt-4 text-xs font-semibold text-purple-600 dark:text-purple-300">{c.threads} threads</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SectionTitle
            align="left"
            eyebrow="Threads"
            title="What the community is talking about"
          />
          <div className="space-y-4">
            {forumThreads.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{t.title}</h3>
                  <span className="text-xs text-[var(--color-ink-muted)]">{t.lastActive}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{t.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--color-ink-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">{t.author}</span>
                  <span>{t.replies} replies</span>
                  <div className="ml-auto flex gap-2">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleLike(t.id)}
                      className={`rounded-xl border px-3 py-1.5 text-xs font-semibold ${
                        liked[t.id]
                          ? 'border-pink-400 bg-pink-500/10 text-pink-700 dark:text-pink-200'
                          : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                      }`}
                    >
                      ♥ Like {liked[t.id] ? '(on)' : '(UI)'}
                    </motion.button>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold"
                    >
                      Reply (UI)
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <SectionTitle align="left" eyebrow="Thread detail" title="Comments preview" />
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold text-[var(--color-ink)]">Sample thread</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
              “Looking for critique on UX + model choice…”
            </p>
            <div className="mt-6 space-y-4 border-t border-[var(--color-border)] pt-5">
              {sampleComments.map((c) => (
                <div key={c.id} className="rounded-xl bg-[var(--color-surface)] p-4 ring-1 ring-[var(--color-border)]">
                  <div className="flex items-center justify-between gap-2 text-xs text-[var(--color-ink-muted)]">
                    <span className="font-semibold text-[var(--color-ink)]">{c.author}</span>
                    <span>{c.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{c.body}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--color-border)] px-2 py-1 text-[11px] font-semibold"
                    >
                      ♥ {c.likes}
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--color-border)] px-2 py-1 text-[11px] font-semibold"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
