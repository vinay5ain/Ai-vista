const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

/** Basic month grid UI (static demo for April 2026) */
export function CalendarStrip() {
  const dates = Array.from({ length: 30 }, (_, i) => i + 1)
  const highlighted = new Set([4, 11, 18, 26])

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-[var(--shadow-soft)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
            Calendar
          </p>
          <p className="font-display text-xl font-bold text-[var(--color-ink)]">April 2026</p>
        </div>
        <span className="rounded-full bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-500/15 px-3 py-1 text-xs font-semibold text-purple-700">
          Demo UI
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[var(--color-ink-muted)]">
        {days.map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {dates.map((n) => (
          <div
            key={n}
            className={`flex h-9 items-center justify-center rounded-lg ${
              highlighted.has(n)
                ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 font-bold text-white shadow-md'
                : 'text-[var(--color-ink)] hover:bg-[var(--color-border)]/50'
            }`}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}
