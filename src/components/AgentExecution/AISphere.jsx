<<<<<<< HEAD
import React from 'react';
import { useAgent } from '../../context/AgentContext';

export default function AISphere() {
  const { state } = useAgent();
  const { agentState } = state;

  const isActive = ['thinking', 'executing'].includes(agentState);
  const isWaiting = agentState === 'waiting';
  const isCompleted = agentState === 'completed';
  const isError = agentState === 'error';

  const size = isActive ? 80 : 64;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Outer glow container */}
      <div
        className="flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          width: size + 24,
          height: size + 24,
          background: isActive
            ? 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          animation: isActive
            ? 'breathe 2s ease-in-out infinite'
            : isWaiting
            ? 'approve-pulse 2s ease-in-out infinite'
            : undefined,
        }}
      >
        {/* Inner sphere */}
        <div
          className="flex items-center justify-center rounded-full transition-all duration-500"
          style={{
            width: size,
            height: size,
            background: isError
              ? 'radial-gradient(circle at 35% 35%, rgba(239, 68, 68, 0.9) 0%, rgba(153, 27, 27, 0.95) 100%)'
              : isCompleted
              ? 'radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.95) 100%)'
              : isWaiting
              ? 'radial-gradient(circle at 35% 35%, rgba(253, 224, 71, 0.8) 0%, rgba(245, 158, 11, 0.9) 100%)'
              : 'radial-gradient(circle at 35% 35%, rgba(253, 224, 71, 0.8) 0%, rgba(185, 28, 28, 0.9) 100%)',
            boxShadow: isActive
              ? '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(253, 224, 71, 0.2)'
              : isWaiting
              ? '0 0 20px rgba(253, 224, 71, 0.5)'
              : isCompleted
              ? '0 0 20px rgba(34, 197, 94, 0.5)'
              : '0 0 15px rgba(220, 38, 38, 0.3)',
            animation: isActive ? 'spin-slow 8s linear infinite' : undefined,
          }}
        >
          <span
            className="text-2xl select-none"
            aria-label={`Agent state: ${agentState}`}
          >
            {isError ? '⚠' : isCompleted ? '✓' : isWaiting ? '⏸' : isActive ? '⟳' : '◈'}
          </span>
        </div>
      </div>

      {/* State label */}
      <span className="text-xs font-medium capitalize" style={{ color: '#71717A' }}>
        {agentState}
      </span>
    </div>
  );
=======
import React from 'react'
import { useAgent } from '../../context/AgentContext.jsx'

export default function AISphere() {
  const { state } = useAgent()
  const isActive = ['thinking', 'executing', 'waiting'].includes(state.status)

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-full bg-glow-accent animate-pulse opacity-60"
          style={{ transform: 'scale(2.5)' }}
        />
      )}

      {/* Sphere */}
      <div
        className={`
          relative w-20 h-20 rounded-full bg-sphere-gradient
          flex items-center justify-center
          border border-white/10
          ${isActive ? 'animate-sphere-pulse' : 'opacity-70'}
          transition-all duration-500
        `}
        style={{
          boxShadow: isActive
            ? '0 0 40px rgba(0, 245, 255, 0.5), 0 0 80px rgba(160, 0, 255, 0.2)'
            : '0 0 20px rgba(160, 0, 255, 0.2)',
        }}
      >
        {/* Inner ring */}
        {isActive && (
          <div
            className="absolute inset-2 rounded-full border border-white/20 animate-spin-slow"
            style={{ borderTopColor: 'rgba(0, 245, 255, 0.6)' }}
          />
        )}

        {/* Core dot */}
        <div
          className={`
            w-4 h-4 rounded-full bg-white/90
            ${isActive ? 'animate-pulse' : ''}
          `}
        />
      </div>

      {/* Status label */}
      <div className="absolute -bottom-7 whitespace-nowrap">
        <p className="text-xs text-text-muted text-center">
          {state.status === 'idle' && 'AI Core'}
          {state.status === 'thinking' && 'Processing...'}
          {state.status === 'executing' && 'Executing...'}
          {state.status === 'waiting' && 'Awaiting input'}
          {state.status === 'completed' && 'Done'}
          {state.status === 'error' && 'Error'}
        </p>
      </div>
    </div>
  )
>>>>>>> main
}
