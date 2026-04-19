import { socialLinks } from '../data/social.js'

export function Contact() {
  return (
    <div className="space-y-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Connect with AI VISTAAR
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
          Use the links below to reach us directly. No contact form or map embed is displayed here.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">Reach us</h2>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            For real conversations, connect via email or our social channels below.
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            {socialLinks.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-purple-600 hover:text-purple-500"
                >
                  {s.label}
                </a>
                <p className="text-xs text-[var(--color-ink-muted)]">{s.handle}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">Community</h2>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            Ready to join our AI learning community? Fill out our quick form to get started and connect with fellow learners.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRHczfuEWb0SoDf8TlHHMb2BtTaSaWLfO9qYnuJct4-ipkPA/viewform?usp=sharing&ouid=115423476678648782359"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-400/20 transition hover:shadow-xl"
          >
            Go to Join Community
          </a>
        </div>
      </div>
    </div>
  )
}
