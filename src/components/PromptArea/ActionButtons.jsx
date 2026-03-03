import React from "react"
import {
  Play,
  Square,
  CheckCircle,
  Edit3,
  RotateCcw,
  Cpu,
} from "lucide-react"
import { useAgentState } from "../../hooks/useAgentState.js"

export default function ActionButtons() {
  const { state, runAgent, stopAgent, approveStep, reset } = useAgentState()
  const { status, prompt } = state

  const isRunning = ["thinking", "executing"].includes(status)
  const isWaiting = status === "waiting"
  const isDone = ["completed", "error"].includes(status)
  const canRun = status === "idle" && prompt.trim().length > 0

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {!isRunning && !isDone && (
        <button
          onClick={runAgent}
          disabled={!canRun}
          className="
            flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-blue-500 to-indigo-600
            text-white
            shadow-[0_0_25px_rgba(59,130,246,0.6)]
            hover:scale-[1.03]
            transition-all duration-300
            disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
          "
        >
          <Play size={16} fill="currentColor" />
          Run Agent
        </button>
      )}

      {isRunning && (
        <button
          onClick={stopAgent}
          className="
            flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
            bg-red-500/20 text-red-400 border border-red-400/40
            hover:bg-red-500/30
            hover:shadow-[0_0_20px_rgba(248,113,113,0.5)]
            transition-all duration-300
          "
        >
          <Square size={16} fill="currentColor" />
          Stop
        </button>
      )}

      {isWaiting && (
        <button
          onClick={approveStep}
          className="
            flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
            bg-emerald-500/20 text-emerald-400 border border-emerald-400/40
            animate-pulse
            hover:bg-emerald-500/30
            transition-all duration-300
          "
        >
          <CheckCircle size={16} />
          Approve Next Step
        </button>
      )}

      {isRunning && (
        <button
          onClick={stopAgent}
          className="
            flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm
            bg-white/5 border border-white/10
            text-text-muted
            hover:text-blue-400 hover:border-blue-400/40
            transition-all duration-300
          "
        >
          <Cpu size={15} />
          Manual Override
        </button>
      )}

      {isDone && (
        <>
          <button
            onClick={reset}
            className="
              flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-600
              text-white
              shadow-[0_0_25px_rgba(59,130,246,0.6)]
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            <RotateCcw size={15} />
            New Task
          </button>

          <button
            onClick={() => {
              reset()
              setTimeout(() => {}, 50)
            }}
            className="
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm
              bg-white/5 border border-white/10
              text-text-muted
              hover:text-blue-400 hover:border-blue-400/40
              transition-all duration-300
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