import React from 'react'
import Navbar from './Navbar'
import './HeroSection.css'

function HeroSection({ onOpenForm }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={`${import.meta.env.BASE_URL}images/macbook-bg.png`} alt="" className="hero__bg-img" />
      </div>
      <Navbar onOpenForm={onOpenForm} />
      <div className="hero__content">
        <div className="hero__shadow" />
        <h1 className="hero__title">
          Построим эталонную систему для управления продажами девелопера
        </h1>
        <button className="hero__button" onClick={onOpenForm} type="button">
          Записаться на аудит
        </button>
      </div>
    </section>
  )
}

export default HeroSection
