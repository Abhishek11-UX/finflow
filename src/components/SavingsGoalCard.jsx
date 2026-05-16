import React from 'react'

export default function SavingsGoalCard({ icon, name, saved, target, pct }) {
  return (
    <div className="goal-card">
      <div className="goal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="goal-icon">{icon}</div>
          <div>
            <div className="goal-name">{name}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>
              ₹{saved.toLocaleString('en-IN')} of ₹{target.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
        <div className="goal-pct">{pct}%</div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="goal-amounts">
        <span>₹{saved.toLocaleString('en-IN')} saved</span>
        <span>₹{(target - saved).toLocaleString('en-IN')} left</span>
      </div>
    </div>
  )
}
