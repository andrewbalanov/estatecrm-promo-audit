import React from 'react'
import './WhyNowSection.css'

const STATS = [
  { value: '>50%', label: 'лидов', desc: 'не доходят от заявки до ДДУ из-за разрозненных систем' },
  { value: 'х2', label: 'цикл сделки', desc: 'покупатели дольше и внимательнее выбирают квартиру' },
  { value: '31%', label: 'доля', desc: 'антирекорд проданных квартир в новостройках' },
]

function WhyNowSection() {
  return (
    <section className="whynow" id="whynow">
      <div className="whynow__container">
        <div className="whynow__eyebrow">РЫНОК НЕДВИЖИМОСТИ 2026</div>
        <h2 className="whynow__title">
          Почему текущая модель продаж <br /> больше не работает
        </h2>

        <div className="whynow__grid">
          {STATS.map((s, i) => (
            <article key={i} className="whynow__card">
              <div className="whynow__value">{s.value}</div>
              <div className="whynow__label">{s.label}</div>
              <p className="whynow__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNowSection
