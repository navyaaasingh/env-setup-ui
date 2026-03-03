<<<<<<< HEAD
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
=======
import React from 'react'
import { useAgent } from '../../context/AgentContext.jsx'
import {
  CheckCircle,
  XCircle,
  Loader,
  Clock,
} from 'lucide-react'

const statusConfig = {
  idle: { label: 'Idle', color: 'text-text-muted', bg: 'bg-text-muted/10', dot: 'bg-text-muted' },
  thinking: { label: 'Thinking', color: 'text-primary', bg: 'bg-primary/10', dot: 'bg-primary' },
  executing: { label: 'Executing', color: 'text-accent', bg: 'bg-accent/10', dot: 'bg-accent' },
  waiting: { label: 'Awaiting Approval', color: 'text-subtle-accent', bg: 'bg-subtle-accent/10', dot: 'bg-subtle-accent' },
  completed: { label: 'Completed', color: 'text-green-400', bg: 'bg-green-400/10', dot: 'bg-green-400' },
  error: { label: 'Error', color: 'text-red-400', bg: 'bg-red-400/10', dot: 'bg-red-400' },
}

export default function StatusBadge() {
  const { state } = useAgent()
  const config = statusConfig[state.status] || statusConfig.idle

  const isActive = ['thinking', 'executing'].includes(state.status)

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
        ${config.color} ${config.bg} border border-current/20
        transition-all duration-300
      `}
    >
      <span
        className={`
          w-2 h-2 rounded-full ${config.dot}
          ${isActive ? 'animate-pulse' : ''}
        `}
      />
      {config.label}
    </div>
  )
>>>>>>> main
}
