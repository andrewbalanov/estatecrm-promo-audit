import React, { useState } from 'react'
import './AuditFormModal.css'

function AuditFormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    consent: true,
    marketing: true,
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal__header">
          <button className="modal__close" onClick={onClose} type="button">&times;</button>
          <h2 className="modal__title">Аудит системы продаж</h2>
          <p className="modal__subtitle">
            Запишитесь на бесплатную встречу с экспертом и получите план цифровизации продаж
          </p>
        </div>
        <form className="modal__body" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label">Имя <span>*</span></label>
            <input
              className="modal__input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal__field">
            <label className="modal__label">Название компании <span>*</span></label>
            <input
              className="modal__input"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal__field">
            <label className="modal__label">Рабочая почта <span>*</span></label>
            <input
              className="modal__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal__field">
            <label className="modal__label">Телефон <span>*</span></label>
            <input
              className="modal__input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <label className="modal__checkbox">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
            />
            <span>Согласие на обработку <a href="#">персональных данных</a></span>
          </label>
          <label className="modal__checkbox">
            <input
              type="checkbox"
              name="marketing"
              checked={form.marketing}
              onChange={handleChange}
            />
            <span>Хочу получать email с новыми кейсами, рекламой и <a href="#">быть в курсе важных событий</a></span>
          </label>
          <button className="modal__submit" type="submit">Записаться на аудит</button>
        </form>
      </div>
    </div>
  )
}

export default AuditFormModal
