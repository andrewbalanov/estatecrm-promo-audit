import React, { useState } from 'react'
import './AuditFormModal.css'

const BITRIX_WEBHOOK = 'https://tracebs.bitrix24.ru/rest/2/7det75s26t8s9sz6/'
const PDF_URL = `${import.meta.env.BASE_URL}files/estatecrm-audit-2026.pdf`

function PresentationFormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    consent: true,
    marketing: true,
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const triggerDownload = () => {
    const link = document.createElement('a')
    link.href = PDF_URL
    link.download = 'EstateCRM-Audit-2026.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const bitrixPromise = fetch(`${BITRIX_WEBHOOK}crm.lead.add.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            TITLE: `Скачивание презентации — ${form.company || form.name}`,
            NAME: form.name,
            COMPANY_TITLE: form.company,
            EMAIL: [{ VALUE: form.email, VALUE_TYPE: 'WORK' }],
            PHONE: [{ VALUE: form.phone, VALUE_TYPE: 'WORK' }],
            SOURCE_ID: 'UC_RP7YY3',
            UF_CRM_1760704782049: 'https://promo.estatecrm.io/audit/',
            UF_CRM_1738824489: 'Скачать презентацию',
            COMMENTS: `Источник: Лендинг «Аудит CRM» — форма скачивания презентации\nМаркетинговая рассылка: ${form.marketing ? 'Да' : 'Нет'}`,
          },
        }),
      })

      const emailPromise = fetch('/audit/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          consent: form.consent,
          marketing: form.marketing,
          formType: 'presentation',
        }),
      }).catch(err => console.error('Email notification error:', err))

      const [bitrixResponse] = await Promise.all([bitrixPromise, emailPromise])
      const data = await bitrixResponse.json()

      if (data.result) {
        setStatus('success')
        setTimeout(triggerDownload, 600)
      } else {
        console.error('Bitrix24 error:', data)
        setErrorMsg('Не удалось отправить заявку. Попробуйте ещё раз.')
        setStatus('error')
      }
    } catch (err) {
      console.error('Network error:', err)
      setErrorMsg('Ошибка сети. Проверьте подключение и попробуйте ещё раз.')
      setStatus('error')
    }
  }

  const handleClose = () => {
    setStatus('idle')
    setErrorMsg('')
    setForm({ name: '', company: '', email: '', phone: '', consent: true, marketing: true })
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal__header">
          <button className="modal__close" onClick={handleClose} type="button">&times;</button>
          <h2 className="modal__title">Скачать презентацию</h2>
          <p className="modal__subtitle">
            Оставьте контакты — мы пришлём презентацию «Антикризисный Аудит 2026»
          </p>
        </div>
        {status === 'success' ? (
          <div className="modal__body">
            <div className="modal__success">
              <div className="modal__success-icon">&#10003;</div>
              <h3>Презентация отправлена</h3>
              <p>Скачивание начнётся автоматически. Если этого не произошло, нажмите кнопку ниже.</p>
              <button className="modal__submit" type="button" onClick={triggerDownload}>
                Скачать презентацию
              </button>
              <button
                className="modal__submit modal__submit--ghost"
                type="button"
                onClick={handleClose}
                style={{ marginTop: 12 }}
              >
                Закрыть
              </button>
            </div>
          </div>
        ) : (
          <form className="modal__body" onSubmit={handleSubmit}>
            <div className="modal__field">
              <label className="modal__label">Имя <span>*</span></label>
              <input className="modal__input" type="text" name="name" value={form.name} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <div className="modal__field">
              <label className="modal__label">Название компании <span>*</span></label>
              <input className="modal__input" type="text" name="company" value={form.company} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <div className="modal__field">
              <label className="modal__label">Рабочая почта <span>*</span></label>
              <input className="modal__input" type="email" name="email" value={form.email} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <div className="modal__field">
              <label className="modal__label">Телефон <span>*</span></label>
              <input className="modal__input" type="tel" name="phone" value={form.phone} onChange={handleChange} required disabled={status === 'loading'} />
            </div>
            <label className="modal__checkbox">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required disabled={status === 'loading'} />
              <span>Согласие на обработку <a href="https://estatecrm.io/confidentiality/" target="_blank" rel="noreferrer">персональных данных</a></span>
            </label>
            <label className="modal__checkbox">
              <input type="checkbox" name="marketing" checked={form.marketing} onChange={handleChange} disabled={status === 'loading'} />
              <span>Хочу получать email с новыми кейсами, рекламой и <a href="https://estatecrm.io/soglasie-na-rassylku/" target="_blank" rel="noreferrer">быть в курсе важных событий</a></span>
            </label>
            {status === 'error' && (<p className="modal__error">{errorMsg}</p>)}
            <button className="modal__submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Отправка...' : 'Получить презентацию'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default PresentationFormModal
