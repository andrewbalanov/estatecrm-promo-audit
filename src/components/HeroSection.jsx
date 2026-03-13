import React from 'react'
import Navbar from './Navbar'
import './HeroSection.css'

function HeroSection({ onOpenForm }) {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <Navbar onOpenForm={onOpenForm} />
      <div className="hero__content">
        <h1 className="hero__title">
          Построим эталонную систему{' '}
          для управления продажами девелопера
        </h1>
        <p className="hero__subtitle">
          Эксперты EstateCRM приглашают застройщиков на бесплатный аудит вашей воронки продаж
          и разработку плана цифровизации коммерческого блока
        </p>
        <div className="hero__actions">
          <button className="hero__button" onClick={onOpenForm} type="button">
            Записаться на аудит
          </button>
          <div className="hero__trial">
            <svg className="hero__trial-icon" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            <span className="hero__trial-text">Бесплатно 3 дня<br/>71:59:59</span>
          </div>
        </div>
      </div>

      {/* Dashboard cards */}
      <div className="hero__dashboard">

        {/* 1 — Left column: calendar + donut */}
        <div className="hero__card hero__card--left">
          <div className="hero__cal">
            <span className="hero__cal-arrow">◀</span>
            <span className="hero__cal-range">Фев 2025 - Фев 226</span>
            <span className="hero__cal-arrow">▶</span>
          </div>
          <div className="hero__donut-wrap">
            <svg className="hero__donut-ring" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="56" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10"/>
              <circle cx="70" cy="70" r="56" fill="none" stroke="#3b9de6" strokeWidth="10"
                strokeDasharray="245 107" strokeDashoffset="-54" strokeLinecap="round"/>
            </svg>
            <div className="hero__donut-info">
              <span className="hero__donut-lbl">Годовой план, млн</span>
              <span className="hero__donut-val">₽238,098</span>
            </div>
          </div>
        </div>

        {/* 2 — Operations table */}
        <div className="hero__card hero__card--ops">
          <div className="hero__ops-head">
            <span className="hero__ops-ttl">Операции</span>
            <span className="hero__ops-filter">Фильтр <small>▾</small></span>
          </div>
          <div className="hero__ops-cols">
            <span>ДАТА</span>
            <span>ТИП ОПЕРАЦИИ</span>
            <span>ИТОГ</span>
          </div>
          <div className="hero__ops-body">
            <div className="hero__ops-row">
              <span className="hero__ops-dt">Дек. 25</span>
              <span className="hero__ops-ico hero__ops-ico--blue">
                <svg viewBox="0 0 16 16" width="12" height="12"><rect x="3" y="2" width="10" height="12" rx="1" fill="#fff"/></svg>
              </span>
              <span className="hero__ops-tx">Оплата рекламы, Директ</span>
              <span className="hero__ops-am hero__ops-am--r">-₽45К</span>
            </div>
            <div className="hero__ops-row">
              <span className="hero__ops-dt">Дек. 25</span>
              <span className="hero__ops-ico hero__ops-ico--navy">
                <svg viewBox="0 0 16 16" width="12" height="12"><path d="M4 4h8v8H4z" rx="1" fill="#fff"/></svg>
              </span>
              <span className="hero__ops-tx">Бронь, ЖК Свет, кв. 56</span>
              <span className="hero__ops-am hero__ops-am--g">+₽450К</span>
            </div>
            <div className="hero__ops-row">
              <span className="hero__ops-dt">Дек. 25</span>
              <span className="hero__ops-ico hero__ops-ico--navy">
                <svg viewBox="0 0 16 16" width="12" height="12"><path d="M4 4h8v8H4z" rx="1" fill="#fff"/></svg>
              </span>
              <span className="hero__ops-tx">Бронь, ЖК Свет, машиноместо</span>
              <span className="hero__ops-am hero__ops-am--g">+₽150К</span>
            </div>
          </div>
        </div>

        {/* 3 — Average check */}
        <div className="hero__card hero__card--avg">
          <div className="hero__avg-left">
            <span className="hero__avg-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#0078d4" strokeWidth="1.5"/>
                <path d="M8 12h8M12 8v8" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <span className="hero__avg-label">Средний чек</span>
              <span className="hero__avg-val">₽9 456 675<small>.00</small></span>
            </div>
          </div>
          <span className="hero__avg-arrow">→</span>
        </div>

        {/* 4 — Profit chart (detailed) */}
        <div className="hero__card hero__card--profit">
          <div className="hero__profit-head">
            <span className="hero__profit-ttl">Прибыль</span>
            <div className="hero__profit-legend">
              <span className="hero__profit-dot hero__profit-dot--exp" /> Расход
              <span className="hero__profit-dot hero__profit-dot--inc" /> Доход
              <span className="hero__profit-period">Месяц ▾</span>
            </div>
          </div>
          <svg className="hero__profit-chart" viewBox="0 0 340 170">
            {/* Grid lines */}
            <line x1="36" y1="10" x2="330" y2="10" stroke="#f0f0f5" strokeWidth="0.7"/>
            <line x1="36" y1="42" x2="330" y2="42" stroke="#f0f0f5" strokeWidth="0.7"/>
            <line x1="36" y1="74" x2="330" y2="74" stroke="#f0f0f5" strokeWidth="0.7"/>
            <line x1="36" y1="106" x2="330" y2="106" stroke="#f0f0f5" strokeWidth="0.7"/>
            <line x1="36" y1="138" x2="330" y2="138" stroke="#f0f0f5" strokeWidth="0.7"/>
            {/* Y labels */}
            <text x="30" y="14" textAnchor="end" fontSize="8" fill="#9ca3af">40к</text>
            <text x="30" y="46" textAnchor="end" fontSize="8" fill="#9ca3af">30к</text>
            <text x="30" y="78" textAnchor="end" fontSize="8" fill="#9ca3af">20к</text>
            <text x="30" y="110" textAnchor="end" fontSize="8" fill="#9ca3af">10к</text>
            <text x="30" y="142" textAnchor="end" fontSize="8" fill="#9ca3af">0к</text>
            {/* X labels */}
            <text x="58" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Пон.</text>
            <text x="102" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Вт.</text>
            <text x="146" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Ср.</text>
            <text x="190" y="156" textAnchor="middle" fontSize="7" fill="#0078d4" fontWeight="600">Чт.</text>
            <text x="234" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Пт.</text>
            <text x="278" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Сб.</text>
            <text x="322" y="156" textAnchor="middle" fontSize="7" fill="#9ca3af">Вс.</text>
            {/* Dashed line — расход */}
            <path d="M58,108 L102,95 L146,100 L190,68 L234,78 L278,88 L322,82"
              fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
            {/* Solid line — доход */}
            <path d="M58,118 L102,105 L146,90 L190,55 L234,65 L278,80 L322,90"
              fill="none" stroke="#0078d4" strokeWidth="2"/>
            {/* Vertical dashed guide */}
            <line x1="190" y1="55" x2="190" y2="138" stroke="#93c5fd" strokeWidth="0.8" strokeDasharray="3 3"/>
            {/* Active point */}
            <circle cx="190" cy="55" r="4" fill="#0078d4"/>
            <circle cx="190" cy="55" r="7" fill="none" stroke="#0078d4" strokeWidth="1" opacity="0.25"/>
            {/* Tooltip */}
            <rect x="152" y="38" width="76" height="14" rx="3" fill="#22c55e"/>
            <text x="190" y="48" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="600">-₽1,209 +9,488</text>
          </svg>
        </div>

        {/* 5 — Marketing sources */}
        <div className="hero__card hero__card--mkt">
          <div className="hero__mkt-head">
            <span className="hero__mkt-ttl">Маркетинг:<br/>источники</span>
            <span className="hero__mkt-filter">Фильтр <small>▾</small></span>
          </div>
          <div className="hero__mkt-list">
            <div className="hero__mkt-item">
              <span className="hero__mkt-dot" data-color="blue" />
              <span className="hero__mkt-name">Циан</span>
              <span className="hero__mkt-bar"><i data-color="blue" style={{width:'72%'}} /></span>
              <span className="hero__mkt-pct">32%</span>
            </div>
            <div className="hero__mkt-item">
              <span className="hero__mkt-dot" data-color="red" />
              <span className="hero__mkt-name">Авито</span>
              <span className="hero__mkt-bar"><i data-color="red" style={{width:'54%'}} /></span>
              <span className="hero__mkt-pct">24%</span>
            </div>
            <div className="hero__mkt-item">
              <span className="hero__mkt-dot" data-color="green" />
              <span className="hero__mkt-name">Сайт</span>
              <span className="hero__mkt-bar"><i data-color="green" style={{width:'42%'}} /></span>
              <span className="hero__mkt-pct">19%</span>
            </div>
            <div className="hero__mkt-item">
              <span className="hero__mkt-dot" data-color="yellow" />
              <span className="hero__mkt-name">Агент</span>
              <span className="hero__mkt-bar"><i data-color="yellow" style={{width:'31%'}} /></span>
              <span className="hero__mkt-pct">14%</span>
            </div>
          </div>
        </div>

      </div>

      <div className="hero__fade" />
    </section>
  )
}

export default HeroSection
