import React from "react"
import { Bot, MessageSquare } from "lucide-react"
import { useAgent } from "../../context/AgentContext.jsx"

export default function AgentModeToggle() {
  const { state, dispatch } = useAgent()
  const isAgent = state.agentMode

  return (
    <button
      onClick={() =>
        dispatch({ type: "SET_AGENT_MODE", payload: !isAgent })
      }
      className={`
        relative flex items-center gap-2 px-4 py-2.5 rounded-xl
        text-sm font-semibold
        backdrop-blur-md
        border transition-all duration-300
        ${
          isAgent
            ? `
              bg-gradient-to-r from-blue-500/20 to-indigo-500/20
              border-blue-400/40
              text-blue-400
              shadow-[0_0_25px_rgba(59,130,246,0.6)]
            `
            : `
              bg-white/5
              border-white/10
              text-text-muted
              hover:text-blue-400
              hover:border-blue-400/40
            `
        }
      `}
    >
      {isAgent ? (
        <Bot size={15} className="text-blue-400" />
      ) : (
        <MessageSquare size={15} />
      )}
      <span>{isAgent ? "Agent Mode" : "Chat Mode"}</span>

      {isAgent && (
        <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl -z-10" />
      )}
    </button>
  )
}