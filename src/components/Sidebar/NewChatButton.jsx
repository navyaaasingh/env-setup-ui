import React from 'react'
import { Plus } from 'lucide-react'
import { useAgent } from '../../context/AgentContext.jsx'

export default function NewChatButton({ collapsed }) {
  const { dispatch } = useAgent()

  const handleNewChat = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <button
      onClick={handleNewChat}
      title="New Chat"
      className={`
        sidebar-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
        text-text-primary hover:text-subtle-accent
        glass-card border-border-subtle
        transition-all duration-200
        ${collapsed ? 'justify-center' : ''}
      `}
    >
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-button-gradient flex items-center justify-center">
        <Plus size={16} className="text-background" strokeWidth={2.5} />
      </div>
      {!collapsed && (
        <span className="text-sm font-medium whitespace-nowrap">New Chat</span>
      )}
    </button>
  )
}
