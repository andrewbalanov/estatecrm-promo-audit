import React from 'react'
import './BottomSection.css'

function BottomSection({ onOpenForm }) {
  return (
    <section className="bottom" id="book">
      {/* Background glows */}
      <div className="bottom__glow bottom__glow--1" />
      <div className="bottom__glow bottom__glow--2" />
      <div className="bottom__glow bottom__glow--3" />

      {/* Resource bg image */}
      <img src={`${import.meta.env.BASE_URL}images/resource-bg.png`} alt="" className="bottom__resource-bg" />

      {/* Expert section */}
      <p className="bottom__expert-label">С кем и когда пройдет встреча</p>

      <div className="bottom__expert-info">
        <h3 className="bottom__expert-role">
          Ведущий эксперт<br />EstateCRM
        </h3>
        <p className="bottom__expert-name">Глеб Цыганков</p>
        <p className="bottom__expert-desc">
          co-founder EstateCRM, founder Trace, 10+ лет в PropTech
        </p>
      </div>

      <div className="bottom__expert-photo-bg" />
      <div className="bottom__expert-photo-wrapper">
        <img src={`${import.meta.env.BASE_URL}images/gleb-photo.png`} alt="Глеб Цыганков" className="bottom__expert-photo" />
      </div>

      {/* Time box */}
      <div className="bottom__time-box">
        <span className="bottom__time-text">
          60 минут<br />online<span className="bottom__time-dot" />
        </span>
      </div>

      {/* Bonuses section */}
      <h3 className="bottom__bonuses-title">Бонусы после встречи</h3>

      <div className="bottom__bonuses">
        <div className="bottom__bonus-card">
          <svg className="bottom__bonus-icon" width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.7" cy="67.3" r="19.8" fill="#f6f8ff" />
            <circle cx="43.6" cy="51.4" r="23.7" fill="#f6f8ff" fillOpacity="0.5" />
            <circle cx="59.6" cy="35.4" r="27.5" fill="#f6f8ff" fillOpacity="0.25" />
          </svg>
          <h4 className="bottom__bonus-card-title">
            План цифровизации продаж
          </h4>
          <p className="bottom__bonus-card-desc">
            пошагово опишем, как выстроить управляемый процесс от заявки до выдачи ключей
          </p>
        </div>

        <div className="bottom__bonus-card">
          <img src={`${import.meta.env.BASE_URL}images/icon-star.png`} alt="" className="bottom__bonus-icon" />
          <h4 className="bottom__bonus-card-title">
            Специальные условия на внедрение EstateCRM
          </h4>
          <p className="bottom__bonus-card-desc">
            только для компаний, прошедших аудит
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bottom__cta" onClick={onOpenForm} type="button">
        Выбрать слот для встречи
      </button>
    </section>
  )
}

export default BottomSection
