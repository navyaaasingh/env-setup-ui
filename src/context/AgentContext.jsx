<<<<<<< HEAD
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  agentState: 'idle',
  model: 'GPT-4',
  mode: 'agent',
  steps: [
    { id: 1, label: 'Searching data...', status: 'pending' },
    { id: 2, label: 'Analyzing results...', status: 'pending' },
    { id: 3, label: 'Generating output...', status: 'pending' },
  ],
  output: null,
  error: null,
  prompt: '',
};

function agentReducer(state, action) {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, agentState: action.payload };
    case 'SET_MODEL':
      return { ...state, model: action.payload };
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'SET_STEPS':
      return { ...state, steps: action.payload };
    case 'UPDATE_STEP':
      return {
        ...state,
        steps: state.steps.map((step) =>
          step.id === action.payload.id
            ? { ...step, status: action.payload.status }
            : step
        ),
      };
    case 'SET_OUTPUT':
      return { ...state, output: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, agentState: 'error' };
    case 'SET_PROMPT':
      return { ...state, prompt: action.payload };
=======
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

>>>>>>> main
    case 'RESET':
      return {
        ...initialState,
        model: state.model,
<<<<<<< HEAD
        mode: state.mode,
      };
    default:
      return state;
  }
}

export const AgentContext = createContext(null);

export function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState);
=======
        agentMode: state.agentMode,
      }

    default:
      return state
  }
}

export function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState)
>>>>>>> main

  return (
    <AgentContext.Provider value={{ state, dispatch }}>
      {children}
    </AgentContext.Provider>
<<<<<<< HEAD
  );
}

export function useAgent() {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgent must be used within AgentProvider');
  }
  return context;
}
=======
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
>>>>>>> main
