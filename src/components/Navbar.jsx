import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ onOpenForm }) {
  const [open, setOpen] = useState(false)

  const scrollToId = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // navbar height
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = [
    { text: 'Почему сейчас', id: 'whynow' },
    { text: 'Что проверим', id: 'audit' },
    { text: 'Как проходит', id: 'meeting' },
    { text: 'Записаться', id: 'book' },
  ]

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label="EstateCRM — к началу" onClick={handleLogoClick}>
          <img src={`${import.meta.env.BASE_URL}images/new/logo.png`} alt="EstateCRM" />
        </a>

        <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          {links.map(l => (
            <a key={l.id} className="nav__link" href={`#${l.id}`} onClick={scrollToId(l.id)}>
              {l.text}
            </a>
          ))}
          <button
            className="nav__cta nav__cta--mobile"
            type="button"
            onClick={() => { setOpen(false); onOpenForm?.() }}
          >
            Записаться на аудит
          </button>
        </nav>

        <button className="nav__cta nav__cta--desktop" type="button" onClick={onOpenForm}>
          Записаться на аудит
        </button>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          type="button"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
