import React from 'react'
import './HeroSection.css'

function HeroSection({ onOpenForm, onOpenPresentation }) {
  const base = import.meta.env.BASE_URL

  return (
    <section className="hero" id="hero">
      <img className="hero__gear-corner" src={`${base}images/new/gear-corner.png`} alt="" aria-hidden />
      <img className="hero__gear-main" src={`${base}images/new/hero-gear.png`} alt="" aria-hidden />

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">Бесплатный аудит для застройщиков</span>
          <h1 className="hero__title">
            Срок сделки вырос в&nbsp;2&nbsp;раза.{' '}
            <span className="hero__title-accent">Ваша CRM к&nbsp;этому готова?</span>
          </h1>
          <p className="hero__subtitle">
            Покажем, из-за каких процессов между маркетингом, продажами и&nbsp;финансами вы&nbsp;теряете прибыль
          </p>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" type="button" onClick={onOpenForm}>
              Записаться на аудит
            </button>
            <button
              className="hero__btn hero__btn--ghost"
              type="button"
              onClick={onOpenPresentation}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Скачать кейсы
            </button>
          </div>
        </div>

        <div className="hero__visual">
          <img className="hero__dashboard" src={`${base}images/new/hero-dashboard.png`} alt="EstateCRM — Аналитика продаж" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
