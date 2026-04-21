import React from 'react'
import './QuoteSection.css'

function QuoteSection() {
  const base = import.meta.env.BASE_URL
  return (
    <section className="quote">
      <div className="quote__container">
        <div className="quote__card">
          <p className="quote__text">
            Мы проанализировали процессы <strong>150+ застройщиков</strong>{' '}
            <em>и хотим передать вам лучшие практики рынка</em>{' '}
            для увеличения маржи с проектов
          </p>
          <img
            className="quote__building"
            src={`${base}images/new/building.png`}
            alt="Проданные квартиры застройщика"
          />
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
