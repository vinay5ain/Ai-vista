import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Blog } from './pages/Blog.jsx'
import { Community } from './pages/Community.jsx'
import { Events } from './pages/Events.jsx'
import { Members } from './pages/Members.jsx'
import { MemberProfile } from './pages/MemberProfile.jsx'
import { Contact } from './pages/Contact.jsx'
import { FAQ } from './pages/FAQ.jsx'
import { Privacy } from './pages/Privacy.jsx'
import { Terms } from './pages/Terms.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { ChatbotWidget } from './components/ui/ChatbotWidget.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ChatbotWidget />
    </>
  )
}
