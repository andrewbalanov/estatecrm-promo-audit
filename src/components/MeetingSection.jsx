import React from 'react'
import './MeetingSection.css'

function MeetingSection({ onOpenForm }) {
  return (
    <section className="meeting" id="meeting">
      {/* Glow effect */}
      <div className="meeting__glow" />

      <h2 className="meeting__title">
        Что вы получите<br />за одну встречу
      </h2>

      <button className="meeting__button" onClick={onOpenForm} type="button">
        Забронировать слот для встречи
      </button>

      <div className="meeting__cards">
        <img src={`${import.meta.env.BASE_URL}images/card1-leads.png`} alt="Узнаете, на каких этапах теряются лиды и деньги" className="meeting__card-render" />
        <img src={`${import.meta.env.BASE_URL}images/card2-cycle.png`} alt="Поймёте, как сократить цикл сделки" className="meeting__card-render" />
        <img src={`${import.meta.env.BASE_URL}images/card3-tools.png`} alt="Получите набор инструментов" className="meeting__card-render" />
      </div>
    </section>
  )
}

export default MeetingSection
