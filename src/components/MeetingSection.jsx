import React from 'react'
import './MeetingSection.css'

function MeetingSection() {
  return (
    <section className="meeting">
      {/* Glow effect */}
      <div className="meeting__glow" />

      <h2 className="meeting__title">
        Что вы получите<br />за одну встречу
      </h2>

      <a href="#book" className="meeting__button">
        Забронировать слот для встречи
      </a>

      <div className="meeting__cards">
        <img src="/images/card1-leads.png" alt="Узнаете, на каких этапах теряются лиды и деньги" className="meeting__card-render" />
        <img src="/images/card2-cycle.png" alt="Поймёте, как сократить цикл сделки" className="meeting__card-render" />
        <img src="/images/card3-tools.png" alt="Получите набор инструментов" className="meeting__card-render" />
      </div>
    </section>
  )
}

export default MeetingSection
