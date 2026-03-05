import React from 'react'
import './StepsSection.css'

function StepsSection() {
  return (
    <section className="steps">
      {/* Background large numbers */}
      <span className="steps__bignumber steps__bignumber--1">1</span>
      <span className="steps__bignumber steps__bignumber--2">2</span>
      <span className="steps__bignumber steps__bignumber--3">3</span>

      <h2 className="steps__title">За 60 минут</h2>

      {/* Horizontal line */}
      <div className="steps__line" />

      {/* Step circles and labels */}
      <div className="steps__items">
        <div className="steps__item steps__item--1">
          <div className="steps__circle">
            <div className="steps__dot steps__dot--small" />
          </div>
          <p className="steps__label">
            Разберём<br />путь клиента
          </p>
        </div>

        <div className="steps__item steps__item--2">
          <div className="steps__circle">
            <div className="steps__dot steps__dot--medium" />
          </div>
          <p className="steps__label">
            Выявим<br />уязвимые места
          </p>
        </div>

        <div className="steps__item steps__item--3">
          <div className="steps__circle steps__circle--glow">
            <div className="steps__dot steps__dot--large" />
          </div>
          <p className="steps__label">
            Предложим<br />цифровые решения<br />для роста конверсии
          </p>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
