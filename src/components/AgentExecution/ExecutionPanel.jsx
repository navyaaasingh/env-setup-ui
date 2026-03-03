import React from "react"
import { useAgent } from "../../context/AgentContext.jsx"
import AISphere from "./AISphere.jsx"
import ExecutionStep from "./ExecutionStep.jsx"

const VISIBLE_STATES = [
  "thinking",
  "executing",
  "waiting",
  "completed",
  "error",
]

export default function ExecutionPanel() {
  const { state } = useAgent()
  const { status, steps } = state

  const isVisible = VISIBLE_STATES.includes(status)
  if (!isVisible) return null

  const completedSteps = steps.filter(
    (s) => s.status === "completed"
  ).length

  const progress =
    steps.length > 0 ? (completedSteps / steps.length) * 100 : 0

  return (
    <div
      className="
        relative rounded-3xl p-8
        bg-white/5 backdrop-blur-2xl
        border border-white/10
        animate-fade-in
      "
    >
      <div className="absolute inset-0 rounded-3xl bg-blue-500/5 blur-3xl -z-10" />

      <div className="flex items-start gap-10">
        {/* AI Sphere */}
        <div className="flex-shrink-0 pt-4 pb-10">
          <AISphere />
        </div>

        {/* Steps */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Agent Execution
            </h3>
            <span className="text-xs text-text-muted capitalize">
              {status}
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <ExecutionStep key={step.id} step={step} index={index} />
            ))}
          </div>

          {["thinking", "executing"].includes(status) && (
            <div className="mt-6">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between mt-2">
                <span className="text-xs text-text-muted">
                  Progress
                </span>
                <span className="text-xs text-blue-400">
                  {completedSteps}/{steps.length} steps
                </span>
              </div>
            </div>
          )}

          {status === "completed" && (
            <div className="mt-6">
              <div className="h-1.5 w-full bg-green-400/30 rounded-full overflow-hidden">
                <div className="h-full w-full bg-green-400 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}