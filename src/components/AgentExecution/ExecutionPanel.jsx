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
          <AISphere />
        </div>

        {/* Steps */}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
