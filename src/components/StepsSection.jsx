import React from 'react'
import './StepsSection.css'

const CARDS = [
  {
    icon: 'icon-bubble.png',
    title: 'Диагностика модели продаж',
    text: 'Найдем разрывы в данных между системами и покажем, где именно вы теряете прибыль',
  },
  {
    icon: 'icon-trophy.png',
    title: 'Бенчмарк с лучшими практиками',
    text: 'Сравним ваш кейс с практиками 150+ застройщиков, с которыми мы работаем 10+ лет',
  },
  {
    icon: 'icon-switch.png',
    title: 'План действий',
    text: '5-10 конкретных шагов с расчетом ROI: от быстрых побед до системных изменений',
  },
]

function StepsSection() {
  const base = import.meta.env.BASE_URL
  return (
    <section className="audit" id="steps">
      <div className="audit__container">
        <h2 className="audit__title">
          Проведем аудит вашего <br /> коммерческого блока
        </h2>
        <div className="audit__grid">
          {CARDS.map((c, i) => (
            <article key={i} className="audit__card">
              <img className="audit__icon" src={`${base}images/new/${c.icon}`} alt="" aria-hidden />
              <h3 className="audit__card-title">{c.title}</h3>
              <p className="audit__card-text">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
