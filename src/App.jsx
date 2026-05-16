import React, { useState } from 'react'
import './styles/components.css'

import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Transactions from './screens/Transactions'
import Goals from './screens/Goals'
import AddTransaction from './screens/AddTransaction'
import Profile from './screens/Profile'

const screens = {
  Onboarding,
  Home,
  Transactions,
  Goals,
  AddTransaction,
  Profile,
}

const demoLabels = {
  Onboarding: '① Onboarding',
  Home: '② Home',
  Transactions: '③ Transactions',
  Goals: '④ Goals',
  AddTransaction: '⑤ Add Expense',
  Profile: '⑥ Profile',
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Onboarding')

  const Screen = screens[currentScreen] || Home

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px 48px' }}>
      {/* Branding */}
      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.5px',
        }}>
          Fin<span style={{ color: 'var(--color-primary)' }}>Flow</span>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Personal Finance App · UI Prototype
        </div>
      </div>

      {/* Screen selector */}
      <div className="demo-nav">
        {Object.entries(demoLabels).map(([key, label]) => (
          <button
            key={key}
            className={`demo-btn ${currentScreen === key ? 'active' : ''}`}
            onClick={() => setCurrentScreen(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Phone */}
      <div className="phone-shell">
        <Screen onNavigate={setCurrentScreen} />
      </div>

      <div style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        390 × 844 px · iPhone 14/15 Pro
      </div>
    </div>
  )
}
