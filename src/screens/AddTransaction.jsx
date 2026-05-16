import React, { useState } from 'react'
import StatusBar from '../components/StatusBar'

const categories = [
  { icon: '🍕', label: 'Food' },
  { icon: '🚇', label: 'Transport' },
  { icon: '🛒', label: 'Shopping' },
  { icon: '⚡', label: 'Bills' },
  { icon: '💊', label: 'Health' },
  { icon: '🎮', label: 'Other' },
]

export default function AddTransaction({ onNavigate }) {
  const [amount, setAmount] = useState('')
  const [activeCategory, setActiveCategory] = useState('Food')
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      onNavigate('Transactions')
    }, 1200)
  }

  return (
    <div className="screen">
      <StatusBar />

      <div className="screen-header">
        <button className="back-btn" onClick={() => onNavigate('Transactions')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>
        <span className="screen-header-title">Add Expense</span>
      </div>

      <div className="screen-content">
        {/* Amount input */}
        <div className="big-amount">
          <input
            type="number"
            placeholder="₹ 0"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <div className="big-amount-line" style={{ background: amount ? 'var(--color-primary)' : undefined }} />
        </div>

        {/* Categories */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Category
          </div>
          <div className="category-row" style={{ flexWrap: 'wrap', gap: 10, justifyContent: 'flex-start' }}>
            {categories.map(({ icon, label }) => (
              <div
                key={label}
                className="category-chip"
                onClick={() => setActiveCategory(label)}
              >
                <div className={`cat-icon ${activeCategory === label ? 'active' : ''}`}>{icon}</div>
                <span className="cat-label" style={{ color: activeCategory === label ? 'var(--color-primary)' : undefined }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Note
          </div>
          <input
            className="input-field"
            placeholder="What was this for?"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
        </div>

        {/* Date */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Date
          </div>
          <div className="date-row">
            <div className="date-label">Date & Time</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="date-value">Today, 14:30</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div style={{ marginTop: 'auto', paddingTop: 24 }}>
          <button
            className="btn-primary"
            onClick={handleSave}
            style={{
              background: saved ? '#2e7d32' : undefined,
              transition: 'background 0.3s',
            }}
          >
            {saved ? '✓ Saved!' : 'Save Transaction'}
          </button>
        </div>
      </div>
    </div>
  )
}
