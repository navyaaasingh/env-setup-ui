<<<<<<< HEAD
import React from 'react';
import { useAgent } from '../../context/AgentContext';

const MODELS = ['GPT-4', 'Claude 3.5', 'Gemini Pro', 'Llama 3'];

export default function ModelSelector() {
  const { state, dispatch } = useAgent();
=======
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useAgent } from '../../context/AgentContext.jsx'

const MODELS = ['GPT-4', 'GPT-3.5', 'Claude 3', 'Gemini Pro', 'Mistral']

export default function ModelSelector() {
  const { state, dispatch } = useAgent()
>>>>>>> main

  return (
    <div className="relative">
      <select
        value={state.model}
        onChange={(e) => dispatch({ type: 'SET_MODEL', payload: e.target.value })}
<<<<<<< HEAD
        className="appearance-none rounded-lg py-1.5 pl-3 pr-8 text-sm font-medium outline-none transition-all duration-200 cursor-pointer"
        style={{
          backgroundColor: 'rgba(45, 38, 38, 0.7)',
          color: '#FAFAF9',
          border: '1px solid #2D2626',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#F59E0B';
          e.currentTarget.style.boxShadow = '0 0 8px rgba(245, 158, 11, 0.3)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#2D2626';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {MODELS.map((m) => (
          <option key={m} value={m} style={{ backgroundColor: '#1C1616', color: '#FAFAF9' }}>
            {m}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs"
        style={{ color: '#F59E0B' }}
      >
        ▾
      </span>
    </div>
  );
=======
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
>>>>>>> main
}
