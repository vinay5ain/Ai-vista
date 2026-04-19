import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { timeline } from '../data/team.js'

export function About() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
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
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
            About section
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)]">Learner-first AI education</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            AI VISTAAR is built to make AI accessible. We remove jargon, provide simple examples, and help learners build a strong foundation from day one.
          </p>
        </Card>
        <Card className="border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-purple-600/5 to-blue-600/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-600">
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">{item.title}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{item.text}</p>
          </Card>
        ))}
      </section>

      <section>
        <SectionTitle
          align="left"
          eyebrow="Story"
          title="From curiosity to innovation"
          subtitle="How AI VISTAAR empowers the next generation of AI learners"
        />
        <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            What began as a small group of passionate learners sharing knowledge has evolved into a vibrant community
            dedicated to democratizing AI education. We believe that artificial intelligence should be accessible to
            everyone, regardless of their background or experience level. Through collaborative learning, hands-on
            projects, and expert mentorship, AI VISTAAR continues to bridge the gap between complex AI concepts and
            practical understanding.
          </p>
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
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
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
