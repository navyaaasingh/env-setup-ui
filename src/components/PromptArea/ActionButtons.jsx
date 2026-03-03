import React from 'react'
import {
  Play,
  Square,
  CheckCircle,
  Edit3,
  RotateCcw,
  Cpu,
} from 'lucide-react'
import { useAgentState } from '../../hooks/useAgentState.js'

export default function ActionButtons() {
  const { state, runAgent, stopAgent, approveStep, reset } = useAgentState()
  const { status, prompt } = state

  const isRunning = ['thinking', 'executing'].includes(status)
  const isWaiting = status === 'waiting'
  const isDone = ['completed', 'error'].includes(status)
  const canRun = status === 'idle' && prompt.trim().length > 0

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Run Button */}
      {!isRunning && !isDone && (
        <button
          onClick={runAgent}
          disabled={!canRun}
          className={`
            btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
            disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
            transition-all duration-200
          `}
        >
          <Play size={16} fill="currentColor" />
          Run Agent
        </button>
      )}

      {/* Stop Button */}
      {isRunning && (
        <button
          onClick={stopAgent}
          className="
            flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
            bg-accent/20 text-accent border border-accent/40
            hover:bg-accent/30 hover:shadow-glow-accent
            transition-all duration-200
          "
        >
          <Square size={16} fill="currentColor" />
          Stop
        </button>
      )}

      {/* Approve Step */}
      {isWaiting && (
        <button
          onClick={approveStep}
          className="
            flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
            bg-subtle-accent/20 text-subtle-accent border border-subtle-accent/50
            hover:bg-subtle-accent/30
            animate-pulse-glow
            transition-all duration-200
          "
        >
          <CheckCircle size={16} />
          Approve Next Step
        </button>
      )}

      {/* Manual Override */}
      {isRunning && (
        <button
          onClick={stopAgent}
          className="
            flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm
            border border-border-subtle text-text-muted
            hover:text-text-primary hover:border-primary/30
            transition-all duration-200
          "
        >
          <Cpu size={15} />
          Manual Override
        </button>
      )}

      {/* Edit / Reset */}
      {isDone && (
        <>
          <button
            onClick={reset}
            className="
              flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
              bg-button-gradient text-background
              hover:scale-[1.03] hover:shadow-glow-primary
              transition-all duration-200
            "
          >
            <RotateCcw size={15} />
            New Task
          </button>
          <button
            onClick={() => {
              reset()
              setTimeout(() => {
                // restore prompt for editing
              }, 50)
            }}
            className="
              flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm
              border border-border-subtle text-text-muted
              hover:text-text-primary hover:border-primary/30
              transition-all duration-200
            "
          >
            <Edit3 size={15} />
            Edit Instructions
          </button>
        </>
      )}
    </div>
  )
}
