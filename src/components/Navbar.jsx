import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ onOpenForm }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { text: 'Функционал', href: 'https://estatecrm.io/developers/' },
    { text: 'Продукты', href: 'https://estatecrm.io/developers/' },
    { text: 'Компания', href: 'https://estatecrm.io/company/' },
    { text: 'Кейсы', href: 'https://estatecrm.io/cases/' },
    { text: 'Интеграции', href: 'https://estatecrm.io/integrations/' },
    { text: 'Новости', href: 'https://estatecrm.io/blog/' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="https://estatecrm.io" target="_blank" rel="noopener noreferrer" className="navbar__logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="EstateCRM" className="navbar__logo-img" />
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {links.map(link => (
              <li key={link.text}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="navbar__link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__right">
            <a href="tel:+74950193013" className="navbar__phone">
              +7 (495) 019-30-13
            </a>
            <button className="navbar__cta" onClick={onOpenForm} type="button">
              Записаться на аудит
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
