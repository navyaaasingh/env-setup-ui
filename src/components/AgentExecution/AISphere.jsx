import React from "react"
import { useAgent } from "../../context/AgentContext.jsx"

export default function AISphere() {
  const { state } = useAgent()
  const isActive = ["thinking", "executing", "waiting"].includes(state.status)

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ambient glow */}
      {isActive && (
        <div className="absolute w-52 h-52 rounded-full bg-blue-500/20 blur-[120px] animate-pulse" />
      )}

      {/* Main Sphere */}
      <div
        className={`
          relative w-24 h-24 rounded-full
          bg-gradient-to-br from-blue-500 to-indigo-600
          flex items-center justify-center
          border border-white/20
          transition-all duration-500
          ${isActive ? "shadow-[0_0_60px_rgba(59,130,246,0.7)]" : "opacity-80"}
        `}
      >
        {/* Rotating ring */}
        {isActive && (
          <div className="absolute inset-3 rounded-full border border-white/20 border-t-blue-400 animate-spin-slow" />
        )}

        {/* Core */}
        <div
          className={`
            w-5 h-5 rounded-full bg-white
            ${isActive ? "animate-pulse" : ""}
          `}
        />
      </div>

      {/* Status Label */}
      <div className="absolute -bottom-8 whitespace-nowrap">
        <p className="text-xs text-text-muted text-center">
          {state.status === "idle" && "AI Core"}
          {state.status === "thinking" && "Processing..."}
          {state.status === "executing" && "Executing..."}
          {state.status === "waiting" && "Awaiting input"}
          {state.status === "completed" && "Completed"}
          {state.status === "error" && "Error"}
        </p>
      </div>
    </div>
  )
}