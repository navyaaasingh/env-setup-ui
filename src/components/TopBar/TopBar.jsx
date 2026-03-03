import React from 'react';
import ModelSelector from './ModelSelector';
import AgentModeToggle from './AgentModeToggle';
import AttachFiles from './AttachFiles';

export default function TopBar() {
  return (
    <div
      className="flex items-center gap-4 px-4 py-3 glass-card"
      style={{
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
        flexShrink: 0,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-lg font-bold"
          style={{
            background: 'linear-gradient(45deg, #F59E0B, #EA580C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ◈
        </span>
        <span className="text-sm font-semibold" style={{ color: '#FAFAF9' }}>
          AI Agent
        </span>
      </div>

      <div className="h-4 w-px" style={{ backgroundColor: '#2D2626' }} />

      <ModelSelector />

      <div className="h-4 w-px" style={{ backgroundColor: '#2D2626' }} />

      <AgentModeToggle />

      <div className="ml-auto">
        <AttachFiles />
      </div>
    </div>
  );
}
