import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useAgent } from '../../context/AgentContext.jsx'

const MODELS = ['GPT-4', 'GPT-3.5', 'Claude 3', 'Gemini Pro', 'Mistral']

export default function ModelSelector() {
  const { state, dispatch } = useAgent()

  return (
    <div className="relative">
      <select
        value={state.model}
        onChange={(e) => dispatch({ type: 'SET_MODEL', payload: e.target.value })}
        className="
          appearance-none glass-card rounded-lg px-3 py-2 pr-8
          text-sm text-text-primary
          border border-border-subtle
          focus:outline-none focus:border-primary/50
          transition-all duration-200
          cursor-pointer
          bg-surface/60
          hover:border-primary/30
        "
      >
        {MODELS.map((model) => (
          <option key={model} value={model} className="bg-surface text-text-primary">
            {model}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
      />
    </div>
  )
}
