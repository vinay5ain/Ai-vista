import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ButtonLink } from '../components/ui/Button.jsx'
import { members } from '../data/members.js'

export function MemberProfile() {
  const { id } = useParams()
  const member = useMemo(() => members.find((m) => m.id === id), [id])
  const [following, setFollowing] = useState(false)

  if (!member) {
    return (
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-10 text-center">
        <h1 className="font-display text-2xl font-bold">Member not found</h1>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">This id is not in the static dataset.</p>
        <div className="mt-6 flex justify-center">
          <ButtonLink to="/members">Back to members</ButtonLink>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <Link to="/members" className="text-sm font-semibold text-purple-600 dark:text-purple-300">
        ← Members
      </Link>

      <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]">
        <div className="h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
        <div className="-mt-16 flex flex-col gap-6 px-6 pb-10 sm:flex-row sm:items-end sm:px-10">
          <img
            src={member.image}
            alt={member.name}
            className="h-32 w-32 rounded-3xl object-cover ring-4 ring-[var(--color-surface-elevated)] sm:h-36 sm:w-36"
          />
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-extrabold text-[var(--color-ink)]">{member.name}</h1>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{member.role}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-300">
                Joined {member.joined}
              </p>
            </div>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => setFollowing((f) => !f)}
              className={`rounded-2xl px-5 py-2.5 text-sm font-semibold ${
                following
                  ? 'border border-[var(--color-border)] bg-[var(--color-surface)]'
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-lg'
              }`}
            >
              {following ? 'Following (UI)' : 'Follow (UI)'}
            </motion.button>
          </div>
        </div>

        <div className="grid gap-8 border-t border-[var(--color-border)] px-6 py-10 sm:grid-cols-3 sm:px-10">
          <div className="sm:col-span-2 space-y-4">
            <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">About</h2>
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{member.bio}</p>
            <div className="rounded-2xl bg-[var(--color-surface)] p-4 text-sm text-[var(--color-ink-muted)] ring-1 ring-[var(--color-border)]">
              <span className="font-semibold text-[var(--color-ink)]">Current focus:</span> {member.focus}
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm">
            <p className="font-display text-sm font-bold text-[var(--color-ink)]">Activity (demo)</p>
            <ul className="space-y-2 text-[var(--color-ink-muted)]">
              <li>· Hosted 1 study jam</li>
              <li>· 12 helpful replies</li>
              <li>· 3 showcase posts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
