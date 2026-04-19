export function Privacy() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-[var(--color-ink)]">Privacy Policy</h1>
      <p className="text-sm text-[var(--color-ink-muted)]">Last updated: April 12, 2026 · Static demo copy</p>

      <section className="mt-10 space-y-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
        <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">Summary</h2>
        <p>
          This repository ships a frontend-only marketing and community UI. It does not include accounts,
          authentication, analytics hooks, or a database. Forms and buttons labeled “UI” do not collect or
          transmit personal data.
        </p>

        <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">Third-party links</h2>
        <p>
          Outbound links (for example LinkedIn, X, WhatsApp, or map embeds) are governed by those services’
          respective policies. Review them before sharing personal information.
        </p>

        <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">Contact</h2>
        <p>
          For privacy questions related to the real AI VISTAAR organization, email{' '}
          <a className="font-semibold text-purple-600" href="mailto:aivistaarorg@gmail.com">
            aivistaarorg@gmail.com
          </a>
          .
        </p>
      </section>
    </article>
  )
}
