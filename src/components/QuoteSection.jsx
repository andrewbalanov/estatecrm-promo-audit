import React from 'react'
import './QuoteSection.css'

function QuoteSection() {
  const base = import.meta.env.BASE_URL
  return (
    <section className="quote">
      <div className="quote__container">
        <div className="quote__card">
          <p className="quote__text">
            <strong>Мы проанализировали процессы 150+ застройщиков и </strong>
            <em>хотим передать вам лучшие практики рынка</em>
            <br />
            <strong>для увеличения маржи</strong>
            <br />
            <strong>с проектов</strong>
          </p>
        </div>
        <img
          className="quote__building"
          src={`${base}images/new/building.png`}
          alt="Проданные квартиры застройщика"
        />
      </div>
    </section>
  )
}

export default QuoteSection
