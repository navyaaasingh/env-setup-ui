import React, { useRef, useCallback } from 'react'
import { useAgent } from './context/AgentContext.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import TopBar from './components/TopBar/TopBar.jsx'
import PromptArea from './components/PromptArea/PromptArea.jsx'
import ExecutionPanel from './components/AgentExecution/ExecutionPanel.jsx'

const stateBackgroundMap = {
  idle: '',
  thinking: 'bg-[radial-gradient(ellipse_at_top_right,rgba(195,70,60,0.06)_0%,transparent_60%)]',
  executing: 'bg-[radial-gradient(ellipse_at_top_right,rgba(195,70,60,0.07)_0%,transparent_60%)]',
  waiting: 'bg-[radial-gradient(ellipse_at_center,rgba(141,49,45,0.05)_0%,transparent_70%)]',
  completed: 'bg-[radial-gradient(ellipse_at_top_right,rgba(74,222,128,0.05)_0%,transparent_60%)]',
  error: 'bg-[radial-gradient(ellipse_at_top_right,rgba(141,49,45,0.08)_0%,transparent_60%)]',
}

export default function App() {
  const { state } = useAgent()
  const bgClass = stateBackgroundMap[state.status] || ''
  const bgRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = bgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mouse-x', `${xPercent}%`)
    el.style.setProperty('--mouse-y', `${yPercent}%`)
  }, [])

  return (
    <div
      ref={bgRef}
      onMouseMove={handleMouseMove}
      className={`reactive-bg flex h-screen text-text-primary overflow-hidden transition-all duration-500 ${bgClass}`}
    >
      {/* Background glow decoration */}
      <div
        className="pointer-events-none fixed top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(141, 49, 45, 0.2) 0%, rgba(17, 16, 16, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <TopBar />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6">
            {/* Headline */}
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl font-bold text-gradient mb-2">
                AI Agent Dashboard
              </h1>
              <p className="text-text-muted text-sm">
                Describe your task and let the AI agent handle it end-to-end
              </p>
            </div>

            {/* Prompt area — the hero element */}
            <PromptArea />

            {/* Execution panel — shown when agent is active */}
            <ExecutionPanel />
          </div>
        </main>
      </div>
    </div>
  )
}
