import React from 'react'

const icons = {
  Home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  Transactions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 12h10M4 18h7"/>
      <path d="M19 15l3 3-3 3"/>
    </svg>
  ),
  Goals: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="3" x2="12" y2="1"/>
    </svg>
  ),
  Cards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="3"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  ),
  Profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
}

const navItems = ['Home', 'Transactions', 'Goals', 'Cards', 'Profile']

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item}
          className={`nav-item ${active === item ? 'active' : ''}`}
          onClick={() => onNavigate(item)}
        >
          {icons[item]}
          {item}
        </button>
      ))}
    </nav>
  )
}
