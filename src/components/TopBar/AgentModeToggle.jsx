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
}
