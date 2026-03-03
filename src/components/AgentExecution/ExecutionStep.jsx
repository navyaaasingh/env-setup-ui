import React from 'react';

const STATUS_CONFIG = {
  pending: {
    dotColor: '#71717A',
    textColor: '#71717A',
    icon: '○',
    animate: false,
  },
  active: {
    dotColor: '#F59E0B',
    textColor: '#FAFAF9',
    icon: '◌',
    animate: true,
  },
  completed: {
    dotColor: '#22C55E',
    textColor: '#86EFAC',
    icon: '✓',
    animate: false,
  },
  error: {
    dotColor: '#DC2626',
    textColor: '#FCA5A5',
    icon: '✕',
    animate: false,
  },
};

export default function ExecutionStep({ step }) {
  const config = STATUS_CONFIG[step.status] || STATUS_CONFIG.pending;

  return (
    <div
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200"
      style={{
        backgroundColor:
          step.status === 'active'
            ? 'rgba(245, 158, 11, 0.08)'
            : step.status === 'completed'
            ? 'rgba(34, 197, 94, 0.05)'
            : 'transparent',
        animation: step.status === 'active' ? 'fade-in 0.4s ease-out forwards' : undefined,
      }}
    >
      {/* Status icon */}
      <div
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
        style={{
          color: config.dotColor,
          border: `2px solid ${config.dotColor}`,
          animation: step.status === 'active' ? 'spin-slow 2s linear infinite' : undefined,
        }}
      >
        {config.icon}
      </div>

      {/* Label */}
      <span
        className="text-sm font-medium transition-colors duration-200"
        style={{ color: config.textColor }}
      >
        {step.label}
      </span>

      {/* Active pulse indicator */}
      {step.status === 'active' && (
        <div className="ml-auto flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: '#F59E0B',
                animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
