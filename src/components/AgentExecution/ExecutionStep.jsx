import React from 'react'
import { CheckCircle, XCircle, Clock, Loader } from 'lucide-react'

const stepConfig = {
  pending: {
    icon: Clock,
    iconClass: 'text-text-muted',
    textClass: 'text-text-muted',
    bg: 'bg-surface/40',
    border: 'border-border-subtle',
  },
  active: {
    icon: Loader,
    iconClass: 'text-primary animate-spin-custom',
    textClass: 'text-text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/40',
  },
  completed: {
    icon: CheckCircle,
    iconClass: 'text-green-400',
    textClass: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/30',
  },
  error: {
    icon: XCircle,
    iconClass: 'text-accent',
    textClass: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
}

export default function ExecutionStep({ step, index }) {
  const config = stepConfig[step.status] || stepConfig.pending
  const Icon = config.icon

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg
        border ${config.border} ${config.bg}
        transition-all duration-300 animate-fade-in
      `}
    >
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        <Icon size={18} className={config.iconClass} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${config.textClass} truncate`}>
          {step.label}
        </p>
      </div>
      <div className="text-xs text-text-muted capitalize">
        {step.status === 'active' ? 'In progress' : step.status}
      </div>
    </div>
  )
}
