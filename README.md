# AI Agent Dashboard

A feature-rich desktop AI Agent Dashboard built from scratch with **React**, **Electron**, and **Tailwind CSS**. The UI provides a complete workflow for running AI agents: from prompt input through multi-step execution to output display.

---

## ✨ Features

- **AI Agent Workflow** — Define a task, watch the agent think, execute, and complete it in real-time
- **State-Based UI** — The entire interface adapts visually to the agent's current state (Idle → Thinking → Executing → Completed / Error)
- **Glassmorphism Design** — Dark, warm color palette with frosted-glass cards, heat shadows, and glow effects
- **Collapsible Sidebar** — Icon-only mode (68px) or expanded mode (240px) with Activity & Logs sections
- **Execution Breakdown Panel** — Animated step-by-step progress (Searching → Analyzing → Generating)
- **AI Sphere** — Animated radial gradient sphere that reacts to agent state
- **Model Selector** — Switch between GPT-4, Claude 3, Gemini Pro, and more
- **Agent / Chat Mode Toggle** — Switch between agent and chat modes
- **File Attachments** — Attach files to your prompt
- **Electron Desktop Shell** — Runs as a native desktop app via Electron

---

## 🎨 Design System

| Token | Color | Hex |
|-------|-------|-----|
| `background` | Deep Espresso | `#0F0A0A` |
| `surface` | Dark Rosewood | `#1C1616` |
| `primary` | Ember Orange | `#F59E0B` |
| `accent` | Crimson Flare | `#DC2626` |
| `subtle-accent` | Gold Dust | `#FDE047` |
| `text-primary` | Warm Stone | `#FAFAF9` |
| `text-muted` | Iron Ore | `#71717A` |

---

## 🛠 Tech Stack

| Technology | Role |
|------------|------|
| React 18 | UI framework |
| Vite | Bundler / dev server |
| Electron 29 | Desktop app shell |
| Tailwind CSS 3 | Utility-first styling |
| Axios | HTTP client |
| lucide-react | Icon library |
| Electron Builder | App packaging |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Install & Run (Web / Dev Server)

```bash
npm install
npm run dev
# Open http://localhost:5173 in your browser
```

### Run as a Desktop App (Electron)

```bash
npm install
npm run electron:dev
```

### Build for Production

```bash
# Build the React app
npm run build

# Package as a desktop app
npm run electron:build
# Output is in the release/ directory
```

---

## 📁 Project Structure

```
env-setup-ui/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── electron-builder.yml
├── electron/
│   ├── main.js          # Electron main process (BrowserWindow)
│   └── preload.js       # contextBridge API
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Root layout
    ├── index.css        # Tailwind + custom animations
    ├── context/
    │   └── AgentContext.jsx   # useReducer state management
    ├── hooks/
    │   └── useAgentState.js   # Custom agent state hook
    ├── utils/
    │   └── api.js             # Axios instance
    └── components/
        ├── Sidebar/           # Collapsible sidebar
        ├── TopBar/            # Model selector, mode toggle, attach
        ├── PromptArea/        # Main prompt input + action buttons
        ├── AgentExecution/    # Execution panel, steps, AI sphere
        └── StatusIndicator/   # Status badge
```

---

## 🔧 Agent States

| State | Description |
|-------|-------------|
| `idle` | Default — prompt input prominent and inviting |
| `thinking` | Pulsing sphere animation, first step active |
| `executing` | Progress through breakdown steps |
| `waiting` | Awaiting user approval (pulsing "Approve" button) |
| `completed` | All steps green, output displayed |
| `error` | Crimson glow, error message shown |
