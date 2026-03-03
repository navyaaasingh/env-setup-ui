# AI Agent Dashboard

> A sleek, dark-themed desktop AI agent interface built with React, Electron, and Tailwind CSS.

![Screenshot Placeholder](https://via.placeholder.com/1200x800/0F0A0A/F59E0B?text=AI+Agent+Dashboard)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Bundler | Vite 5 |
| Desktop Shell | Electron 28 |
| Styling | Tailwind CSS 3 |
| HTTP Client | Axios |
| Packaging | Electron Builder |

## Features

- 🤖 **Dual Mode** — Switch between Chat and Agent modes
- 🔄 **Real-time Execution Tracking** — Watch agent steps in real time with animated indicators
- 🎨 **Glassmorphism UI** — Dark red-tinted glass cards with heat-shadow glow effects
- 🌐 **Model Selection** — Choose between GPT-4, Claude 3.5, Gemini Pro, and Llama 3
- 📎 **File Attachment** — Attach files to agent prompts
- ✅ **Step Approval Flow** — Manually approve agent steps (human-in-the-loop)
- 🔍 **Collapsible Sidebar** — Icon-only or full sidebar with recent activity and logs
- 💡 **State-aware UI** — Visual feedback changes based on agent state (idle / thinking / executing / waiting / completed / error)

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| `background` | `#0F0A0A` | Main page background |
| `surface` | `#1C1616` | Cards, navigation, input fields |
| `primary` | `#F59E0B` | CTA buttons, active states |
| `accent` | `#DC2626` | Glow effects, icons |
| `subtle-accent` | `#FDE047` | Hover states, highlights |
| `text-primary` | `#FAFAF9` | Headings, body text |
| `text-muted` | `#71717A` | Footer links, placeholders |

## Setup

```bash
# Install dependencies
npm install

# Start web dev server
npm run dev

# Start Electron + Vite in dev mode
npm run electron:dev

# Build and package desktop app
npm run electron:build
```

## Project Structure

```
env-setup-ui/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── electron/
│   ├── main.js          # Electron main process
│   └── preload.js       # Context bridge / preload
├── src/
│   ├── main.jsx         # React entry point
│   ├── App.jsx          # Root layout
│   ├── index.css        # Tailwind + custom animations
│   ├── components/
│   │   ├── Sidebar/     # Collapsible navigation sidebar
│   │   ├── TopBar/      # Model selector, mode toggle, file attach
│   │   ├── PromptArea/  # Text input + action buttons
│   │   ├── AgentExecution/ # Execution panel, steps, AI sphere
│   │   └── StatusIndicator/ # Status badge component
│   ├── context/
│   │   └── AgentContext.jsx  # Global state (useReducer)
│   ├── hooks/
│   │   └── useAgentState.js  # Helper functions for state transitions
│   └── utils/
│       └── api.js       # Axios instance + API functions
└── electron-builder.yml
```

AI Agent Dashboard — Built with React, Electron, and Tailwind CSS.