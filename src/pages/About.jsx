import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'

const highlights = [
  {
    title: 'Our mission',
    description:
      'Make AI education simple, practical, and welcoming so every learner can build confidence from day one.',
  },
  {
    title: 'Our vision',
    description:
      'Build a strong learner-first AI community where students, beginners, and builders grow together through shared learning.',
  },
  {
    title: 'What we do',
    description:
      'We publish beginner-friendly resources, host community activities, and guide learners through real-world AI tools and workflows.',
  },
]

const values = [
  'Clarity over complexity',
  'Practice over theory-only learning',
  'Community support over solo struggle',
  'Consistency and curiosity every day',
]

export function About() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          About AI VISTAAR
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          AI VISTAAR is a learner-first community focused on making artificial intelligence approachable
          for students and beginners. We simplify complex ideas into clear, practical learning steps.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <Card key={item.title} delay={i * 0.05} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {item.description}
            </p>
          </Card>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Why we exist"
            title="Learning AI should feel exciting, not overwhelming"
            subtitle="We designed AI VISTAAR to support beginners with practical direction and a helpful peer network."
          />
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Many learners stop early because AI feels too technical at the start. We reduce that friction
            with simple explanations, beginner-safe guidance, and a community where asking questions is
            encouraged. Our goal is steady progress, not pressure.
          </p>
        </div>

        <Card className="p-6">
          <p className="font-display text-lg font-bold text-[var(--color-ink)]">Core values</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-muted)]">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-600" aria-hidden />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  )
}
