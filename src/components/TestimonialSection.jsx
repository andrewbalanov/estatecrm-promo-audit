import React from 'react'
import './TestimonialSection.css'

function TestimonialSection({ onOpenPresentation }) {
  const base = import.meta.env.BASE_URL
  const ballsSrc = `${base}images/new/testimonial-3d-balls.png`

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial__container">
        <h2 className="testimonial__title">
          Отзыв нашего клиента
          <br />
          <span className="testimonial__title-accent">BI&nbsp;Group</span>
        </h2>

        <div className="testimonial__stage">
          <img
            className="testimonial__balls testimonial__balls--left"
            src={ballsSrc}
            alt=""
            aria-hidden
          />
          <img
            className="testimonial__balls testimonial__balls--right"
            src={ballsSrc}
            alt=""
            aria-hidden
          />
          <article className="testimonial__card">
            <p className="testimonial__quote">
              Специалисты&nbsp;EstateCRM провели детализированный анализ процессов от&nbsp;лидген площадок до&nbsp;формирования отчетности.
              <br />
              <br />
              Особенно хотелось&nbsp;бы отметить, что некоторые из&nbsp;предложенных рекомендаций уже были успешно пропилотированы и&nbsp;внедрены. В&nbsp;том числе, одно из&nbsp;ваших предложений по&nbsp;внедрению систем триггерных коммуникаций получило свое продолжение и&nbsp;уже на&nbsp;сегодня{' '}
              <em>помогло сгенерировать новые продажи, чьи&nbsp;суммы исчисляются миллионами долларов.</em>
            </p>
            <p className="testimonial__author">Head of Customer Data, BI&nbsp;Group</p>
          </article>
        </div>

        <button
          className="testimonial__cta"
          type="button"
          onClick={onOpenPresentation}
        >
          <span className="testimonial__cta-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="testimonial__cta-text">
            Скачать кейсы застройщиков
            <br />
            по&nbsp;цифровизации коммерческого блока
          </span>
        </button>
      </div>
    </section>
  )
}

export default TestimonialSection
