import React, { createContext, useContext, useReducer } from 'react'

const AgentContext = createContext(null)

const initialState = {
  status: 'idle',
  prompt: '',
  output: '',
  error: null,
  steps: [
    { id: 'search', label: 'Searching data...', status: 'pending' },
    { id: 'analyze', label: 'Analyzing results...', status: 'pending' },
    { id: 'generate', label: 'Generating output...', status: 'pending' },
  ],
  model: 'GPT-4',
  agentMode: true,
}

function agentReducer(state, action) {
  switch (action.type) {
    case 'SET_PROMPT':
      return { ...state, prompt: action.payload }

    case 'SET_MODEL':
      return { ...state, model: action.payload }

    case 'SET_AGENT_MODE':
      return { ...state, agentMode: action.payload }

    case 'START_THINKING':
      return {
        ...state,
        status: 'thinking',
        error: null,
        output: '',
        steps: state.steps.map((s, i) =>
          i === 0 ? { ...s, status: 'active' } : { ...s, status: 'pending' }
        ),
      }

    case 'START_EXECUTING':
      return {
        ...state,
        status: 'executing',
        steps: state.steps.map((s, i) => {
          if (i === 0) return { ...s, status: 'completed' }
          if (i === 1) return { ...s, status: 'active' }
          return { ...s, status: 'pending' }
        }),
      }

    case 'ADVANCE_STEP':
      return {
        ...state,
        status: 'executing',
        steps: state.steps.map((s, i) => {
          if (i < action.payload) return { ...s, status: 'completed' }
          if (i === action.payload) return { ...s, status: 'active' }
          return { ...s, status: 'pending' }
        }),
      }

    case 'WAIT_FOR_INPUT':
      return { ...state, status: 'waiting' }

    case 'COMPLETE':
      return {
        ...state,
        status: 'completed',
        output: action.payload || 'Task completed successfully.',
        steps: state.steps.map((s) => ({ ...s, status: 'completed' })),
      }

    case 'SET_ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload || 'An unexpected error occurred.',
        steps: state.steps.map((s) =>
          s.status === 'active' ? { ...s, status: 'error' } : s
        ),
      }

    case 'RESET':
      return {
        ...initialState,
        model: state.model,
        agentMode: state.agentMode,
      }

    default:
      return state
  }
}

export function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState)

  return (
    <AgentContext.Provider value={{ state, dispatch }}>
      {children}
    </AgentContext.Provider>
  )
}

export function useAgent() {
  const context = useContext(AgentContext)
  if (!context) {
    throw new Error('useAgent must be used within an AgentProvider')
  }
  return context
}

export default AgentContext
