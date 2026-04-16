import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { MotionSection } from '../components/ui/MotionSection.jsx'
import { TestimonialSlider } from '../components/ui/TestimonialSlider.jsx'
import { communityStats } from '../data/stats.js'
import { blogPosts } from '../data/blogs.js'
import heroBackground from '../assets/Ai-vista.gif'

const featured = blogPosts.slice(0, 3)

export function Home() {
  return (
    <div className="home-bg space-y-24">

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-16 shadow-[var(--shadow-soft)] sm:px-12 sm:py-20"
      >
        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300"
          >
            AI VISTAAR • Vistaar of Technology
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
             className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            AI VISTAR – <span className="gradient-text">Vistaar of Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
         className="mt-5 text-lg text-[#E0E0E0]"
          >
            A platform created for learners, by learners. We simplify the world of Artificial Intelligence so every learner can start fast and stay confident.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink to="/community" variant="accent">
              Join community
            </ButtonLink>
            <ButtonLink
              to="/about"
              variant="ghost"
              className="border border-white/20 bg-white/10 text-white hover:bg-white/15"
            >
              Learn more
            </ButtonLink>
          </motion.div>

          <p className="mt-6 text-xs text-[var(--color-ink-muted)]">
            Beginner-friendly, mobile-first, and fast-loading—designed to make AI easy to explore.
          </p>
        </div>
      </section>

      <MotionSection className="grid gap-10 lg:grid-cols-3">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">
            Learn
          </p>
          <h2 className="mt-3 text-xl font-bold text-[var(--color-ink)]">AI concepts made simple</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            Clear explanations, friendly examples, and tool guides so beginners can start with confidence.
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">
            Explore
          </p>
          <h2 className="mt-3 text-xl font-bold text-[var(--color-ink)]">Tools and practical paths</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            Discover AI tools, workflows, and learning tips that help you move from curiosity to real practice.
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300">
            Connect
          </p>
          <h2 className="mt-3 text-xl font-bold text-[var(--color-ink)]">A friendly learning community</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            Join learners, ask questions, and grow together with simple guidance for every step of the journey.
          </p>
        </Card>
      </MotionSection>

      {/* INTRO */}
      <MotionSection className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Intro"
            title="Curious-first, kind-by-default"
            subtitle="We believe AI literacy should feel social—not stressful."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} delay={i * 0.05} className="p-5">
              <p className="font-bold">Feature {i}</p>
              <p className="text-sm text-[var(--color-ink-muted)]">
                Sample description text.
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>

      {/* BLOG */}
      <section>
        <SectionTitle eyebrow="Featured" title="Community Blog" />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <Card key={post.id} delay={i * 0.08} className="p-5">
              <p className="font-bold">{post.title}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="p-10 rounded-3xl bg-black/10">
        <SectionTitle eyebrow="Impact" title="Community Growth" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((s) => (
            <div key={s.id} className="p-4 text-center">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <SectionTitle eyebrow="Voices" title="What learners say" />
        <TestimonialSlider />
      </section>

      {/* CTA */}
      <MotionSection className="p-10 text-center rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <h3 className="text-3xl font-bold text-white">
          Ready to start learning?
        </h3>
        <div className="mt-6 flex justify-center gap-4">
          <ButtonLink to="/community">Open Community</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </MotionSection>

    </div>
    
  )
}

