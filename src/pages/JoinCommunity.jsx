import { motion } from 'framer-motion'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'
import aiVistaGif from '../assets/Ai-vista.gif'

export function JoinCommunity() {
  const whatsappLink = 'https://chat.whatsapp.com/ai-vista' // Replace with actual WhatsApp group link

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background Image Section */}
      <div
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4 sm:mx-6 my-8"
        style={{
          backgroundImage: `url(${aiVistaGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Join the AI VISTAAR Community
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md mb-6">
            One tap to join the WhatsApp community for AI news, learning, and collaboration.
          </p>
          {/* Front Join Community Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="join-hero-button inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-yellow-300 via-cyan-400 to-blue-500 text-slate-950 font-extrabold text-lg shadow-2xl shadow-blue-500/30 ring-1 ring-white/30 border border-white/10 transition-all duration-300"
          >
            <span>Join WhatsApp Group</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.893-2.992 2.132-4.1 3.691C2.38 10.558 1.643 12.643 1.643 15.01c0 2.474.623 4.869 1.808 6.994l-1.907 6.994 7.324-2.04c2.039 1.122 4.316 1.714 6.514 1.714 8.227 0 14.918-6.679 14.918-14.899C24 6.679 17.309 0 9.082 0c-2.198 0-4.475.592-6.514 1.714L1.707 0l1.907 6.994C2.271 10.141 1.643 12.537 1.643 15.01" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'AI Opportunities',
              description: 'Get project ideas, learning paths, and live discussion prompts every week.',
              accent: 'from-yellow-300 to-blue-300',
            },
            {
              title: 'Community Support',
              description: 'Ask questions, share wins, and get fast guidance from fellow members.',
              accent: 'from-cyan-300 to-indigo-300',
            },
            {
              title: 'Events & Collabs',
              description: 'Join sessions, hackathons, and group projects with friendly mentors.',
              accent: 'from-pink-300 to-purple-400',
            },
          ].map((item) => (
            <article key={item.title} className="join-card p-6 rounded-3xl border border-white/15 bg-white/80 backdrop-blur-xl shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_35px_100px_-35px_rgba(59,130,246,0.25)]">
              <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${item.accent}`} />
              <h2 className="text-xl font-semibold text-[var(--color-ink)] mb-2">{item.title}</h2>
              <p className="text-[var(--color-ink-muted)] leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
