import React from "react"
import { ChevronDown } from "lucide-react"
import { useAgent } from "../../context/AgentContext.jsx"

const MODELS = ["GPT-4", "GPT-3.5", "Claude 3", "Gemini Pro", "Mistral"]

export default function ModelSelector() {
  const { state, dispatch } = useAgent()

  return (
    <div className="relative">
      <select
        value={state.model}
        onChange={(e) =>
          dispatch({ type: "SET_MODEL", payload: e.target.value })
        }
        className="
          appearance-none rounded-xl px-4 py-2.5 pr-9
          text-sm font-medium
          bg-white/5 backdrop-blur-md
          border border-white/10
          text-text-primary
          hover:border-white/20
          focus:outline-none focus:border-blue-400/40
          focus:shadow-[0_0_20px_rgba(59,130,246,0.4)]
          transition-all duration-300
          cursor-pointer
        "
      >
        {MODELS.map((model) => (
          <option
            key={model}
            value={model}
            className="bg-[#0b1220] text-text-primary"
          >
            {model}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
      />
    </div>
  )
}