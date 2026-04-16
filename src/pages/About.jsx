import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { leadershipTeam, timeline } from '../data/team.js'

export function About() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
          About AI VISTAAR
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          AI Vistaar – <span className="gradient-text">Vistaar of Technology</span>
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          A platform created for learners, by learners. We simplify the world of Artificial Intelligence so beginners can learn faster and stay inspired.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="border-purple-500/20 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-500/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-300">
            About section
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)]">Learner-first AI education</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            AI VISTAAR is built to make AI accessible. We remove jargon, provide simple examples, and help learners build a strong foundation from day one.
          </p>
        </Card>
        <Card className="border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-purple-600/5 to-blue-600/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-300">
            Website purpose
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)]">Share knowledge, simplify concepts</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Share AI knowledge, explore tools, and build a learning community that welcomes beginners and makes progress feel achievable.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Beginner-friendly', text: 'Intro content, explanations, and resources designed for first-time learners.' },
          { title: 'Fast loading', text: 'Lightweight pages and clean layout keep your browsing smooth on mobile.' },
          { title: 'Clear sections', text: 'Simple page structure and easy navigation help you find what matters.' },
          { title: 'AI theme', text: 'A modern, calm palette and polished layout support learning without distraction.' },
        ].map((item) => (
          <Card key={item.title} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">{item.title}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{item.text}</p>
          </Card>
        ))}
      </section>

      <section>
        <SectionTitle
          align="left"
          eyebrow="Story"
          title="From study calls to a constellation"
          subtitle="A short narrative arc for the page—replace with your real milestones anytime."
        />
        <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            What started as late-night explanations and shared notebooks became a rhythm: weekly themes,
            mentor office hours, and showcases where beginners and builders share the same stage. Today, AI
            VISTAAR is a nonprofit-minded community that keeps the learner’s voice in the center.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Team" title="People behind the scenes" subtitle="Sample portraits and roles." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((person, i) => (
            <Card key={person.id} delay={i * 0.06} className="overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-bold text-[var(--color-ink)]">{person.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-300">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{person.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Timeline" title="How the story unfolds" />
        <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-pink-500 sm:before:left-[15px]">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-6 pl-10 sm:pl-12"
            >
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-[10px] font-bold text-white shadow-md sm:h-8 sm:w-8 sm:text-xs">
                {i + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-300">
                  {item.year}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-[var(--color-ink)]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
