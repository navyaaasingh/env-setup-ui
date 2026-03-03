import React from "react"
import { CheckCircle, XCircle, Clock, Loader } from "lucide-react"

const stepConfig = {
  pending: {
    icon: Clock,
    iconClass: "text-text-muted",
    textClass: "text-text-muted",
    bg: "bg-white/5",
    border: "border-white/10",
  },
  active: {
    icon: Loader,
    iconClass: "text-blue-400 animate-spin",
    textClass: "text-text-primary",
    bg: "bg-blue-500/10",
    border: "border-blue-400/40",
  },
  completed: {
    icon: CheckCircle,
    iconClass: "text-green-400",
    textClass: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-400/30",
  },
  error: {
    icon: XCircle,
    iconClass: "text-red-400",
    textClass: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-400/30",
  },
}

export default function ExecutionStep({ step }) {
  const config = stepConfig[step.status] || stepConfig.pending
  const Icon = config.icon

  return (
    <div
      className={`
        flex items-center gap-4 px-5 py-3 rounded-xl
        border ${config.border} ${config.bg}
        backdrop-blur-md
        transition-all duration-300
      `}
    >
      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
        <Icon size={18} className={config.iconClass} />
      </div>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${config.textClass}`}>
          {step.label}
        </p>
      </div>

      <div className="text-xs text-text-muted capitalize">
        {step.status === "active" ? "In progress" : step.status}
      </div>
    </div>
  )
}