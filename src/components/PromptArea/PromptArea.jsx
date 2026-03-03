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
}
