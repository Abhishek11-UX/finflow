import React from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import TransactionCard from '../components/TransactionCard'

const recentTx = [
  { icon: '🍕', merchant: 'Zomato', date: 'Today, 1:30 PM', amount: 320, type: 'expense' },
  { icon: '💼', merchant: 'Salary — Infosys', date: 'May 1, 2025', amount: 45000, type: 'income' },
  { icon: '🎵', merchant: 'Spotify Premium', date: 'Apr 30, 2025', amount: 179, type: 'expense' },
]

export default function Home({ onNavigate }) {
  return (
    <div className="screen">
      <StatusBar />

      {/* Greeting */}
      <div className="greeting-bar">
        <div>
          <div className="greeting-text">Good morning,</div>
          <div className="greeting-name">Abhishek 👋</div>
        </div>
        <button className="notif-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          <span className="notif-dot" />
        </button>
      </div>

      <div className="screen-content" style={{ paddingTop: 16 }}>
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-label">Total Balance</div>
          <div className="balance-amount">₹84,250</div>
          <div className="stat-chips">
            <div className="stat-chip up">
              <span>↑</span>
              <span>Income ₹45,000</span>
            </div>
            <div className="stat-chip down">
              <span>↓</span>
              <span>Spent ₹12,430</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          {[
            { icon: '↑', label: 'Send' },
            { icon: '↓', label: 'Receive' },
            { icon: '+', label: 'Add' },
            { icon: '⊞', label: 'More' },
          ].map(({ icon, label }) => (
            <button key={label} style={{
              flex: 1,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: 18, color: 'var(--color-primary)', fontWeight: 700 }}>{icon}</span>
              <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{label}</span>
            </button>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="section-header">
          <span className="section-title">Recent Transactions</span>
          <span className="section-link" onClick={() => onNavigate('Transactions')}>See all</span>
        </div>

        <div className="card">
          {recentTx.map((tx, i) => (
            <TransactionCard key={i} {...tx} />
          ))}
        </div>

        {/* Savings snapshot */}
        <div className="section-header">
          <span className="section-title">Savings Goals</span>
          <span className="section-link" onClick={() => onNavigate('Goals')}>See all</span>
        </div>

        <div className="card" style={{ display: 'flex', gap: 12 }}>
          {[
            { label: 'MacBook Pro', pct: 68, color: '#1DB954' },
            { label: 'Europe Trip', pct: 34, color: '#FFA726' },
            { label: 'Emergency', pct: 91, color: '#60a5fa' },
          ].map(({ label, pct, color }) => (
            <div key={label} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: `conic-gradient(${color} ${pct * 3.6}deg, var(--color-surface-2) 0)`,
                margin: '0 auto 8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--color-surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, color,
                  fontFamily: 'var(--font-display)',
                }}>
                  {pct}%
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="Home" onNavigate={onNavigate} />
    </div>
  )
}
