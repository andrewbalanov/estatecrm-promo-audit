import React from 'react'
import './Footer.css'

function Footer() {
  const base = import.meta.env.BASE_URL
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <img className="footer__logo" src={`${base}images/new/logo.png`} alt="EstateCRM" />
            <p className="footer__tagline">
              Единая цифровая экосистема для&nbsp;недвижимости. Комплексная CRM-система
              для&nbsp;автоматизации процессов застройщиков, агентств недвижимости
              и&nbsp;управляющих компаний на&nbsp;базе BPM и&nbsp;low-code технологий.
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__title">Продукт</h4>
              <a className="footer__link" href="https://estatecrm.io" target="_blank" rel="noreferrer">EstateCRM</a>
              <a className="footer__link" href="https://estatecrm.io/#features" target="_blank" rel="noreferrer">Функционал</a>
              <a className="footer__link" href="https://estatecrm.io/#integrations" target="_blank" rel="noreferrer">Интеграции</a>
            </div>

            <div className="footer__col">
              <h4 className="footer__title">Компания</h4>
              <a className="footer__link" href="https://estatecrm.io/#cases" target="_blank" rel="noreferrer">Кейсы</a>
              <a className="footer__link" href="https://estatecrm.io/blog" target="_blank" rel="noreferrer">Блог</a>
              <a className="footer__link" href="https://estatecrm.io/contacts" target="_blank" rel="noreferrer">Контакты</a>
            </div>

            <div className="footer__col">
              <h4 className="footer__title">Контакты</h4>
              <a className="footer__link" href="mailto:sales@estatecrm.io">sales@estatecrm.io</a>
              <a className="footer__link" href="tel:+74950193013">+7&nbsp;(495)&nbsp;019-30-13</a>
              <span className="footer__link footer__link--muted">Москва, Россия</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            © {year} EstateCRM. Все права защищены. Материалы сайта носят информационный характер
            и&nbsp;не&nbsp;являются публичной офертой. Отправляя заявку, вы&nbsp;соглашаетесь
            с&nbsp;<a href="https://estatecrm.io/confidentiality/" target="_blank" rel="noreferrer">Политикой конфиденциальности</a>
            {' '}и&nbsp;условиями обработки персональных данных.
          </p>
          <div className="footer__legal-links">
            <a className="footer__link footer__link--small" href="https://estatecrm.io/confidentiality/" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
            <a className="footer__link footer__link--small" href="https://estatecrm.io/terms" target="_blank" rel="noreferrer">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
