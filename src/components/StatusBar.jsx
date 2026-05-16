import React from 'react'

export default function StatusBar() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <div className="status-bar">
      <span>{time}</span>
      <div className="notch" />
      <div className="status-icons">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.5C5.4 4.6 10.3 3 12 3s6.6 1.6 10.5 5.5l-1.4 1.4C17.8 6.6 14.7 5 12 5S6.2 6.6 2.9 9.9L1.5 8.5z" opacity=".4"/>
          <path d="M4.5 11.5C7.1 8.9 9.5 8 12 8s4.9.9 7.5 3.5l-1.4 1.4C15.9 10.7 14 10 12 10s-3.9.7-6.1 2.9l-1.4-1.4z"/>
          <circle cx="12" cy="18" r="2"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20 }}>
          <rect x="2" y="7" width="18" height="10" rx="2" opacity=".3"/>
          <rect x="2" y="7" width="13" height="10" rx="2"/>
          <path d="M22 11v2a1 1 0 000-2z"/>
        </svg>
      </div>
    </div>
  )
}
