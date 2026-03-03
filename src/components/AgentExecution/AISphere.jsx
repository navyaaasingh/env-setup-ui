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
          className="absolute inset-0 rounded-full bg-glow-red animate-pulse opacity-60"
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
            ? '0 0 40px rgba(141, 49, 45, 0.5), 0 0 80px rgba(195, 70, 60, 0.2)'
            : '0 0 20px rgba(141, 49, 45, 0.2)',
        }}
      >
        {/* Inner ring */}
        {isActive && (
          <div
            className="absolute inset-2 rounded-full border border-white/20 animate-spin-slow"
            style={{ borderTopColor: 'rgba(195, 70, 60, 0.6)' }}
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
}
