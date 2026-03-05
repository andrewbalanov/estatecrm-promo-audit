import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './HeroSection.css'

function HeroSection({ onOpenForm }) {
  const [time, setTime] = useState({ hours: 1, minutes: 45, seconds: 55 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={`${import.meta.env.BASE_URL}images/macbook-bg.png`} alt="" className="hero__bg-img" />
      </div>
      <Navbar onOpenForm={onOpenForm} />
      <div className="hero__content">
        <div className="hero__shadow" />
        <h1 className="hero__title">
          Построим эталонную систему для управления продажами девелопера
        </h1>
        <button className="hero__button" onClick={onOpenForm} type="button">
          Записаться на аудит
        </button>
        <p className="hero__timer">
          Бесплатно ещё 3 дня {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
        </p>
      </div>
    </section>
  )
}

export default HeroSection
