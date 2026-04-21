import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyNowSection from './components/WhyNowSection'
import QuoteSection from './components/QuoteSection'
import StepsSection from './components/StepsSection'
import MeetingSection from './components/MeetingSection'
import BottomSection from './components/BottomSection'
import AuditFormModal from './components/AuditFormModal'
import PresentationFormModal from './components/PresentationFormModal'
import './App.css'

function App() {
  const [modal, setModal] = useState(null) // 'audit' | 'presentation' | null
  const openAudit = () => setModal('audit')
  const openPresentation = () => setModal('presentation')
  const closeModal = () => setModal(null)

  return (
    <div className="landing" id="top">
      <Navbar onOpenForm={openAudit} />
      <HeroSection onOpenForm={openAudit} onOpenPresentation={openPresentation} />
      <WhyNowSection />
      <QuoteSection />
      <StepsSection />
      <MeetingSection />
      <BottomSection />
      <AuditFormModal isOpen={modal === 'audit'} onClose={closeModal} />
      <PresentationFormModal isOpen={modal === 'presentation'} onClose={closeModal} />
    </div>
  )
}

export default App
