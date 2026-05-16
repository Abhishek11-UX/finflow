import React from 'react'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const profileRows = [
  { icon: '🏦', label: 'Linked Accounts', detail: '2 accounts' },
  { icon: '🔔', label: 'Notifications', detail: 'On' },
  { icon: '💱', label: 'Currency', detail: 'INR (₹)' },
  { icon: '🔒', label: 'Privacy & Security', detail: '' },
  { icon: '❓', label: 'Help & Support', detail: '' },
]

export default function Profile({ onNavigate }) {
  return (
    <div className="screen">
      <StatusBar />

      <div className="screen-header">
        <span className="screen-header-title">Profile</span>
      </div>

      <div className="screen-content">
        {/* Avatar + info */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="avatar" style={{ marginBottom: 14 }}>A</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
            Abhishek Sharma
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>abhishek.sharma@gmail.com</div>
          <div style={{ marginTop: 14 }}>
            <button className="btn-ghost" style={{ margin: '0 auto', display: 'block', width: 'auto' }}>
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
          {[
            { value: '3', label: 'Goals' },
            { value: '₹84K', label: 'Balance' },
            { value: '47', label: 'Txns' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Settings rows */}
        <div className="card">
          {profileRows.map(({ icon, label, detail }) => (
            <div key={label} className="profile-row">
              <div className="profile-row-left">
                <div className="profile-row-icon">{icon}</div>
                <span className="profile-row-text">{label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {detail && <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{detail}</span>}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          ))}

          {/* Log out */}
          <div className="profile-row">
            <div className="profile-row-left">
              <div className="profile-row-icon" style={{ background: 'var(--color-danger-dim)' }}>🚪</div>
              <span className="profile-row-text danger">Log Out</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0 4px', fontSize: 12, color: 'var(--color-text-secondary)' }}>
          FinFlow v1.0.0 · Made with ♥ in India
        </div>
      </div>

      <BottomNav active="Profile" onNavigate={onNavigate} />
    </div>
  )
}
