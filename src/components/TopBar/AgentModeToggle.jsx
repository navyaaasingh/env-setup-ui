import React from 'react'
import { Bot, MessageSquare } from 'lucide-react'
import { useAgent } from '../../context/AgentContext.jsx'

export default function AgentModeToggle() {
  const { state, dispatch } = useAgent()
  const isAgent = state.agentMode

  return (
    <button
      onClick={() => dispatch({ type: 'SET_AGENT_MODE', payload: !isAgent })}
      className={`
        relative flex items-center gap-1.5 px-3 py-2 rounded-lg
        border transition-all duration-200 text-sm font-medium
        ${isAgent
          ? 'border-primary/50 text-primary bg-primary/10 shadow-glow-primary'
          : 'border-border-subtle text-text-muted hover:text-text-primary hover:border-primary/30'
        }
      `}
    >
      {isAgent ? (
        <Bot size={15} className="text-primary" />
      ) : (
        <MessageSquare size={15} />
      )}
      <span>{isAgent ? 'Agent Mode' : 'Chat Mode'}</span>
    </button>
  )
}
