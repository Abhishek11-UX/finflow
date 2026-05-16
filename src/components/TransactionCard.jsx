import React from 'react'

export default function TransactionCard({ icon, merchant, date, amount, type }) {
  return (
    <div className="transaction-card">
      <div className="tx-icon">{icon}</div>
      <div className="tx-info">
        <div className="tx-merchant">{merchant}</div>
        <div className="tx-date">{date}</div>
      </div>
      <div className={`tx-amount ${type}`}>
        {type === 'expense' ? '−' : '+'}₹{amount.toLocaleString('en-IN')}
      </div>
    </div>
  )
}
