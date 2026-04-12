import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { TestimonialSlider } from '../components/ui/TestimonialSlider.jsx'
import { communityStats } from '../data/stats.js'
import { blogPosts } from '../data/blogs.js'

const featured = blogPosts.slice(0, 3)

export function Home() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-16 shadow-[var(--shadow-soft)] sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300"
          >
            Nonprofit AI community
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-6xl"
          >
            Learn AI together.{' '}
            <span className="gradient-text">Grow together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-[var(--color-ink-muted)]"
          >
            AI VISTAAR – VIBGYOR OF TECHNOLOGY is a welcoming space for learners ages 12–30: discussions,
            events, and peer mentorship—community for learners, by learners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink to="/events">Explore events</ButtonLink>
            <ButtonLink to="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
          </motion.div>
          <p className="mt-6 text-xs text-[var(--color-ink-muted)]">
            Frontend demo only—no accounts or data collection on this site.
          </p>
        </div>
      </section>

      <MotionSection className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Intro"
            title="Curious-first, kind-by-default"
            subtitle="We believe AI literacy should feel social—not stressful. Start where you are, share what you build, and learn alongside people who remember being beginners."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-ink-muted)]">
            {[
              'Weekly threads, study jams, and show-and-tell showcases',
              'Mentorship that looks like peers cheering you on',
              'Ethics woven in—not bolted on as an afterthought',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-purple-600 dark:text-purple-300">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to="/about" variant="secondary">
              Our story
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: 'Community rhythm', d: 'Forum categories mirror how real learners progress—from setup to portfolio.' },
            { t: 'Playful polish', d: 'Motion, gradients, and cards keep things modern without feeling corporate.' },
            { t: 'Inclusive by design', d: 'Age-spanning copy, gentle jargon, and room for many learning speeds.' },
            { t: 'Events that fit life', d: 'Hybrid-friendly schedules and recaps so nobody misses out.' },
          ].map((c, i) => (
            <Card key={c.t} delay={i * 0.05} className="p-5">
              <p className="font-display text-base font-bold text-[var(--color-ink)]">{c.t}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{c.d}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <section>
        <SectionTitle
          eyebrow="Featured"
          title="Fresh from the community blog"
          subtitle="Dummy posts for UI—swap in your real stories anytime."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <Card key={post.id} delay={i * 0.08} className="overflow-hidden p-0">
              <div className="relative h-40 overflow-hidden">
                <img src={post.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-[var(--color-ink-muted)]">
                  {post.date} · {post.author}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-[var(--color-ink)]">{post.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--color-ink-muted)]">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="mt-4 inline-flex text-sm font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-300"
                >
                  View blog →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-500/10 p-8 sm:p-12">
        <SectionTitle
          eyebrow="Impact (demo data)"
          title="Momentum you can feel"
          subtitle="Numbers are illustrative—your real metrics will shine here."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 text-center shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-3xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Voices"
          title="Learners are our north star"
          subtitle="A rotating snapshot of what people say in community spaces."
        />
        <TestimonialSlider />
      </section>

      <MotionSection className="relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-[1px] shadow-[var(--shadow-glow)]">
        <div className="rounded-[22px] bg-[var(--color-surface-elevated)] px-8 py-12 text-center sm:px-12">
          <h3 className="font-display text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            Ready to learn in public?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-ink-muted)]">
            Jump into the forum UI, RSVP an event, or say hello on WhatsApp—this frontend is your canvas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/community">Open community</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Contact the team
            </ButtonLink>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
