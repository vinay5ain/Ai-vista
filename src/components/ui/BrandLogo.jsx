/** Stylized mark inspired by book + sun + orbit (simplified for SVG) */
export function BrandLogo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg-sun" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="lg-orbit" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="14" r="9" fill="url(#lg-sun)" opacity="0.95" />
      <path
        d="M12 26c2.5 3 6 5 8 5s5.5-2 8-5"
        fill="none"
        stroke="url(#lg-orbit)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M14 26V18l4-3 4 3v8" fill="#0c4a6e" opacity="0.95" />
      <circle cx="28" cy="10" r="1.4" fill="#a855f7" />
      <circle cx="10" cy="12" r="1.1" fill="#38bdf8" />
    </svg>
  )
}
