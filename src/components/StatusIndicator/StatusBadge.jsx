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
}
