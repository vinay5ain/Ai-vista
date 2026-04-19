import { motion } from 'framer-motion'
import groupPic from '../assets/group_pic.png'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { leadershipTeam } from '../data/team.js'

export function Team() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          Meet the team
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          AI VISTAAR Team
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          Our learning community is built by a passionate team of founders, creators, and mentors who are committed to making AI education simple and accessible.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Team"
            title="The people behind AI VISTAAR"
            subtitle="Learn about the founders, mentors, and community builders who bring the platform to life."
          />
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            From community leadership to design and content, every team member helps make AI VISTAAR a welcoming place for beginners and curious learners.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]">
          <motion.img
            src={groupPic}
            alt="AI VISTAAR team group"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <section>
        <SectionTitle
          align="left"
          eyebrow="Leadership"
          title="Our core team"
          subtitle="Meet the people who are building AI VISTAAR, one idea at a time."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((person, i) => (
            <Card key={`${person.id}-${i}`} delay={i * 0.06} className="overflow-hidden p-0">
              <div className="h-52 overflow-hidden">
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
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{person.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
