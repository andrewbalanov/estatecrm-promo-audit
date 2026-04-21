import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ onOpenForm }) {
  const [open, setOpen] = useState(false)

  const links = [
    { text: 'Функционал', href: 'https://estatecrm.io/#features' },
    { text: 'Продукты', href: 'https://estatecrm.io/#products' },
    { text: 'Кейсы', href: 'https://estatecrm.io/#cases' },
    { text: 'Интеграции', href: 'https://estatecrm.io/#integrations' },
  ]

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="https://estatecrm.io" aria-label="EstateCRM">
          <img src={`${import.meta.env.BASE_URL}images/new/logo.png`} alt="EstateCRM" />
        </a>

        <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} className="nav__link" href={l.href} onClick={() => setOpen(false)}>
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
