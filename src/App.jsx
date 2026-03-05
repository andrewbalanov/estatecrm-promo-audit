import React from 'react'
import HeroSection from './components/HeroSection'
import StepsSection from './components/StepsSection'
import MeetingSection from './components/MeetingSection'
import WhyNowSection from './components/WhyNowSection'
import QuoteSection from './components/QuoteSection'
import BottomSection from './components/BottomSection'
import './App.css'

function App() {
  return (
    <div className="landing">
      <HeroSection />
      <StepsSection />
      <MeetingSection />
      <WhyNowSection />
      <QuoteSection />
      <BottomSection />
    </div>
  )
}

export default App
