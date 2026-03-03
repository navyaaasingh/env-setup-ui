import React from 'react';
import { useAgentState } from '../../hooks/useAgentState';

export default function ActionButtons() {
  const { state, startThinking, reset, approveStep } = useAgentState();
  const { agentState } = state;

  const isIdle = agentState === 'idle';
  const isRunning = ['thinking', 'executing'].includes(agentState);
  const isWaiting = agentState === 'waiting';
  const isDone = ['completed', 'error'].includes(agentState);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Run button */}
      {(isIdle || isDone) && (
        <button
          onClick={startThinking}
          className="btn-gradient flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          disabled={!state.prompt.trim() && isIdle}
          style={{
            opacity: !state.prompt.trim() && isIdle ? 0.5 : 1,
            cursor: !state.prompt.trim() && isIdle ? 'not-allowed' : 'pointer',
          }}
        >
          <span>▶</span>
          <span>Run</span>
        </button>
      )}

      {/* Stop button */}
      {isRunning && (
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: '#DC2626',
            color: '#FAFAF9',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EF4444';
            e.currentTarget.style.boxShadow = '0 0 16px rgba(220, 38, 38, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#DC2626';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span>■</span>
          <span>Stop</span>
        </button>
      )}

      {/* Approve Next Step button */}
      {isWaiting && (
        <button
          onClick={approveStep}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: 'rgba(253, 224, 71, 0.15)',
            color: '#FDE047',
            border: '1px solid rgba(253, 224, 71, 0.5)',
            animation: 'approve-pulse 1.5s ease-in-out infinite',
          }}
        >
          <span>✓</span>
          <span>Approve Next Step</span>
        </button>
      )}

      {/* Manual Override */}
      {(isRunning || isWaiting) && (
        <button
          onClick={reset}
          className="rounded-lg px-3 py-2 text-sm transition-all duration-200"
          style={{ color: '#71717A', backgroundColor: 'transparent', border: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#FAFAF9'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#71717A'; }}
        >
          Override
        </button>
      )}

      {/* Edit Instructions */}
      {!isIdle && (
        <button
          onClick={reset}
          className="rounded-lg px-3 py-2 text-sm transition-all duration-200"
          style={{ color: '#71717A', backgroundColor: 'transparent', border: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#F59E0B'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#71717A'; }}
        >
          ✎ Edit
        </button>
      )}
    </div>
  );
}
