# 💸 FinFlow — Personal Finance Mobile App UI

A pixel-perfect React mobile UI prototype for a personal finance app targeting young professionals. Built with a dark theme, a full design system, and 6 interactive screens.

![FinFlow Preview](./preview.png)

---

## 📱 Screens

| Screen | Description |
|---|---|
| **Onboarding** | Welcome screen with illustration, CTA, and sign-in link |
| **Home / Dashboard** | Balance card, stat chips, recent transactions, savings snapshot |
| **Transactions** | Searchable + filterable transaction list with summary chips |
| **Savings Goals** | Goal cards with live progress bars and overall summary |
| **Add Expense** | Category picker, amount input, note, and date selection |
| **Profile** | Avatar, stats, settings rows, log out |

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1DB954` | CTAs, active states, progress |
| `--color-bg` | `#0F0F14` | App background |
| `--color-surface` | `#1C1C27` | Cards, inputs |
| `--color-text-primary` | `#FFFFFF` | Headings, amounts |
| `--color-text-secondary` | `#9B9BAD` | Labels, captions |
| `--color-danger` | `#FF5252` | Expenses, errors |
| `--color-warning` | `#FFA726` | Warnings |

### Typography
- **Display / Headings:** [Syne](https://fonts.google.com/specimen/Syne) — 700/800 weight
- **Body / UI:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) — 400/500/600 weight

### Spacing
All spacing uses multiples of 8px: `8, 16, 24, 32, 48`

---

## 🧩 Component Library

| Component | File | Description |
|---|---|---|
| `BottomNav` | `src/components/BottomNav.jsx` | 5-tab nav with active state |
| `StatusBar` | `src/components/StatusBar.jsx` | iOS-style status bar |
| `TransactionCard` | `src/components/TransactionCard.jsx` | Icon, merchant, date, amount |
| `SavingsGoalCard` | `src/components/SavingsGoalCard.jsx` | Goal with animated progress bar |

### UI Primitives (via CSS classes)
- `.btn-primary` — Full-width green CTA button
- `.btn-ghost` — Outlined ghost button
- `.input-field` — Styled text input
- `.filter-chip` — Toggle pill chip
- `.stat-chip` — Income/expense summary pill
- `.card` — Dark surface card
- `.balance-card` — Hero balance card with glow effect
- `.fab` — Floating action button

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/finflow.git
cd finflow

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# Output goes to /dist
```

---

## 📁 Project Structure

```
finflow/
├── index.html
├── vite.config.js
├── package.json
├── README.md
├── .gitignore
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root + screen routing
    ├── styles/
    │   ├── global.css        # Design tokens, resets
    │   └── components.css    # All component styles
    ├── components/
    │   ├── BottomNav.jsx
    │   ├── StatusBar.jsx
    │   ├── TransactionCard.jsx
    │   └── SavingsGoalCard.jsx
    └── screens/
        ├── Onboarding.jsx
        ├── Home.jsx
        ├── Transactions.jsx
        ├── Goals.jsx
        ├── AddTransaction.jsx
        └── Profile.jsx
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Dev server & bundler |
| CSS Custom Properties | — | Design tokens & theming |
| Google Fonts | — | Syne + DM Sans |



---

