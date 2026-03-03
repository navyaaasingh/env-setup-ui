import React from "react"
import { useAgent } from "../../context/AgentContext.jsx"
import PromptInput from "./PromptInput.jsx"
import ActionButtons from "./ActionButtons.jsx"
import { Zap } from "lucide-react"

const stateBorderMap = {
  idle: "border-white/10",
  thinking: "border-blue-400/40",
  executing: "border-blue-500/40",
  waiting: "border-emerald-400/50",
  completed: "border-green-400/40",
  error: "border-red-400/50",
}

export default function PromptArea() {
  const { state } = useAgent()
  const { status } = state

  return (
    <div
      className={`
        relative rounded-3xl p-8
        bg-white/5 backdrop-blur-2xl
        border ${stateBorderMap[status] || "border-white/10"}
        transition-all duration-500
        flex flex-col gap-6
      `}
    >
      <div className="absolute inset-0 rounded-3xl bg-blue-500/5 blur-2xl -z-10" />

      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Zap size={14} className="text-blue-400" />
        <span>
          {status === "idle" && "Ready — describe your task below"}
          {status === "thinking" && "Agent is thinking..."}
          {status === "executing" && "Agent is executing..."}
          {status === "waiting" && "Waiting for your approval"}
          {status === "completed" && "Task completed"}
          {status === "error" && "An error occurred"}
        </span>
      </div>

      <PromptInput />

      <div className="border-t border-white/10 pt-6">
        <ActionButtons />
      </div>

      {status === "completed" && state.output && (
        <div className="mt-3 p-5 rounded-2xl bg-green-500/5 border border-green-400/20 animate-fade-in">
          <p className="text-xs text-green-400 font-semibold mb-2 uppercase tracking-wider">
            Output
          </p>
          <p className="text-sm text-text-primary whitespace-pre-wrap leading-relaxed">
            {state.output}
          </p>
        </div>
      )}

      {status === "error" && state.error && (
        <div className="mt-3 p-5 rounded-2xl bg-red-500/5 border border-red-400/30 animate-fade-in">
          <p className="text-xs text-red-400 font-semibold mb-2 uppercase tracking-wider">
            Error
          </p>
          <p className="text-sm text-text-primary">
            {state.error}
          </p>
        </div>
      )}
    </div>
  )
}