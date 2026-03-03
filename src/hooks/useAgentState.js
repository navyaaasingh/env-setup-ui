import { useCallback } from 'react'
import { useAgent } from '../context/AgentContext.jsx'

export function useAgentState() {
  const { state, dispatch } = useAgent()

  const setPrompt = useCallback(
    (prompt) => dispatch({ type: 'SET_PROMPT', payload: prompt }),
    [dispatch]
  )

  const setModel = useCallback(
    (model) => dispatch({ type: 'SET_MODEL', payload: model }),
    [dispatch]
  )

  const setAgentMode = useCallback(
    (mode) => dispatch({ type: 'SET_AGENT_MODE', payload: mode }),
    [dispatch]
  )

  const runAgent = useCallback(async () => {
    if (!state.prompt.trim()) return

    dispatch({ type: 'START_THINKING' })

    await delay(1200)
    dispatch({ type: 'START_EXECUTING' })

    await delay(1200)
    dispatch({ type: 'ADVANCE_STEP', payload: 2 })

    await delay(1200)
    dispatch({
      type: 'COMPLETE',
      payload: `Agent completed your request:\n\n"${state.prompt}"\n\nHere is a simulated output based on your query. In a real deployment, this would contain the actual agent response from the configured AI model.`,
    })
  }, [state.prompt, dispatch])

  const stopAgent = useCallback(() => {
    dispatch({ type: 'SET_ERROR', payload: 'Agent stopped by user.' })
  }, [dispatch])

  const approveStep = useCallback(() => {
    dispatch({ type: 'START_EXECUTING' })
  }, [dispatch])

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [dispatch])

  return {
    state,
    setPrompt,
    setModel,
    setAgentMode,
    runAgent,
    stopAgent,
    approveStep,
    reset,
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
