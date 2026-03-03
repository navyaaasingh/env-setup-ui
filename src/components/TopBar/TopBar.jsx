import React from "react"
import ModelSelector from "./ModelSelector.jsx"
import AgentModeToggle from "./AgentModeToggle.jsx"
import AttachFiles from "./AttachFiles.jsx"
import StatusBadge from "../StatusIndicator/StatusBadge.jsx"

export default function TopBar() {
  return (
    <header
      className="
        relative flex items-center justify-between
        px-8 py-4 flex-shrink-0
        bg-white/5 backdrop-blur-xl
        border-b border-white/10
        shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative flex items-center gap-4">
        <ModelSelector />
        <AgentModeToggle />
      </div>

      <div className="relative flex items-center gap-4">
        <StatusBadge />
        <AttachFiles />
      </div>
    </header>
  )
}