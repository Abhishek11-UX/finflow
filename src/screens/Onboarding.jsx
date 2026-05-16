import React from 'react'
import StatusBar from '../components/StatusBar'

export default function Onboarding({ onNavigate }) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="onboarding-content">
        <div className="onboarding-illustration">
          <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="180" height="180">
            {/* Background circle */}
            <circle cx="90" cy="90" r="80" fill="rgba(29,185,84,0.08)" />
            <circle cx="90" cy="90" r="60" fill="rgba(29,185,84,0.06)" />
            {/* Wallet body */}
            <rect x="30" y="62" width="110" height="72" rx="14" fill="#1C1C27" stroke="rgba(29,185,84,0.4)" strokeWidth="1.5"/>
            {/* Wallet flap */}
            <path d="M30 76 Q30 62 44 62 H136 Q150 62 150 76 V82 H30 V76Z" fill="#242433"/>
            {/* Card slot highlight */}
            <rect x="100" y="88" width="38" height="24" rx="8" fill="#1DB954" opacity="0.15" stroke="#1DB954" strokeWidth="1"/>
            <circle cx="119" cy="100" r="6" fill="#1DB954" opacity="0.5"/>
            <circle cx="113" cy="100" r="6" fill="#FFA726" opacity="0.4"/>
            {/* Lines suggesting cash */}
            <rect x="42" y="92" width="45" height="4" rx="2" fill="rgba(255,255,255,0.12)"/>
            <rect x="42" y="102" width="32" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
            {/* Decorative coins */}
            <circle cx="142" cy="48" r="14" fill="#FFA726" opacity="0.15" stroke="#FFA726" strokeWidth="1"/>
            <text x="142" y="53" textAnchor="middle" fontSize="14" fill="#FFA726" fontWeight="700">₹</text>
            <circle cx="38" cy="44" r="10" fill="#1DB954" opacity="0.15" stroke="#1DB954" strokeWidth="1"/>
            <text x="38" y="49" textAnchor="middle" fontSize="11" fill="#1DB954" fontWeight="700">↑</text>
            {/* Sparkle dots */}
            <circle cx="155" cy="78" r="3" fill="#1DB954" opacity="0.6"/>
            <circle cx="22" cy="95" r="2" fill="#FFA726" opacity="0.5"/>
            <circle cx="162" cy="110" r="2" fill="white" opacity="0.3"/>
          </svg>
        </div>
        <h1 className="onboarding-h1">Know where your<br/>money goes</h1>
        <p className="onboarding-body">
          Track spending, hit savings goals, and stay in control of your financial future.
        </p>
      </div>
      <div className="onboarding-bottom">
        <button className="btn-primary" onClick={() => onNavigate('Home')}>
          Get Started
        </button>
        <span className="text-link">
          Already have an account? <span onClick={() => onNavigate('Home')}>Sign in</span>
        </span>
      </div>
    </div>
  )
}
