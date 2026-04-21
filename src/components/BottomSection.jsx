import React, { useState } from 'react'
import './BottomSection.css'

const BITRIX_WEBHOOK = 'https://tracebs.bitrix24.ru/rest/2/7det75s26t8s9sz6/'

function BottomSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    consent: true,
    marketing: true,
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const bitrixPromise = fetch(`${BITRIX_WEBHOOK}crm.lead.add.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            TITLE: `Аудит CRM — ${form.company || form.name}`,
            NAME: form.name,
            COMPANY_TITLE: form.company,
            EMAIL: [{ VALUE: form.email, VALUE_TYPE: 'WORK' }],
            PHONE: [{ VALUE: form.phone, VALUE_TYPE: 'WORK' }],
            SOURCE_ID: 'UC_RP7YY3',
            UF_CRM_1760704782049: 'https://promo.estatecrm.io/audit/',
            UF_CRM_1738824489: 'Записаться (нижний блок)',
            COMMENTS: `Источник: Лендинг «Аудит CRM», нижний блок формы\nМаркетинговая рассылка: ${form.marketing ? 'Да' : 'Нет'}`,
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
          formType: 'bottom',
        }),
      }).catch(err => console.error('Email notification error:', err))

      const [bitrixResponse] = await Promise.all([bitrixPromise, emailPromise])
      const data = await bitrixResponse.json()
      if (data.result) {
        setStatus('success')
        setForm({ name: '', phone: '', company: '', email: '', consent: true, marketing: true })
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

  const base = import.meta.env.BASE_URL
  return (
    <section className="bottom" id="book">
      <div className="bottom__container">
        <img className="bottom__arrow" src={`${base}images/new/arrow-3d.png`} alt="" aria-hidden />
        <div className="bottom__content">
          <h2 className="bottom__title">
            <em>60&nbsp;минут</em>, которые <br /> покажут, где ваш <br /> проект теряет прибыль
          </h2>
          <p className="bottom__subtitle">
            Запишитесь на&nbsp;экспресс-аудит и&nbsp;получите конкретные управленческие рекомендации для&nbsp;вашего проекта
          </p>
        </div>

        <div className="bottom__form-wrap">
          {status === 'success' ? (
            <div className="bottom__success">
              <div className="bottom__success-icon" aria-hidden>✓</div>
              <h3>Заявка отправлена</h3>
              <p>Мы свяжемся с вами в ближайшее время для согласования даты аудита.</p>
            </div>
          ) : (
            <form className="bottom__form" onSubmit={handleSubmit}>
              <div className="bottom__field">
                <input
                  className="bottom__input"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="bottom__field">
                <input
                  className="bottom__input"
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="bottom__field">
                <input
                  className="bottom__input"
                  type="text"
                  name="company"
                  placeholder="Компания"
                  value={form.company}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="bottom__field">
                <input
                  className="bottom__input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <label className="bottom__checkbox">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
                <span>
                  Согласие на обработку{' '}
                  <a href="https://estatecrm.io/confidentiality/" target="_blank" rel="noreferrer">персональных данных</a>
                </span>
              </label>
              <label className="bottom__checkbox">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={form.marketing}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <span>
                  Хочу получать email с новыми кейсами, рекламой и{' '}
                  <a href="https://estatecrm.io/soglasie-na-rassylku/" target="_blank" rel="noreferrer">быть в курсе важных событий</a>
                </span>
              </label>

              {status === 'error' && (
                <p className="bottom__error">{errorMsg}</p>
              )}
              <button className="bottom__submit" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Отправка...' : 'Записаться'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BottomSection
