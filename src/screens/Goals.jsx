import React from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import SavingsGoalCard from '../components/SavingsGoalCard'

const goals = [
  { icon: '💻', name: 'MacBook Pro 16"', saved: 81600, target: 120000, pct: 68 },
  { icon: '✈️', name: 'Europe Trip', saved: 47600, target: 140000, pct: 34 },
  { icon: '🛡️', name: 'Emergency Fund', saved: 182000, target: 200000, pct: 91 },
]

export default function Goals({ onNavigate }) {
  const totalSaved = goals.reduce((a, g) => a + g.saved, 0)
  const totalTarget = goals.reduce((a, g) => a + g.target, 0)

  return (
    <div className="screen">
      <StatusBar />

      <div className="screen-header" style={{ justifyContent: 'space-between' }}>
        <span className="screen-header-title">My Goals</span>
        <button className="btn-ghost">+ New Goal</button>
      </div>

      <div className="screen-content">
        {/* Overall progress */}
        <div className="balance-card" style={{ marginBottom: 20 }}>
          <div className="balance-label">Total Savings Progress</div>
          <div className="balance-amount">₹{totalSaved.toLocaleString('en-IN')}</div>
          <div style={{ marginBottom: 12 }}>
            <div className="progress-track" style={{ height: 8 }}>
              <div className="progress-fill" style={{ width: `${Math.round((totalSaved / totalTarget) * 100)}%` }} />
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
            {Math.round((totalSaved / totalTarget) * 100)}% of ₹{totalTarget.toLocaleString('en-IN')} goal
          </div>
        </div>

        {/* Goal cards */}
        {goals.map((goal, i) => (
          <SavingsGoalCard key={i} {...goal} />
        ))}

        {/* Tips card */}
        <div className="card" style={{ marginTop: 8, background: 'rgba(29,185,84,0.06)', borderColor: 'rgba(29,185,84,0.2)' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20 }}>💡</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 4 }}>
                Save ₹8,000/month
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                At your current pace, Europe Trip will be funded by October 2025.
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="Goals" onNavigate={onNavigate} />
    </div>
  )
}
