import React from "react"
import { useAgent } from "../../context/AgentContext.jsx"

export default function PromptInput() {
  const { state, dispatch } = useAgent()
  const isDisabled = ["thinking", "executing"].includes(state.status)

  return (
    <div className="relative flex-1">
      <textarea
        value={state.prompt}
        onChange={(e) =>
          dispatch({ type: "SET_PROMPT", payload: e.target.value })
        }
        disabled={isDisabled}
        placeholder="Describe what you want the AI agent to do..."
        rows={5}
        className="
          w-full bg-transparent text-text-primary
          placeholder-text-muted
          resize-none outline-none text-base leading-relaxed
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-opacity duration-200
        "
      />

      {state.prompt && !isDisabled && (
        <div className="absolute bottom-2 right-2 text-xs text-text-muted">
          {state.prompt.length} chars
        </div>
      )}
    </div>
  )
}