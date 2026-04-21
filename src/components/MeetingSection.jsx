import React from 'react'
import './MeetingSection.css'

const STEPS = [
  {
    num: '01',
    duration: '5 мин',
    title: 'Заполняете анкету',
    text: 'Базовые данные: количество проектов, текущая CRM, структура отдела продаж. Мы готовимся к встрече заранее',
  },
  {
    num: '02',
    duration: '60 мин',
    title: 'Экспресс-аудит онлайн',
    text: 'Разбираем вашу воронку, логику CRM и связанных сервисов – ищем разрывы и точки роста в режиме живого разговора',
  },
  {
    num: '03',
    duration: '3 дня',
    title: 'Получаете отчет',
    text: 'Список разрывов, из-за которых вы теряете деньги, бенчмарк с лучшими практиками и план действий с измеримым ROI',
  },
]

function MeetingSection() {
  const base = import.meta.env.BASE_URL
  return (
    <section className="meeting" id="meeting">
      <img className="meeting__point" src={`${base}images/new/point-small.png`} alt="" aria-hidden />
      <div className="meeting__container">
        <h2 className="meeting__title">
          Как будет <br /> проходить встреча
        </h2>
        <div className="meeting__grid">
          {STEPS.map((s, i) => (
            <article key={i} className={`meeting__card meeting__card--${i + 1}`}>
              <header className="meeting__card-head">
                <span className="meeting__num">{s.num}</span>
                <span className="meeting__duration">{s.duration}</span>
              </header>
              <h3 className="meeting__card-title">{s.title}</h3>
              <p className="meeting__card-text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetingSection
