import React from 'react'
import './WhyNowSection.css'

function WhyNowSection() {
  return (
    <section className="whynow" id="whynow">
      {/* Glow effect */}
      <div className="whynow__glow" />

      <h2 className="whynow__title">
        Почему это важно сейчас?
      </h2>

      <p className="whynow__subtitle">
        Наше исследование с ТОП-50 застройщиков показывает:
      </p>

      {/* Gradient strip behind stats */}
      <div className="whynow__strip" />

      <div className="whynow__stats">
        <div className="whynow__stat">
          <span className="whynow__stat-number">&gt;50%</span>
          <span className="whynow__stat-label">лидов</span>
          <p className="whynow__stat-desc">
            не доходят от заявки до ДДУ из-за разрозненных систем
          </p>
        </div>

        <div className="whynow__stat">
          <span className="whynow__stat-number">56%</span>
          <span className="whynow__stat-label">девелоперов</span>
          <p className="whynow__stat-desc">
            оценивают эффективность своей CRM лишь на 3 из 5
          </p>
        </div>

        <div className="whynow__stat">
          <span className="whynow__stat-number">в 2026</span>
          <span className="whynow__stat-label">ключевой фокус</span>
          <p className="whynow__stat-desc">
            на росте конверсий, а не объёме трафика
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyNowSection
