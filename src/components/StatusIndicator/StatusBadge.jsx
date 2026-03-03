import React from 'react';

const STATUS_MAP = {
  idle: { color: '#71717A', bg: 'rgba(113, 113, 122, 0.15)', border: 'rgba(113, 113, 122, 0.3)', pulse: false },
  thinking: { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', pulse: true },
  executing: { color: '#EA580C', bg: 'rgba(234, 88, 12, 0.15)', border: 'rgba(234, 88, 12, 0.4)', pulse: true },
  waiting: { color: '#FDE047', bg: 'rgba(253, 224, 71, 0.15)', border: 'rgba(253, 224, 71, 0.4)', pulse: true },
  completed: { color: '#22C55E', bg: 'rgba(34, 197, 94, 0.15)', border: 'rgba(34, 197, 94, 0.4)', pulse: false },
  error: { color: '#DC2626', bg: 'rgba(220, 38, 38, 0.15)', border: 'rgba(220, 38, 38, 0.4)', pulse: false },
};

export default function StatusBadge({ status }) {
  const config = STATUS_MAP[status] || STATUS_MAP.idle;

  return (
    <div
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        color: config.color,
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
      }}
    >
      {/* Indicator dot */}
      <div
        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: config.color,
          animation: config.pulse ? 'pulse 1.5s ease-in-out infinite' : undefined,
        }}
      />
      <span className="capitalize">{status}</span>
    </div>
  );
}
