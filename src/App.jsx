import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyNowSection from './components/WhyNowSection'
import QuoteSection from './components/QuoteSection'
import StepsSection from './components/StepsSection'
import MeetingSection from './components/MeetingSection'
import BottomSection from './components/BottomSection'
import AuditFormModal from './components/AuditFormModal'
import './App.css'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const openForm = () => setFormOpen(true)
  const closeForm = () => setFormOpen(false)

  return (
    <div className="landing">
      <Navbar onOpenForm={openForm} />
      <HeroSection onOpenForm={openForm} />
      <WhyNowSection />
      <QuoteSection />
      <StepsSection />
      <MeetingSection />
      <BottomSection onOpenForm={openForm} />
      <AuditFormModal isOpen={formOpen} onClose={closeForm} />
    </div>
  )
}

export default App
