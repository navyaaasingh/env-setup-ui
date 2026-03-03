import React from 'react'
import ModelSelector from './ModelSelector.jsx'
import AgentModeToggle from './AgentModeToggle.jsx'
import AttachFiles from './AttachFiles.jsx'
import StatusBadge from '../StatusIndicator/StatusBadge.jsx'

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-border-subtle glass-card flex-shrink-0">
      <div className="flex items-center gap-3">
        <ModelSelector />
        <AgentModeToggle />
      </div>
      <div className="flex items-center gap-3">
        <StatusBadge />
        <AttachFiles />
      </div>
    </header>
  )
}
