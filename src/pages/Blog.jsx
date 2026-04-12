import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import { blogCategories, blogPosts } from '../data/blogs.js'

export function Blog() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const featured = useMemo(() => blogPosts.find((p) => p.featured), [])

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = cat === 'All' || p.category === cat
      const text = `${p.title} ${p.excerpt} ${p.author}`.toLowerCase()
      const matchQ = !q.trim() || text.includes(q.toLowerCase())
      return matchCat && matchQ
    })
  }, [q, cat])

  return (
    <div className="space-y-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
          Blog
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Ideas worth <span className="gradient-text">sharing aloud</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          Search and filters are UI-only—perfect for prototyping editorial workflows.
        </p>
      </header>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-xl flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-muted)]">
            🔎
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts (UI only)…"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] py-3 pl-10 pr-4 text-sm text-[var(--color-ink)] outline-none ring-purple-500/30 focus:ring-2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <motion.button
              key={c}
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                c === cat
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-md'
                  : 'border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-ink-muted)]'
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </div>

      {featured && (
        <section className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img src={featured.image} alt="" className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-300">
                {featured.category}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-[var(--color-ink)]">{featured.title}</h2>
              <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{featured.excerpt}</p>
              <p className="mt-4 text-xs text-[var(--color-ink-muted)]">
                {featured.date} · {featured.author}
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex w-fit items-center rounded-xl bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-surface-elevated)]"
              >
                Read (UI)
              </motion.button>
            </div>
          </div>
        </section>
      )}

      <section>
        <SectionTitle
          align="left"
          eyebrow="Library"
          title="All posts"
          subtitle={`Showing ${filtered.length} results`}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post, i) => (
            <Card key={post.id} delay={i * 0.05} className="overflow-hidden p-0">
              <div className="h-44 overflow-hidden">
                <img src={post.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-ink-muted)]">
                  <span className="rounded-full bg-[var(--color-surface)] px-2 py-1 font-semibold text-purple-700 dark:text-purple-200">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-[var(--color-ink)]">{post.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
