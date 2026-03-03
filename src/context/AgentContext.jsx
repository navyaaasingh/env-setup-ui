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
    case 'RESET':
      return {
        ...initialState,
        model: state.model,
        mode: state.mode,
      };
    default:
      return state;
  }
}

export const AgentContext = createContext(null);

export function AgentProvider({ children }) {
  const [state, dispatch] = useReducer(agentReducer, initialState);

  return (
    <AgentContext.Provider value={{ state, dispatch }}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent() {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgent must be used within AgentProvider');
  }
  return context;
}
