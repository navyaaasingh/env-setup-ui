<<<<<<< HEAD
import React from 'react';
import PromptInput from './PromptInput';
import ActionButtons from './ActionButtons';
import { useAgent } from '../../context/AgentContext';

export default function PromptArea() {
  const { state } = useAgent();
  const isWaiting = state.agentState === 'waiting';
  const isActive = ['thinking', 'executing'].includes(state.agentState);

  return (
    <div
      className="glass-card rounded-xl p-4 transition-all duration-300"
      style={{
        animation: isWaiting
          ? 'approve-pulse 1.5s ease-in-out infinite'
          : isActive
          ? 'breathe 3s ease-in-out infinite'
          : undefined,
        borderColor: isWaiting ? 'rgba(253, 224, 71, 0.5)' : isActive ? 'rgba(245, 158, 11, 0.4)' : '#2D2626',
      }}
    >
      <PromptInput />
      <div className="mt-3 flex items-center justify-between border-t pt-3" style={{ borderColor: '#2D2626' }}>
        <ActionButtons />
        {state.output && (
          <p className="max-w-sm truncate text-sm" style={{ color: '#71717A' }}>
            ✅ {state.output}
          </p>
        )}
      </div>
    </div>
  );
=======
import React from 'react'
import { useAgent } from '../../context/AgentContext.jsx'
import PromptInput from './PromptInput.jsx'
import ActionButtons from './ActionButtons.jsx'
import { Zap } from 'lucide-react'

const stateGlowMap = {
  idle: '',
  thinking: 'shadow-[0_0_40px_rgba(0,245,255,0.2)]',
  executing: 'shadow-[0_0_40px_rgba(0,245,255,0.25)]',
  waiting: 'animate-pulse-glow',
  completed: 'shadow-[0_0_40px_rgba(0,245,255,0.15)]',
  error: 'shadow-[0_0_40px_rgba(160,0,255,0.3)]',
}

const stateBorderMap = {
  idle: 'border-border-subtle',
  thinking: 'border-primary/40',
  executing: 'border-subtle-accent/40',
  waiting: 'border-subtle-accent/60',
  completed: 'border-green-400/30',
  error: 'border-accent/50',
}

export default function PromptArea() {
  const { state } = useAgent()
  const { status } = state

  return (
    <div
      className={`
        glass-card rounded-2xl p-6
        border ${stateBorderMap[status] || 'border-border-subtle'}
        ${stateGlowMap[status] || ''}
        transition-all duration-500
        flex flex-col gap-4
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Zap size={14} className="text-primary" />
        <span>
          {status === 'idle' && 'Ready — describe your task below'}
          {status === 'thinking' && 'Agent is thinking...'}
          {status === 'executing' && 'Agent is executing...'}
          {status === 'waiting' && 'Waiting for your approval'}
          {status === 'completed' && 'Task completed'}
          {status === 'error' && 'An error occurred'}
        </span>
      </div>

      {/* Input */}
      <PromptInput />

      {/* Actions */}
      <div className="border-t border-border-subtle pt-4">
        <ActionButtons />
      </div>

      {/* Output */}
      {status === 'completed' && state.output && (
        <div className="mt-2 p-4 rounded-xl bg-green-400/5 border border-green-400/20 animate-fade-in">
          <p className="text-xs text-green-400 font-semibold mb-2 uppercase tracking-wider">Output</p>
          <p className="text-sm text-text-primary whitespace-pre-wrap leading-relaxed">{state.output}</p>
        </div>
      )}

      {/* Error */}
      {status === 'error' && state.error && (
        <div className="mt-2 p-4 rounded-xl bg-accent/10 border border-accent/30 animate-fade-in">
          <p className="text-xs text-accent font-semibold mb-2 uppercase tracking-wider">Error</p>
          <p className="text-sm text-text-primary">{state.error}</p>
        </div>
      )}
    </div>
  )
>>>>>>> main
}
