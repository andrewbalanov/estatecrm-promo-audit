import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import StepsSection from './components/StepsSection'
import MeetingSection from './components/MeetingSection'
import WhyNowSection from './components/WhyNowSection'
import QuoteSection from './components/QuoteSection'
import BottomSection from './components/BottomSection'
import AuditFormModal from './components/AuditFormModal'
import './App.css'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const openForm = () => setFormOpen(true)
  const closeForm = () => setFormOpen(false)

  return (
    <div className="landing">
      <HeroSection onOpenForm={openForm} />
      <StepsSection />
      <MeetingSection onOpenForm={openForm} />
      <WhyNowSection />
      <QuoteSection />
      <BottomSection onOpenForm={openForm} />
      <AuditFormModal isOpen={formOpen} onClose={closeForm} />
    </div>
  )
}

export default App
