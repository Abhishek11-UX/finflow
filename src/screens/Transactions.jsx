import React, { useState } from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import TransactionCard from '../components/TransactionCard'

const allTransactions = [
  { icon: '🍕', merchant: 'Zomato', date: 'Today, 1:30 PM', amount: 320, type: 'expense', cat: 'Food' },
  { icon: '🚇', merchant: 'Ola Auto', date: 'Today, 9:00 AM', amount: 85, type: 'expense', cat: 'Transport' },
  { icon: '💼', merchant: 'Salary — Infosys', date: 'May 1', amount: 45000, type: 'income', cat: 'Other' },
  { icon: '🛒', merchant: 'Blinkit', date: 'Apr 30', amount: 1240, type: 'expense', cat: 'Shopping' },
  { icon: '⚡', merchant: 'MSEDCL Electricity', date: 'Apr 29', amount: 890, type: 'expense', cat: 'Bills' },
  { icon: '🎵', merchant: 'Spotify Premium', date: 'Apr 28', amount: 179, type: 'expense', cat: 'Bills' },
  { icon: '🍔', merchant: 'McDonald\'s', date: 'Apr 27', amount: 465, type: 'expense', cat: 'Food' },
  { icon: '🚌', merchant: 'PMPML Bus Pass', date: 'Apr 25', amount: 200, type: 'expense', cat: 'Transport' },
]

const filters = ['All', 'Food', 'Transport', 'Shopping', 'Bills']

export default function Transactions({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allTransactions.filter(tx => {
    const matchFilter = activeFilter === 'All' || tx.cat === activeFilter
    const matchSearch = tx.merchant.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="screen">
      <StatusBar />

      <div className="screen-header">
        <span className="screen-header-title">Transactions</span>
      </div>

      <div className="screen-content">
        {/* Search */}
        <div className="search-bar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            placeholder="Search transactions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Filter chips */}
        <div className="filter-chips" style={{ marginBottom: 16 }}>
          {filters.map(f => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Summary row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <div className="card" style={{ flex: 1, textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>INCOME</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>₹45,000</div>
          </div>
          <div className="card" style={{ flex: 1, textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>SPENT</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-danger)', fontFamily: 'var(--font-display)' }}>₹3,379</div>
          </div>
          <div className="card" style={{ flex: 1, textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>COUNT</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{filtered.length}</div>
          </div>
        </div>

        {/* Transaction list */}
        <div className="card">
          {filtered.length > 0
            ? filtered.map((tx, i) => <TransactionCard key={i} {...tx} />)
            : (
              <div style={{ textAlign: 'center', padding: 32, color: 'var(--color-text-secondary)' }}>
                No transactions found
              </div>
            )
          }
        </div>
      </div>

      {/* FAB */}
      <button className="fab" onClick={() => onNavigate('AddTransaction')}>+</button>

      <BottomNav active="Transactions" onNavigate={onNavigate} />
    </div>
  )
}
