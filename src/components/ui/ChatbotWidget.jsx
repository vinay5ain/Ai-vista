import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const seeds = [
  { from: 'bot', text: 'Hi! I’m VibgyorBot (UI demo). Ask about events, blogs, or how to join.' },
]

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(seeds)
  const [input, setInput] = useState('')

  const send = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages((m) => [...m, { from: 'user', text: trimmed }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: 'Thanks! This is a static frontend—connect on WhatsApp or email for real answers.',
        },
      ])
    }, 500)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="flex h-[min(420px,70vh)] w-[min(360px,92vw)] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-2xl shadow-purple-500/20"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-4 py-3 text-white">
              <div>
                <p className="text-sm font-bold">VibgyorBot</p>
                <p className="text-xs text-white/80">UI preview · no backend</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/15 px-2 py-1 text-xs font-semibold hover:bg-white/25"
              >
                Close
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'ml-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-[var(--color-surface)] text-[var(--color-ink)] ring-1 ring-[var(--color-border)]'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={send} className="border-t border-[var(--color-border)] p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none ring-purple-500/30 focus:ring-2"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[var(--color-ink)] px-3 py-2 text-sm font-semibold text-[var(--color-surface-elevated)]"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        layout
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-2xl text-white shadow-lg shadow-purple-500/30"
        aria-label="Open chat assistant"
      >
        💬
      </motion.button>
    </div>
  )
}
