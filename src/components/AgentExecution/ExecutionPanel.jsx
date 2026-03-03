<<<<<<< HEAD
import React from 'react';
import AISphere from './AISphere';
import ExecutionStep from './ExecutionStep';
import StatusBadge from '../StatusIndicator/StatusBadge';
import { useAgent } from '../../context/AgentContext';

export default function ExecutionPanel() {
  const { state } = useAgent();

  return (
    <div className="glass-card animate-fade-in rounded-xl p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold" style={{ color: '#FAFAF9' }}>
            Agent Execution
          </h2>
          <StatusBadge status={state.agentState} />
        </div>
        {state.agentState === 'completed' && (
          <span className="text-xs" style={{ color: '#71717A' }}>
            All tasks complete
          </span>
        )}
      </div>

      <div className="flex items-start gap-6">
        {/* AI Sphere */}
        <div className="flex-shrink-0">
=======
import React from 'react'
import { useAgent } from '../../context/AgentContext.jsx'
import AISphere from './AISphere.jsx'
import ExecutionStep from './ExecutionStep.jsx'

const VISIBLE_STATES = ['thinking', 'executing', 'waiting', 'completed', 'error']

export default function ExecutionPanel() {
  const { state } = useAgent()
  const { status, steps } = state

  const isVisible = VISIBLE_STATES.includes(status)

  if (!isVisible) return null

  return (
    <div className="glass-card rounded-2xl p-6 animate-scale-in">
      <div className="flex items-start gap-8">
        {/* AI Sphere */}
        <div className="flex-shrink-0 pt-2 pb-8">
>>>>>>> main
          <AISphere />
        </div>

        {/* Steps */}
<<<<<<< HEAD
        <div className="flex flex-1 flex-col gap-2">
          {state.steps.map((step) => (
            <ExecutionStep key={step.id} step={step} />
          ))}

          {/* Output */}
          {state.output && (
            <div
              className="mt-3 rounded-lg p-3 animate-fade-in"
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
              }}
            >
              <p className="text-sm" style={{ color: '#86EFAC' }}>
                ✅ {state.output}
              </p>
            </div>
          )}

          {state.error && (
            <div
              className="mt-3 rounded-lg p-3 animate-fade-in"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
              }}
            >
              <p className="text-sm" style={{ color: '#FCA5A5' }}>
                ❌ {state.error}
              </p>
=======
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Agent Execution
            </h3>
            <span className="text-xs text-text-muted capitalize">{status}</span>
          </div>
          <div className="space-y-2">
            {steps.map((step, index) => (
              <ExecutionStep key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Progress bar */}
          {['thinking', 'executing'].includes(status) && (
            <div className="mt-4">
              <div className="h-1 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-button-gradient rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${
                      (steps.filter((s) => s.status === 'completed').length /
                        steps.length) *
                      100
                    }%`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-text-muted">Progress</span>
                <span className="text-xs text-primary">
                  {steps.filter((s) => s.status === 'completed').length}/{steps.length} steps
                </span>
              </div>
            </div>
          )}

          {/* Completed state */}
          {status === 'completed' && (
            <div className="mt-4 flex items-center gap-2 text-green-400 animate-fade-in">
              <div className="h-1 w-full bg-green-400/30 rounded-full">
                <div className="h-full w-full bg-green-400 rounded-full" />
              </div>
>>>>>>> main
            </div>
          )}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> main
}
