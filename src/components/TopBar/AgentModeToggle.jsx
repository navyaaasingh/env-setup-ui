<<<<<<< HEAD
import React from 'react';
import { useAgent } from '../../context/AgentContext';

export default function AgentModeToggle() {
  const { state, dispatch } = useAgent();
  const isAgent = state.mode === 'agent';

  return (
    <div
      className="flex rounded-lg p-0.5"
      style={{ backgroundColor: 'rgba(45, 38, 38, 0.7)', border: '1px solid #2D2626' }}
    >
      {['chat', 'agent'].map((mode) => {
        const isActive = state.mode === mode;
        return (
          <button
            key={mode}
            onClick={() => dispatch({ type: 'SET_MODE', payload: mode })}
            className="rounded-md px-3 py-1 text-sm font-medium capitalize transition-all duration-200"
            style={{
              backgroundColor: isActive ? '#F59E0B' : 'transparent',
              color: isActive ? '#0F0A0A' : '#71717A',
              boxShadow: isActive ? '0 0 10px rgba(245, 158, 11, 0.4)' : 'none',
            }}
          >
            {mode === 'agent' ? '🤖 Agent' : '💬 Chat'}
          </button>
        );
      })}
    </div>
  );
=======
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
>>>>>>> main
}
