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
            className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600"
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
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRHczfuEWb0SoDf8TlHHMb2BtTaSaWLfO9qYnuJct4-ipkPA/viewform?usp=sharing&ouid=115423476678648782359"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors bg-[#F4CE14] text-slate-950 shadow-lg shadow-[#F4CE14]/30 hover:shadow-[#F4CE14]/40"
            >
              Join community
            </motion.a>
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
            Learn
          </p>
          <h2 className="mt-3 text-xl font-bold text-[var(--color-ink)]">AI concepts made simple</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            Clear explanations, friendly examples, and tool guides so beginners can start with confidence.
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
            Explore
          </p>
          <h2 className="mt-3 text-xl font-bold text-[var(--color-ink)]">Tools and practical paths</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            Discover AI tools, workflows, and learning tips that help you move from curiosity to real practice.
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
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
          {[
            { title: 'Interactive Learning', description: 'Hands-on AI projects and coding challenges designed for beginners.' },
            { title: 'Expert Mentorship', description: 'Connect with experienced AI practitioners and get personalized guidance.' },
            { title: 'Community Projects', description: 'Collaborate on real-world AI applications and build your portfolio.' },
            { title: 'Latest AI Trends', description: 'Stay updated with cutting-edge AI developments and industry insights.' },
          ].map((item, i) => (
            <Card key={i} delay={i * 0.05} className="p-5">
              <p className="font-bold text-[var(--color-ink)]">{item.title}</p>
              <p className="text-sm text-[var(--color-ink-muted)]">
                {item.description}
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
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">{post.category}</p>
              <p className="mt-2 font-bold text-[var(--color-ink)]">{post.title}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{post.excerpt}</p>
              <p className="mt-3 text-xs text-[var(--color-ink-muted)]">By {post.author} • {post.date}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-200">
        <SectionTitle eyebrow="Impact" title="Community Growth" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((s) => (
            <div key={s.id} className="p-4 text-center">
              <p className="text-3xl font-bold text-[var(--color-ink)]">{s.value}</p>
              <p className="text-sm text-[var(--color-ink-muted)] font-medium">{s.label}</p>
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
    
    </div>
    
  )
}

