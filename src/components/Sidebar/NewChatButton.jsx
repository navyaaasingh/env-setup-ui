import React from "react"
import { Plus } from "lucide-react"
import { useAgent } from "../../context/AgentContext.jsx"

export default function NewChatButton({ collapsed }) {
  const { dispatch } = useAgent()

  const handleNewChat = () => {
    dispatch({ type: "RESET" })
  }

  return (
    <button
      onClick={handleNewChat}
      title="New Chat"
      className={`
        relative w-full flex items-center gap-3
        px-3 py-2.5 rounded-xl
        transition-all duration-300
        bg-gradient-to-r from-blue-500/20 to-indigo-500/20
        border border-blue-400/30
        hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
        hover:scale-[1.02]
        backdrop-blur-md
        ${collapsed ? "justify-center" : ""}
      `}
    >
      {/* Subtle glow layer */}
      <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl -z-10" />

      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.7)]">
        <Plus size={16} className="text-white" strokeWidth={2.5} />
      </div>

      {!collapsed && (
        <span className="text-sm font-semibold tracking-tight text-blue-300 whitespace-nowrap">
          New Chat
        </span>
      )}
    </button>
  )
}